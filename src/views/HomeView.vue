<template>
  <div>
    <Category v-for="cat in categories" :key="cat.name" :category="cat" />
  </div>
</template>

<script>
import Category from '../components/Category.vue';
import Movie from '../models/movie';

export default {
  components: { Category },
  name: "HomeView",
  data() {
    return {}; 
  },
  computed: {
    //Get the movies from the API
    movies() {
      return this.$store.getters.getMovies;
    },
    //funtion to return movies filtered by category
    categories() {
      return this.movies.reduce((categories, movie) => {
        movie.genres.forEach((genre) => {
          const category = categories.find((c) => c.name ===genre);
          if (category) {
            category.movies.push(movie);
          } else {
            //object is movie but when changed the name import fails? - Call the variable!!?
            categories.push({ name: genre, movies: [Movie] });
          }
        });
        return categories;
      }, []); 
    },
  },
};
</script>
