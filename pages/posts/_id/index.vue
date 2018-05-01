<template lang="pug">
  .single-post-page
    section.post
      h1.post-title {{ loadedPost.title }}
      .post-details
        .post-detail Updated at {{ loadedPost.updatedDate }}
        .post-detail Written by {{ loadedPost.author }}
      p {{ loadedPost.content }}
    section.post-feedback
      p Send me some random feedback pls
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: `huge title ID: ${context.params.id}`,
          autor: 'me',
          updatedDate: new Date(),
          content: 'This is some awesome temp content',
          previewText: 'read me pls',
          thumbnail: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-20179.jpg'}
      })
    }, 1000);
  }
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
