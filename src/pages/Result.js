import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = () => {
    const navigate = useNavigate()
  return (
    <>
        <button onClick={()=>{navigate('/exam')}}>back</button>
        <div>Result</div>
    </>
  )
}

export default Result