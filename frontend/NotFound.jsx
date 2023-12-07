import notfound from '../frontend/src/assets/404.gif'
const NotFound = () => {
  return (
    <div className='max-w-screen-xl mx-auto centered'>
        <img src={notfound} className='xl:w-[350px]'/>
    </div>
  )
}

export default NotFound