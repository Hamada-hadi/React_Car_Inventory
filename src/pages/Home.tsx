// @ts-ignore
import Background from '../assets/images/car.jpg'

function home() {
  return (
    <div
        style={{ backgroundImage: `url(${ Background})` }}
        className='flex justify-center mx-auto bg-cover bg-center bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 bg-white bg-opacity-50 text-white text-xl rounded'>Welcome To Our Garage</h3>
            </div>
    </div>
  )
}

export default home
