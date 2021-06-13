import { AppState } from '../AppState'

const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class PostService {
  async getPosts(id = null, page = 1, query = null) {
    let url = 'api/posts'
    const vars = ['page=' + page]

    if (id != null) {
      vars.push('creatorId=' + id)
    }
    if (query != null) {
      vars.push('query=' + query)
    }
    // foobar.com/api/posts?creatorId=biz&page=6&seach=test

    url = `${url}?${vars.join('&')}`

    const res = await api.get(url)
    const [currentPage, totalPages] = res.data.page.split(' of ')
    logger.log('the posts', res.data.posts)
    AppState.posts = res.data.posts
    AppState.pages = { currentPage: parseInt(currentPage), totalPages: parseInt(totalPages) }
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

  async like(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    logger.log('new like', res)
  }

  async editPost(editedPost) {
    const res = await api.put(`api/posts/${editedPost.id}`, editedPost)
    logger.log('edited!', res.data)
  }
}
export const postService = new PostService()
