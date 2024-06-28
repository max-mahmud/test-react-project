import React, { useRef } from 'react'

const Pc = () => {
    const pcRef = useRef(null)
    const handelclick=()=>{
        pcRef.current.style.color="red"
        pcRef.current.focus()
        console.log(pcRef.current.value)
    }
  return (
    <div>
        <input ref={pcRef} type="text" name="" id="" />
        <button type='submit' onClick={handelclick}>click</button>
    </div>
  )
}

export default Pc