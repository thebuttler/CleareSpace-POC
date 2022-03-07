import { createStore } from 'vuex'

//stored information from the movies when calling.
export default createStore({
  state: {
    movies: [],
  },
  getters: {
    getMovies(store) {
      return store.movies;
    },
    getMovieById: (store) => (id) => {
      return store.movies.find((movie) => movie.id === id);
    },
  },
  mutations: {
    setMovies(state, movies){
      state.movies= movies;
    },
  },
  actions: {
    setMovies(store,movies) {
      store.commit("setMovies", movies);
    },
  },
  modules: {
  }
})