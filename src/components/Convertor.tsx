import { useState } from "react";
import  ConvertVh  from "./Service/ConvertVh"
import  ConvertorVW  from "./Service/ConvertorVW"
import { InputNumber, Space , Button } from 'antd';
const Convertor = () => {
    
    const sum = ConvertorVW
    return(
<div className="Convertor">
    <div className="Convertor__HeaderBlock">
    <h1 className="Convertor__Header">Converter PX to VH and VW by Dino</h1>
    </div>
  
    <div className="Convertor__Block">
        <div className="Convertor__BlockOne">
       <ConvertorVW/>
        </div>
        <div className="Convertor__BlockOne">
        <ConvertVh/>
        </div>
    </div>
</div>
    )

}
export default Convertor