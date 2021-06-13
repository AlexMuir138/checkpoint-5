import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log('profile', res.data)
    AppState.activeProfile = res.data
  }

  async editProfile(picture, name) {
    await api.put('account', { picture, name })
  }
}

export const profileService = new ProfileService()
