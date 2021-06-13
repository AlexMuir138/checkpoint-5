import { AppState } from '../AppState'

const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class AdService {
  async getAds(url = 'api/ads') {
    const res = await api.get(url)
    logger.log('the ads', res.data)
    AppState.randomAds = res.data
  }
}
export const adsService = new AdService()
