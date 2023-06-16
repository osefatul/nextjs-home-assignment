"use client"

type Props = {
  headerText: string 
}

import {useHeaderContext} from "../../context/headerContext"

export default async function HeaderText() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  const { headerText } = useHeaderContext()
  
  return (
      <div className="font-sans" >
          <p>{headerText}</p>
      </div>
  )

}