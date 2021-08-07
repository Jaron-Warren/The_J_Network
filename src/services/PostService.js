import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  // NOTE pass in an object to set the queries with key value pairs
  async getAll(query = '') {
    // NOTE convertToQuery will take an object and turn it into a queryString
    // logger.log(query)
    const res = await api.get('api/posts/' + query)
    AppState.posts = res.data.posts
    AppState.postsInfo.page = res.data.page
    AppState.postsInfo.newer = res.data.newer ? res.data.newer.split('?').splice(1, 1) : null
    AppState.postsInfo.older = res.data.older ? res.data.older.split('?').splice(1, 1) : null
    // logger.log(AppState.postsInfo)
  }

  async createProject(project) {
    const res = await api.post('api/posts', project)
    logger.log(res.data)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}

export const postService = new PostService()
