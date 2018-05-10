<template lang="pug">
  .admin-post-page
    section.update-form
      admin-post-form(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'], // order is important
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get(`https://learn-nuxt-6a97b.firebaseio.com/posts/${context.params.postId}.json`)
                .then(res => {
                  return {
                    loadedPost: {...res.data, id: context.params.postId}
                  }
                })
                .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
