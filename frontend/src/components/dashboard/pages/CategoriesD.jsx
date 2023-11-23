import  {
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useFetchCategoriesQuery
} from '../../../redux/api/categoryApiSlice.js'

const CategoriesD = () => {
  const {data: categories} = useFetchCategoriesQuery()
  console.log(categories)
  
  return (
    <div className="w-full h-full bg-red-200">
    
    </div>
  )
}

export default CategoriesD