import Nav2 from './Nav2'

const Navbar1 = (props) => {
  return (
    <div className='gap-100 w-full bg-sky-500 text-white flex justify-around  items-center mx-4 absolute top-0'>
        <div>
            <h3>Navbar</h3>
        </div>
        <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar1