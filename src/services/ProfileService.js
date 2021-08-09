import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileById(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      // logger.log(res.data)
      AppState.activeUserProfile = res.data
    } catch (error) {
      logger.log('problem getting profiles', error)
    }
  }

  async setUserProfile(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      // logger.log(res.data)
      AppState.userprofile = res.data
    } catch (error) {
      logger.log('problem getting user profile', error)
    }
  }

  async getProfilesByQuery() {
    try {
      const res = await api.get('api/profiles?query=' + AppState.query)
      logger.log(res.data)
      AppState.profilesquery = res.data
    } catch (error) {
      logger.log('problem getting profiles', error)
    }
  }

  async destroy(id) {
    await api.delete('api/profiles/' + id)
    AppState.profiles = AppState.profiles.filter(p => p.id !== id)
  }
}

export const profileService = new ProfileService()
