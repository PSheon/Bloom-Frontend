// ** Next Imports
import { useRouter } from 'next/router'

const AnnouncementManagementPage = () => {
  // ** Hooks
  const router = useRouter()

  router.push('/management/announcement/list')
}

AnnouncementManagementPage.acl = {
  action: 'read',
  subject: 'planner-page'
}

export default AnnouncementManagementPage
