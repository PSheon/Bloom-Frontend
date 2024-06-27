// ** MUI Imports
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'

// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** API Imports
import { useFindMeStatisticsQuery } from 'src/store/api/management/pointRecord'

/* TODO: fix here later */
const MePointsStatisticsCard = () => {
  // ** Hooks
  const { data: meStatisticsData, isLoading: isFindMeStatisticsDataLoading } = useFindMeStatisticsQuery(null)

  // ** Vars
  const totalReferrals = meStatisticsData?.totalReferrals || 0
  const totalCompletedTasks = meStatisticsData?.totalCompletedTasks || 0

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant='h6' component='h3'>
            Statistics
          </Typography>
        }
        subheader={
          <Stack direction='row' alignItems='center'>
            <Typography variant='caption' sx={{ mr: 1.5 }}>
              Total 42.5k Sales
            </Typography>
            <Typography variant='subtitle2' sx={{ '&, & + svg': { color: 'success.main' } }}>
              +18%
            </Typography>
            <Icon icon='mdi:chevron-up' fontSize='1.25rem' />
          </Stack>
        }
      />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Stack direction='row' spacing={4} alignItems='center'>
              <CustomAvatar skin='light' variant='rounded' color='primary'>
                <Icon icon='mdi:account-outline' />
              </CustomAvatar>
              <Stack>
                {isFindMeStatisticsDataLoading ? (
                  <Skeleton variant='text' width={100} height={32} />
                ) : (
                  <Typography variant='h6' component='p' sx={{ fontWeight: 600 }}>
                    {totalReferrals}
                  </Typography>
                )}
                <Typography variant='caption'>Total Referrals</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction='row' spacing={4} alignItems='center'>
              <CustomAvatar skin='light' variant='rounded' color='warning'>
                <Icon icon='mdi:poll' />
              </CustomAvatar>
              <Stack>
                {isFindMeStatisticsDataLoading ? (
                  <Skeleton variant='text' width={100} height={32} />
                ) : (
                  <Typography variant='h6' component='p' sx={{ fontWeight: 600 }}>
                    {totalCompletedTasks}
                  </Typography>
                )}
                <Typography variant='caption'>Total Completed Tasks</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MePointsStatisticsCard
