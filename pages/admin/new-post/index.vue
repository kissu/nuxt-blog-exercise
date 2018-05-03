<template lang="pug">
  .admin-new-post-page
    section.new-post-form
      admin-post-form(@submit="onSubmitted")

</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      axios.post('https://learn-nuxt-6a97b.firebaseio.com/posts.json', postData)
            .then(result => console.log(result))
            .catch(e => console.log(e))
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
