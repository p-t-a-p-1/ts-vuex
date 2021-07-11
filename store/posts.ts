import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

type Post = {
  userId: number
  id: number
  title: String
  body: String
}

@Module({
  name: 'posts',
  stateFactory: true,
  namespaced: true,
})
export default class PostModule extends VuexModule {
  private posts: Post[] = []

  public get getPosts() {
    return this.posts
  }

  @Mutation
  private setPosts(posts: Post[]) {
    this.posts = posts
  }

  @Action({ rawError: true })
  public async fetchPosts() {
    const POST_API =
      'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5'
    const { data } = await $axios.get<Post[]>(POST_API)
    this.setPosts(data)
  }
}
