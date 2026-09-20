import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
    const params = useParams()
    // console.log(params.courseId) // TO get the routed path
  return (
     <div className='flex justify-center items-center h-screen bg-black'>
      <h1 className='text-white'>Course Details of {params.courseId}</h1></div>
  )
}

export default CoursesDetail