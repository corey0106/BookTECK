import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../../services/blog'
import parse from 'html-react-parser'
import styles from './BlogDetail.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await getBlog(id)
      setData(response)
      setTimeout(() => {
        setLoading(true)
      }, 1200)
    }

    getData()
  }, [])

  return (
    <main className={styles.container}>
      <section className={styles.innerContainer}>
        {!loading ? (
          <SkeletonTheme
            baseColor="#ededed"
            highlightColor="#3333"
          >
            <Skeleton className={styles.skeletonImg} />
            <br />
            <br />
            <Skeleton className={styles.skeletonTitle} />
            <br />
            <br />
            <Skeleton
              className={styles.skeletonDesc}
              count={6}
            />
          </SkeletonTheme>
        ) : (
          <div className={styles.detailContainer}>
            <img
              src={`http://localhost:3001/${data.image}`}
              alt={data.title}
            />
            <h1 className={styles.title}>{data.title}</h1>
            <div
              className={styles.desc}
              dangerouslySetInnerHTML={{
                __html: parse(data.description),
              }}
            ></div>
          </div>
        )}
      </section>
    </main>
  )
}

export default BlogDetail
