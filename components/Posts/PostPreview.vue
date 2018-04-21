<template lang="pug">
  nuxt-link.post-preview(:to="postLink")
    article
      .post-thumbnail(:style="{backgroundImage: `url(${thumbnail})`}")
      .post-content
        h1 {{ title }}
        p {{ previewText }}
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }
</style>
