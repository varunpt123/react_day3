import { Button, TextField } from "@mui/material"
import React from 'react'

const Signup2 = () => {
  return (
    <div>
      <TextField variant="outlined" label="name"/><br></br>
      <TextField variant="outlined" label="age" /><br></br>
      <TextField variant="outlined" label="number"/><br></br>
      <TextField variant="outlined" label="password" /><br></br>
      <Button variant="text">press</Button>
      <Button variant="contained">LOG in</Button>
      <Button variant="outlined">GO BACK</Button>
      


    </div>
  )
}

export default Signup2