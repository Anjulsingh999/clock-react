import React, { useState } from "react";




const Time=()=>{
   
    let  time=new Date().toLocaleTimeString();

    const [ctime,setCount]=useState(time);

    const refresh_time=()=>{
        time=new Date().toLocaleTimeString();
        setCount(time);
    }

    setInterval(refresh_time,1);

    return(
        <>
            <div className="display">
                {ctime}
                <button onClick={refresh_time}>Get Time</button>
            </div>
        </>
    )
}

export default Time;