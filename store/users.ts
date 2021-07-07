import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

type User = {
  id: number
  name: String
  isLogin: Boolean
}

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  users: User[] = []

  @Mutation
  setUsers(users: User[]) {
    this.users = users
  }

  @Action
  async getUsers() {
    // const users = $axios.$get('/users')
    const users = [
      {
        id: 11,
        name: 'test1',
        isLogin: true,
      },
      {
        id: 11,
        name: 'test1',
        isLogin: true,
      },
    ]
    this.setUsers(users)
  }
}
