import { useEffect } from 'react'
import  {
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useFetchCategoriesQuery
} from '../../../redux/api/categoryApiSlice.js'
import axios from 'axios'

const CategoriesD =  () => {
  useEffect(() => {
  axios.get("/api/category/categories")
  .then(res => {
    const data = res.data.Result

  })
  .catch(err => console.log(err))
  }, [])
  return (
    <div className="w-full h-full bg-red-200">
    
    </div>
  )
}

export default CategoriesD