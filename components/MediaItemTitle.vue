<template>
  <h2>{{ title }}</h2>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export type MediaItemTitle = {
  text: String
}
export default Vue.extend({
  props: {
    title: {
      type: Object as PropType<MediaItemTitle>,
      default: () => ({}),
      required: true,
    },
  },
})
</script>
