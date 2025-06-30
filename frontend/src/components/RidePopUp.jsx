import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
         <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
            <div className="flex items-center gap-3">
                 <img className="h-12 w-10 rounded-full object-cover w-12" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
                 <h2 className="text-lg font-medium">Harsh Patel</h2>
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
        <div className="mt-5 w-full">
        <div className="flex mt-5 w-full items-center justify-between">
          <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true)
          }}
          className="  bg-green-600 text-white font-semibold p-3 px-10  rounded-lg"
        > Accept
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
          className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
        > Ignore
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RidePopUp;
