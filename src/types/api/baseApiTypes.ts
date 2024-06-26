// ** Type Imports
import type { MediaAssetType } from 'src/types/mediaAssetTypes'
import type { UserDataType } from 'src/types/authTypes'

export type BaseApiResponseType<T> = {
  data: T
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export type BaseApiResponseErrorType<T> = {
  data: T
  error: {
    status: number
    name: string
    message: string
  }
}

export type MediaAssetApiResponseType = {
  data?: {
    id: number
    attributes: Omit<MediaAssetType, 'id'>
  }
}

export type UserApiResponseType = {
  data?: {
    id: number
    attributes: Omit<UserDataType, 'id' | 'avatar'> & {
      avatar: MediaAssetApiResponseType
    }
  }
}
