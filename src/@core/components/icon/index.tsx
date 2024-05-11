// ** Icon Imports
import { Icon } from '@iconify/react'

// ** Type Imports
import type { IconProps } from '@iconify/react'

const IconifyIcon = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize='1.5rem' {...rest} />
}

export default IconifyIcon
