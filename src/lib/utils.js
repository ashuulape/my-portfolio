const { useState, useEffect } = require("react");

export default function useMousePosition(){
  const [mouesPosition, setmouesPosition] = useState({x:0 ,y:0})


    const update=(e)=>{
        setmouesPosition({x:e.clientX , y:e.clientY})
    }


    useEffect(()=>{
      window.addEventListener('mousemove',update)
      return ()=>{
        window.removeEventListener('mousemove',update)
      }
    })
  
}