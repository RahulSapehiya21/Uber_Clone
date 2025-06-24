import React from "react";

const LocationSearchPanel = (props) => {

  // console.log(props);
  
  
  // Sample array for location 
  const locations = [
    "24B, Near kapoor's cafe, sheriyans coding school, Bhopal",
    "22C, Near kapoor's cafe, kendrriya vidayalaya, Bhopal",
    "20B, Near kapoor's cafe, Army Public school, Bhopal",
    "18A, Near kapoor's cafe, St. Columbus school, Bhopal",

  ]
  return (
    <div>
      
      {/* this is just a sample data */}

      {
        locations.map(function(elem,idx){
          return (
          <div key={idx} onClick={()=>{
            props.setvehiclePanel(true)
            props.setPanelOpen(false)
          }}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start">
        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12"><i className="ri-map-pin-fill"></i></h2>
        <h4 className="font-medium">{elem}</h4> 
      </div>
        );
        })
      }
      
    </div>
  )
}

export default LocationSearchPanel;
