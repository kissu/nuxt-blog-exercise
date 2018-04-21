<template lang="pug">
  section.featured-posts
    post-preview(
      v-for="post in posts"
      ,:key="post.id"
      ,:id="post.id"
      /* the coma below is needed, https://github.com/vuejs/vue/issues/3231 */
      ,:is-admin="isAdmin"
      ,:thumbnail="post.thumbnail"
      ,:title="post.title"
      ,:previewText="post.previewText")
    //- post-preview(
    //-   id='2',
    //-   :is-admin="isAdmin"
    //-   thumbnail='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-604121.jpg'
    //-   title='Second one'
    //-   previewText="Let's do some awesome NodeJS stuff !")
    //- post-preview(
    //-   id='3',
    //-   :is-admin="isAdmin"
    //-   thumbnail='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-21.jpg'
    //-   title='Another one'
    //-   previewText="Fatality !")
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .post-preview {
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

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
