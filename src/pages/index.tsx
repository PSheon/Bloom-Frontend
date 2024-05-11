// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Layout Imports
import LandingLayout from 'src/layouts/LandingLayout'

// ** Custom Component Imports
import LandingHeaderSection from 'src/views/landing/sections/LandingHeaderSection'
import LandingFeaturesSection from 'src/views/landing/sections/LandingFeaturesSection'
import LandingPlatformSection from 'src/views/landing/sections/LandingPlatformSection'
import LandingCustomerSupportSection from 'src/views/landing/sections/LandingCustomerSupportSection'
import LandingBuyAndSellSection from 'src/views/landing/sections/LandingBuyAndSellSection'
import LandingSafeAndSecuritySection from 'src/views/landing/sections/LandingSafeAndSecuritySection'

// ** Type Imports
import type { ReactNode } from 'react'

const LandingPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <LandingHeaderSection />
      </Grid>
      <Grid item xs={12}>
        <LandingFeaturesSection />
      </Grid>
      <Grid item xs={12}>
        <LandingPlatformSection />
      </Grid>
      <Grid item xs={12}>
        <LandingCustomerSupportSection />
      </Grid>
      <Grid item xs={12}>
        <LandingBuyAndSellSection />
      </Grid>
      <Grid item xs={12}>
        <LandingSafeAndSecuritySection />
      </Grid>
    </Grid>
  )
}

LandingPage.authGuard = false
LandingPage.getLayout = (page: ReactNode) => <LandingLayout>{page}</LandingLayout>

export default LandingPage
