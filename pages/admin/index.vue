<template lang="pug">
  .admin-page
    section.new-post
      app-button(@click="$router.push('/admin/new-post')") Create post
    section.existing-posts
      h1 Existing posts
      post-list(isAdmin, :posts="loadedPosts")
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
