<template>
  <div>
    <Title :text="content.title" />
    <Description :text="content.description" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Title from '~/components/MediaItemTitle.vue'
import Description from '~/components/MediaItemDescription.vue'

export type Media = {
  title: String
  description: String
}
export default Vue.extend({
  components: {
    Title,
    Description,
  },
  props: {
    content: {
      type: Object as PropType<Media>,
      default: () => ({}),
      required: true,
    },
  },
})
</script>
