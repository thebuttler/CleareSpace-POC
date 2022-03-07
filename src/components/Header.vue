<template>
  <header>
    <router-link to="/">
      <h1><span>Wookie</span>Movies</h1>
    </router-link>
    <div class="search">
      <input type="text" v-model="searchText" />
      <ul v-show="searchText && searchResults.length">
        <li v-for="m in searchResults" :key="m.id" @click="handleClick(m.id)">
          {{ m.title }}
        </li>
      </ul>
  </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import apikey from '@/env.js';

export default {
  name: "Header",
  data() {
    return {
      searchText: ref(""),
      searchResults: ref([]),
    };
  },
  watch: {
    searchText: function (text) {
      apikey.search(text).then((res) => {
        this.searchResults = res.data.movies;
      });
    },
  },
  methods: {
    handleClick(id) {
      this.searchText = "";
      this.$router.push({ name: "movie-details", params: { id } });
    },
  },
};
</script>

<style lang="scss">
header {
   display: flex;
   align-items: left;
   justify-content: left;
   padding: 10px 16px;
   background-color: #2c3d4e;
   box-shadow: 0px 0px rgba(0, 0, 0, 0.1);

   h1 {
     color: #fff;
     font-size: 28px;

     span {
       color: #42b883;
     }
   }
   .search {
     display: flex;
     position:relative;
     margin: 0 15px 10px auto;
     align-self: flex-end;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding: 5px;

     input {
       display: block;
       appearance: none;
       border: none;
       outline: none;
       background: none;

       &[type="text"] {
         width: 100%;
         color: #fff;
         background-color: #496583;
         font-size: 20px;
         padding: 10px 16px;
         border-radius: 8px;
         margin-bottom: 15px;
         transition: 0.4s;

         &::placeholder {
           color: #f3f3f3;
         }

         &:focus {
           box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
         }
       }
     }
   }
}
</style>