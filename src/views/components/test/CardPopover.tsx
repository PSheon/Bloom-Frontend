// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardPopover = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  // ** Logics
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // ** Hooks
  const open = Boolean(anchorEl)

  return (
    <Card>
      <CardContent>
        <Button aria-describedby='card-simple-popover' variant='outlined' onClick={handleClick}>
          Open Popover
        </Button>
        <Popover open={open} anchorEl={anchorEl} onClose={handleClose} id='card-simple-popover'>
          <Typography sx={{ p: 4 }}>The content of the Popover.</Typography>
        </Popover>
      </CardContent>
    </Card>
  )
}

export default CardPopover
