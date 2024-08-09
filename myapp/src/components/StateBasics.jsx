import { Box, Button, TextField, Typography } from '@mui/material'
import React, { Component, useState } from 'react'

const StateBasics = () => {
    const a="varun"
    var [val, setval] = useState("varun")
    var [name,setname]=useState()
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
      <div>
          <Typography variant="h3">Wellcome{name}</Typography><br></br>
          <TextField variant='outlined' label="Enter your name" onChange={handleinput} /><br></br>
          <Button variant="contained" onClick={submit}>Submit</Button><br></br>
    </div>
  )
}

export default StateBasics