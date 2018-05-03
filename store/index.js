import Vuex from "vuex"
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://learn-nuxt-6a97b.firebaseio.com/posts.json')
                    .then(res => {
                      const postsArray = []
                      for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                      }
                      vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
