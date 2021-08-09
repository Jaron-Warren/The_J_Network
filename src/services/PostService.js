import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
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

  async getPostsById(id) {
    try {
      const res = await api.get(`api/profiles/${id}/posts/`)
      AppState.activeUserPosts = res.data.posts
      // logger.log(res.data)
    } catch (error) {
      logger.log('problem getting user posts')
    }
  }

  async getPostsByQuery() {
    try {
      const res = await api.get('api/posts?query=' + AppState.query)
      // logger.log(res.data.posts)
      AppState.posts = res.data.posts
    } catch (error) {
      logger.log('problem getting user posts')
    }
  }

  async createPost(post) {
    try {
      logger.log(post)
      const res = await api.post('api/posts', post)
      logger.log(res.data)
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }

  async destroy(id) {
    try {
      await api.delete('api/posts/' + id)
      AppState.posts = AppState.posts.filter(p => p.id !== id)
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const postService = new PostService()
