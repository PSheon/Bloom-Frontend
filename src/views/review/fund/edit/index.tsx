// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import ReviewFundEditBreadcrumbs from 'src/views/shared/PageBreadcrumbs'
import ReviewFundEditProfileHeaderCard from 'src/views/review/fund/edit/cards/ReviewFundEditProfileHeaderCard'
import ReviewFundEditTabContext from 'src/views/review/fund/edit/tabs/ReviewFundEditTabContext'

// ** Types
import { FundType, TabIndex } from 'src/types/api/fundTypes'

interface Props {
  initFundEntity: FundType
  tab: TabIndex
}

const ReviewFundEditSection = (props: Props) => {
  // ** Props
  const { initFundEntity, tab } = props

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ReviewFundEditBreadcrumbs
          pageLevels={[{ title: '資金審核', href: '/review/dashboard' }, { title: '編輯資金' }]}
        />
      </Grid>
      <Grid item xs={12}>
        <ReviewFundEditProfileHeaderCard initFundEntity={initFundEntity} />
      </Grid>
      <Grid item xs={12}>
        <ReviewFundEditTabContext initFundEntity={initFundEntity} tab={tab} />
      </Grid>
    </Grid>
  )
}

export default ReviewFundEditSection
