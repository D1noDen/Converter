import {useState} from 'react'
import { Space , InputNumber , Button } from 'antd'
 const ConvertorVW =  ( ) => {
    const [sizeVW , SetSizeVW] = useState<number>(1020)
    const [windthVW , SetWidthVW] = useState(0)
     const [resultSize , setResultSize] = useState<number>(0)
    const result = (  screen:number , num:number  ) => {
        let sum :number = num / screen  * 100 
        setResultSize(sum)
    }
 return (
    <>
    <Space>
    <div style={{display:'flex' , flexDirection:'column'}}>
        <div style={{display:'flex' , flexDirection:"column"}}>
        <label>Screen width </label>
        <InputNumber size="large" type="number"  defaultValue={1920} min={1} max={100000}  style={{width:'20vw'}}  onChange={(e:number|any) => SetSizeVW(e)} />
        </div>
        <div style={{display:'flex' , flexDirection:"column"}}>
<label>Widht</label>
<InputNumber size="large" type="number" min={1} max={100000} style={{width:'20vw'}}  onChange={(e:number|any) => SetWidthVW(e)} />

</div>
<div className="Convertor__Result">{` ${resultSize.toFixed(2)} vw`}</div>
</div>
<button className='Convertor__button' disabled={!sizeVW && !windthVW ? true : false} onClick={() => result(sizeVW ,windthVW)}>Primary Button</button>

</Space>
</>
 )
}
export default ConvertorVW
