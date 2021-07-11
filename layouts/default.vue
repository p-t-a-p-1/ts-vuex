<template>
  <div>
    <main class="contents">
      <div class="contents_main">
        <Nuxt />
      </div>
      <LayoutSidebar class="contents_side" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.contents {
  display: flex;
  margin: auto;
  max-width: 680px;
  padding: 0 40px;
  &_main {
    width: calc(100% - 200px);
  }
  &_side {
    width: 200px;
  }
}
</style>
