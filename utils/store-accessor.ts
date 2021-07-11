import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Posts from '~/store/posts'

// eslint-disable-next-line import/no-mutable-exports
let postsStore: Posts

function initialiseStores(store: Store<any>): void {
  postsStore = getModule(Posts, store)
}

export { initialiseStores, postsStore }
