<template>
  <div class="container">
    <ul>
      <li v-for="(post, index) in getPosts" :key="index">
        <p>{{ post.id }}</p>
        <p>{{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { postsStore } from '~/store'

@Component
export default class PostsComponent extends Vue {
  get getPosts() {
    return postsStore.getPosts
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
li {
  & + li {
    margin-top: 16px;
  }
}
</style>
