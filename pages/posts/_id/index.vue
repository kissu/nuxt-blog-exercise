<template lang="pug">
  .single-post-page
    section.post
      img(:src='loadedPost.thumbnail', alt='your beloved servant', width='300', height='169')
      h1.post-title {{ loadedPost.title }}
      .post-details
        .post-detail Updated at {{ loadedPost.updatedDate | date }}
        .post-detail Written by {{ loadedPost.author }}
      p {{ loadedPost.content }}
    section.post-feedback
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios.$get(`/posts/${context.params.id}.json`)
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  },
  head() {
    return {
      title: `Profile of ${this.loadedPost.author}`,
    }
  },
}
</script>


<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
