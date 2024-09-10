import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const userName = useWebExtensionStorage('user-name', '')
