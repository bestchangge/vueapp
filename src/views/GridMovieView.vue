<template>
  <div class="grid-movie-view has-header">
    <h1>影院热映</h1>
    <grid :items="hotMovies"></grid>
  </div>
</template>

<script>
  import Grid from "../components/Grid";
  import {mapState} from 'vuex'
  export default {
    name: "GridMovieView",
    components: {Grid},
    computed: {
      ...mapState({
        hotMovies: state => state.movie.hotMovies
      })
    },
    created() {
      this.getMovie()
    },
    methods: {
      getMovie: function () {
        //分发actions
        this.$store.dispatch('getMovie')
      }
    }
  }
</script>

<style lang="scss" scoped>

  .grid-movie-view {
    padding: 0 1.6rem;

    h1 {
      font-size: 2.2rem;
      font-weight: normal;
      color: #494949;
      padding-top: 1.6rem;
    }
  }

</style>
