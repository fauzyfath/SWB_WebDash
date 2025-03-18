import { useEffect, useState } from "react";
import DeviceInfoContainer from "./DeviceInfoContainer";

function InfoContainer() {
  const [devices, setDevices] = useState([])

  const deviceData = [
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"active"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"deactivate"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"active"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"deactivate"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"active"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"deactivate"},
    {"name": "johnDoe","location":"Lorem ipsum dolor sit amet.", "status":"full"},
  ]

  // Fetch data from api
  // useEffect(()=>{
  //   fetch("")
  //     .then(response => response.json())
  //     .then(data => setDevices(data))
  //     .catch(error => console.error("error Fetching data from api, Data:", error));
  // },[]);

  return (
    <div className="container w-[20%] h-[90%] select-none py-5 px-5 my-auto ml-10 bg-slate-100 ring-2 ring-inner ring-slate-300 shadow-xl shadow-slate-300 rounded-lg flex flex-col">
        <div className="flex flex-col gap-2 relative">
            <h1 className="font-[rethink sans] font-semibold text-2xl">AirWaste Device</h1>
            <div className="h-1 rounded-sm bg-gray-400"></div>
        </div>
        <article className="w-full h-full overflow-y-auto scrollbar-hide flex flex-col mt-5 px-1 pt-1 pb-1">
        {deviceData.map((device, index)=>(
            <DeviceInfoContainer className=""
              key={index} 
              name={device.name} 
              location={device.location} 
              status={device.status}
            />
          ))}
        </article>
    </div>
  )
};

export default InfoContainer;
