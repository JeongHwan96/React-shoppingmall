import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
    const [DataName, setDataName] = useState("");
  useEffect(() => {
    axiosTest();
  });

  const axiosTest = async () => {
      try{
        const res = await axios.get("https://f94836e9-9f51-4d28-82bd-9af8ad671717.mock.pstmn.io/example")
        setDataName(res.data.name)
        console.log(res)
      }
      catch (err){
        console.log(err)
        alert(err.message);
      }
     
  }



  return (
  <>
    <p>Name1: {DataName}</p>
  </>
  )
};
export default Data;
