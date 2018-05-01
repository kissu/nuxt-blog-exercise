<template lang="pug">
  .posts-page
    post-list(:posts="loadedPosts")
</template>

<script>
import PostList from '~/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  props: ['posts'],
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: {
            id: '1',
            title: `huge title ID: ${context.params.id}`,
            autor: 'me',
            updatedDate: new Date(),
            content: 'This is some awesome temp content',
            previewText: 'read me pls',
            thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'}
        })
      }, 1000);
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
  }
}
</script>


<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
