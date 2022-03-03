import React, { useEffect, useState } from "react";
import Thumbnail from './HomeThumbnail'
import axios from "axios";




const Data = () => {
    const [DataName, setDataName] = useState([]);

    useEffect(() => {
      axios.get('https://f94836e9-9f51-4d28-82bd-9af8ad671717.mock.pstmn.io/example')
      .then(response => {
        console.log(response)
        setDataName(response.data)
      });
    },[]);

    useEffect(() => {
      console.log(DataName)
    },[DataName])

 


  return (
  <>
  
   <Thumbnail DataName={DataName} />
  </>
  )
};
export default Data;
