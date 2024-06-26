// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Type Imports
import type { PageHeaderProps } from './types'

const PageHeader = (props: PageHeaderProps) => {
  // ** Props
  const { title, subtitle } = props

  return (
    <Grid item xs={12}>
      {title}
      {subtitle || null}
    </Grid>
  )
}

export default PageHeader
