<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Movie from './models/movie'; 
import apikey from '@/env.js';

export default {
  components: {
    Header,
  },
  created() {
    apikey.getAll().then((res) => {
      const movies = res.data.movies.map((m) => new Movie(m));
      this.$store.dispatch("setMovies", movies);
    });
  },
};
</script>


<style lang="scss">
 * { 
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   &::selection {
     background: transparentize($color: #42b883, $amount: 0);
   }
 }

 body {
   background-color: #35495e;
 }
</style>
