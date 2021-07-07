import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

type Product = {
  id: number
  name: String
  isLogin: Boolean
}

@Module({
  name: 'product',
  stateFactory: true,
  namespaced: true
})
class Products extends VuexModule {
  private products: Product[] = []
  private productsCount: number = 0

  @Mutation
  incrementCount(count: number) {
    this.productsCount += count
  }

  public get getProducts() {
    return this.products
  }
}
