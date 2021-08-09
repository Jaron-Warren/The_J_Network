import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(account) {
    logger.log('you hit the account service to edit profile!', account)
    try {
      const res = await api.put('/account', account)
      AppState.account = res.data
      this.getAccount()
    } catch (err) {
      logger.error('Problem editing account', err)
    }
  }
}

export const accountService = new AccountService()
