"use client"
import { useState } from "react";
import { RowProps } from "../../../type.dt";
import {useHeaderContext} from "../../context/headerContext"

export default async function Row ({id, title, body, type, setSelected}: RowProps,) {
  const [clicked, setClicked] = useState(false)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  const { setHeaderText } = useHeaderContext()


  const handleButton = (id: number) =>{
    if(type === "allDataSet"){
      setHeaderText("Post Detail")
      setSelected(id)
    }
    return 
  }

  return (
    <div key={id} className="flex w-full space-x-1 space-y-1">
      <div 
      className={`
      w-[20%] 
      ${type === "allDataSet"? "hover:bg-green-700" : ""}
      h-10 pt-1 ${clicked? "bg-green-700": "bg-slate-100"} 
      flex items-center justify-center mt-1`}
      onClick={(e)=> handleButton(id)}>
        {id}
      </div>
      
      <div className="w-[15%] h-10 bg-slate-100 flex items-center justify-start overflow-hidden pl-1">
        {title.slice(0,20)}
      </div>
      
      <div className="w-[65%] h-10 bg-slate-100 flex items-center justify-start overflow-hidden pl-1">
        {body.slice(0,120)}
      </div>
    </div>
  )

}