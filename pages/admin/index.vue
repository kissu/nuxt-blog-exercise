<template lang="pug">
  .admin-page
    section.new-post
      app-button(@click="$router.push('/admin/new-post')") Create post
      app-button(@click="onLogout") Logout
    section.existing-posts
      h1 Existing posts
      post-list(isAdmin, :posts="loadedPosts")
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'], // order is important
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout")
      this.$router.push("/admin/auth")
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
