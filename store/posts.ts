import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
// import { $axios } from '~/utils/api'

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
  posts: Post[] = []

  @Mutation
  setPosts(posts: Post[]) {
    this.posts = posts
  }

  @Action
  getPosts() {
    // const users = $axios.$get('/users')
    // https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5
    const posts = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 2,
        id: 2,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
    ]
    this.setPosts(posts)
  }
}
