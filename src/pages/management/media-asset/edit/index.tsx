// ** Next Imports
import { useRouter } from 'next/router'

const MediaAssetEditPage = () => {
  // ** Hooks
  const router = useRouter()

  router.push('/management/media-asset/list')
}

MediaAssetEditPage.acl = {
  action: 'read',
  subject: 'planner-page'
}

export default MediaAssetEditPage
