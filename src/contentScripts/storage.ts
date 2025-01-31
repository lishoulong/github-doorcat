import { useStorage } from '@vueuse/core'
import { APP_NAME } from './constants'
import { Issue } from './types'

export const repos = useStorage<{
  lastUpdated: number
  recent: string[]
  pinned: string[]
}>(`${APP_NAME}:repos`, {
  lastUpdated: 0,
  recent: [],
  pinned: [],
})

export const issues = useStorage<{
  recent: Issue[]
  pinned: Issue[]
}>(`${APP_NAME}:issues`, {
  recent: [],
  pinned: [],
})

export const pulls = useStorage<{
  recent: Issue[]
  pinned: Issue[]
}>(`${APP_NAME}:pulls`, {
  recent: [],
  pinned: [],
})
