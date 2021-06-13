import { AppState } from '../AppState'

const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class PostService {
  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    logger.log('the posts', res.data.posts)
    AppState.posts = res.data.posts
  }

  setPost(postId) {
    const post = AppState.posts.find(p => p.id === postId)
    logger.log(post)
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log('new post', res.data)
  }

  async deletePost(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id === id)
  }

  async like(like) {
    const res = await api.put('api/posts/likes', like)
    logger.log('new like', res.data)
  }
}
export const postService = new PostService()
