import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D]'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="img" />
        <div className='bg-white pb-7 py-4 px-4'>
        <h2 className="text-3xl font-bold ">Get Started with Uber</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white'></Link></div>
    </div>
    </div>
  )
}

export default Home