<template lang="pug">
  .posts-page
    post-list(:posts="loadedPosts")
</template>

<script>
import PostList from "@/components/Posts/PostList"
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get(`https://learn-nuxt-6a97b.firebaseio.com/posts/${context.params.id}.json`)
                .then(res => {
                  return {
                    loadedPost: res.data
                  }
                })
                .catch(e => context.error(e))
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
