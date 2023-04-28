<template>
  <div id="app">
    <MoviesList :list="moviesList"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';


export default {
  name: 'App',
  components: {
    MoviesList
  },
  computed: {
    ...mapGetters("movieStore", ["moviesList"])
  },
  methods: {
    
    ...mapActions("movieStore", ["fetchMovies"])
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
