import { useNavigate } from 'react-router-dom'

const HomeBtn = () => {
    const navigate = useNavigate();
    function btnClick(){
        navigate('/')
    }
    function backbtnClick(){
        navigate(-1)
    }
    function nextbtnClick(){
        navigate(+1)
    }
  return (
    <>
    <button onClick={btnClick} className='absolute top-20 left-4 py-2 px-4 bg-emerald-400 text-white scale-x-90 cursor-pointer rounded-2xl'>Back to Home Page</button>
    <button onClick={backbtnClick} className='absolute top-20 left-52 py-2 px-4 bg-emerald-400 text-white scale-x-90 cursor-pointer rounded-2xl'>Back</button>
    <button onClick={nextbtnClick} className='absolute top-20 left-72 py-2 px-4 bg-emerald-400 text-white scale-x-90 cursor-pointer rounded-2xl'>Next</button>
  </>
  )
}

export default HomeBtn