<template>
  <div class="container">
    <div>
      <p>posts</p>
      <nuxt-link to="/">top</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostsComponent extends Vue {}
</script>

<style></style>
