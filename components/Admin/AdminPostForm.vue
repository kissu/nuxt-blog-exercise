<template lang="pug">
  form(@submit.prevent="onSave")
    app-control-input(v-model="editedPost.author") Author Name
    app-control-input(v-model="editedPost.title") Title

    app-control-input(v-model="editedPost.thumbnail") Thumbnail Link
    app-control-input(control-type="textarea" v-model="editedPost.content") Content
    app-control-input(control-type="textarea" v-model="editedPost.previewText") Preview text

    app-button(type="submit") Save
    app-button(type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel") Cancel
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
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
  components: {
    AppControlInput,
    AppButton
  }
}
</script>
