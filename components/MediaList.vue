<template>
  <ul>
    <media-item v-for="(item, index) in list" :key="index" :content="item" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import MediaItem, { Media } from '~/components/MediaItem.vue'

type DataType = {
  list: Media[]
}
export default Vue.extend({
  components: {
    MediaItem,
  },
  data(): DataType {
    return {
      list: [
        {
          title: 'テスト1',
          description:
            '説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。',
        },
        {
          title: 'テスト2',
          description:
            '説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。',
        },
        {
          title: 'テスト3',
          description:
            '説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。',
        },
      ],
    }
  },
})
</script>
