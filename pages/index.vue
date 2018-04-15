<template lang="pug">
  .home-page
    section.intro
      h1 Hello folks !
    section.featured-posts
      post-preview(
        id='1'
        thumbnail='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'
        title='First article'
        previewText="This is my first blog post and I'm so glad, I want to thank...")
      post-preview(
        id='2'
        thumbnail='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-604121.jpg'
        title='Second one'
        previewText="Let's do some awesome NodeJS stuff !")
      post-preview(
        id='3'
        thumbnail='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-21.jpg'
        title='Another one'
        previewText="Fatality !")
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
import PostPreview from '~/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
}
</script>
