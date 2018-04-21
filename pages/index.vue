<template lang="pug">
  .home-page
    section.intro
      h2 Tasty treats
    post-list
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
    }
  }
</script>
