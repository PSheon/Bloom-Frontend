// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

// ** Third-Party Imports
import { format } from 'date-fns'

// ** Type Imports
import { NotificationType } from 'src/types/api/notificationTypes'

interface Props {
  initNotificationEntity: NotificationType
}

const NotificationReadMetadataCard = (props: Props) => {
  // ** Props
  const { initNotificationEntity } = props

  return (
    <Card>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>屬性</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                編號
              </Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {`#${initNotificationEntity.id}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                更新日期
              </Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {format(new Date(initNotificationEntity.updatedAt), 'PPpp')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                建立日期
              </Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {format(new Date(initNotificationEntity.createdAt), 'PPpp')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default NotificationReadMetadataCard