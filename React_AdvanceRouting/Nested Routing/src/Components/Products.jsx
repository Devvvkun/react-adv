import { Link } from "react-router-dom"
const Products = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black'>
      <div className="absolute w-auto top-20 ">
        <Link to='/products/men' className="text-white pr-4"> Men's</Link>
        <Link to='/products/women' className="text-white"> Women's</Link>
      </div>
      <h2 className='text-white'>Products Page</h2></div>
  )
}

export default Products