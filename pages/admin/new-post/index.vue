<template lang="pug">
  .admin-new-post-page
    section.new-post-form
      admin-post-form(@submit="onSubmitted")

</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'], // order is important
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
          .then(() => { this.$router.push('/admin')} )
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
