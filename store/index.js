import Vuex from "vuex";

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "Wonderful post hehe",
                previewText: "This is our first post!",
                thumbnail:
                  "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-21.jpg"
              },
              {
                id: "2",
                title: "Nice meme dude !",
                previewText: "This is our second post!",
                thumbnail:
                  "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-604121.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
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
