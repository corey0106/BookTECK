import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice'
import blogsReducer from './blogSlice'
import latestReducer from './homeSlice'
import productsReduces from './productSlice'

export const store = configureStore({
  reducer: {
    user: usersReducer,
    blogs: blogsReducer,
    latestBlogs: latestReducer,
    products: productsReduces,
  },
})
