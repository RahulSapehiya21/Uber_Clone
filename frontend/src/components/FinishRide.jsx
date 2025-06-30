import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
     <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this ride </h3>
         <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
            <div className="flex items-center gap-3">
                 <img className="h-12 w-10 rounded-full object-cover w-12" src="https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg" alt="" />
                 <h2 className="text-lg font-medium">Kunal Agnihotri</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
         </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                sukhna lake,Chandigarh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                sukhna lake,Chandigarh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='mt-6 w-full'>
            <Link to='/captain-riding'
          className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg"
        > Finish ride!
        </Link>
       
        </div>
      </div>
    </div>
  )
}

export default FinishRide   