export default {
  title: 'Media',
  component: 'MediaList',
  argTypes: {},
}

export const OwnerArticleContent = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <MediaList />`,
})
