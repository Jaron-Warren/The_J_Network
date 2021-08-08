import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    // logger.log(res.data)
    AppState.activeUserProfile = res.data
  }

  async destroy(id) {
    await api.delete('api/profiles/' + id)
    AppState.profiles = AppState.profiles.filter(p => p.id !== id)
  }
}

export const profileService = new ProfileService()
