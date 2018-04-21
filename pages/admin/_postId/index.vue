<template lang="pug">
  .admin-post-page
    section.update-form
      admin-post-form(:post="loadedPost")
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      // yep, need to make this one dynamic one day xD
      loadedPost: {
        author: 'Maximilian',
        title: 'My awesome post',
        content: 'Dude, content is dope !',
        thumbnailLink: ''
      }
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
