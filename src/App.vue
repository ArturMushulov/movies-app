<template>
  <div id="app">
    <Loader/>
    <Notification/>
    <PosterBg :poster="posterBg"/>
    <Header/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
    <MoviesPagination :current-page="currentPage" :per-page="moviesForPage" :total="moviesLength"
    @changePaged="onPageChanged"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';
import PosterBg from '@/components/PosterBg.vue';
import MoviesPagination from '@/components/MoviesPagination.vue';
import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import Notification from './components/Notification.vue';


export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Loader,
    Header,
    Notification
  },
  data: () => ({
    posterBg: ""
  }),
  computed: {
    ...mapGetters("movieStore", ["moviesList", "moviesForPage", "currentPage", "moviesLength"])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep:true
    }
  },
  methods: {
    ...mapActions("movieStore", ["changeCurrentPage"]),
    onPageQueryChange( { page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({query: { page } })
    }
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
