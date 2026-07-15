"use client"

import { useEffect } from "react";
import { Grid } from "./components/ui/grid"

export function GridDemo() {

    
    const col=Math.floor(document.documentElement.clientWidth/100)
    const row=Math.floor(document.documentElement.clientHeight/100)

   
    


    
  return (
    <div className=" absolute z-0 w-full h-full space-y-8 overflow-hidden rounded-lg p-8 opacity-8">
    
        <Grid columns={col} rows={row} height="h-full " />
     
    </div>
  )
}
