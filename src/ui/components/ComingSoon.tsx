import React from 'react'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

const ComingSoon: React.FC = () => {
  return (
    <div className='container py-9 md:py-14 text-center'>
      <img src={images.comingSoon} alt="coming soon image" className='m-auto mb-5 object-cover object-center'/>
      <Link
        to={"/home"}
        className="bg-black text-white py-2 px-4 rounded hover:bg-stone-700"
      >
        Back To Shopping
      </Link>
    </div>
  )
}

export default ComingSoon