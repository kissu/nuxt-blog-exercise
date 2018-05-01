<template lang="pug">
  .home-page
    section.intro
      h2 Tasty treats
    post-list(:posts="loadedPosts")
</template>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
  }
</style>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    components: {
      PostList
    },
    asyncData (context, callback) {
      setTimeout(() => {
        callback(null, {
          loadedPosts: [
            { id: '1', title: 'huge title', previewText: 'read me pls', thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'},
            { id: '2', title: 'second post', previewText: 'read me pls', thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'},
          ]
        })
      }, 1500)
    },
    // data() {
    //   return {
    //     loadedPosts: [
    //     ]
    //   }
    // },
    // created() {
    //   setTimeout(() => {
    //     this.loadedPosts = [
    //       { id: '1', title: 'huge title', previewText: 'read me pls', thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'},
    //       { id: '2', title: 'second post', previewText: 'read me pls', thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'},
    //     ]
    //   }, 1500)
    // }
  }
</script>
