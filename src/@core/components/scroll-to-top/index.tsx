// ** MUI Imports
import Zoom from '@mui/material/Zoom'
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// ** Type Imports
import type { ReactNode } from 'react'

interface ScrollToTopProps {
  className?: string
  children: ReactNode
}

const ScrollToTopStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(10)
}))

const ScrollToTop = (props: ScrollToTopProps) => {
  // ** Props
  const { children, className } = props

  // ** Hooks
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true
  })

  // ** Logics
  const handleClick = () => {
    const anchor = document.querySelector('body')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled className={className} onClick={handleClick} role='presentation'>
        {children}
      </ScrollToTopStyled>
    </Zoom>
  )
}

export default ScrollToTop
