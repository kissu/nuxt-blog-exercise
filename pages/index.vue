<template lang="pug">
  .home-page
    section.intro
      h1
        | Wanna feel cozy ? <br>
        | We got all that you've ever dreamed of ! ❤️
    post-list(:posts="loadedPosts")
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  head: {
    title: `Hot pussies !`,
  },
};
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/cozy.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: tomato;
  }
</style>
