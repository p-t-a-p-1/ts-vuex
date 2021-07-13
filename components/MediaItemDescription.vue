<template>
  <p>{{ description }}</p>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export type MediaItemDescription = {
  description: String
}
export default Vue.extend({
  props: {
    description: {
      type: Object as PropType<MediaItemDescription>,
      default: () => ({}),
      required: true,
    },
  },
})
</script>
