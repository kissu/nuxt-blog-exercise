<template lang="pug">
  form(@submit.prevent="onSave")
    app-control-input(v-model="editedPost.author") Name
    app-control-input(v-model="editedPost.title") Title
    app-control-input(control-type="textarea" v-model="editedPost.previewText") Motto
    app-control-input(control-type="textarea" v-model="editedPost.content") Description
    app-control-input(v-model="editedPost.thumbnail") Thumbnail Link

    app-button(type="submit") Save
    app-button(type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel") Cancel
</template>

<script>
import { objectMethod } from 'babel-types';
export default {
  props: {
    post: {
      type: Object,
      reauired: false
    }
  },
  data() {
    return {
      editedPost: this.post
      ? {...this.post}
      : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: '',
      }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  },
}
</script>
