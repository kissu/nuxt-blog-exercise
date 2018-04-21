<template lang="pug">
  .admin-new-post-page
    section.new-post-form
      form(@submit.prevent="onSave")
        app-control-input(v-model="editedPost.author") Author Name
        app-control-input(v-model="editedPost.title") Title

        app-control-input(v-model="editedPost.thumbnailLink") Thumbnail Link
        app-control-input(control-type="textarea" v-model="editedPost.content") Content

        app-button(type="submit") Save
        app-button(type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel") Cancel

</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  },
  components: {
    AppControlInput,
    AppButton
  }
}
</script>
