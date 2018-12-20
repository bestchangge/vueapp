<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
  </div>
</template>

<script>
  import Scroller from "../components/Scroller";
  import Types from '../components/Types'
  import { mapState } from 'vuex'
  export default {
    name: "MovieView",
    components: {Scroller,Types},
    computed: {
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
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
  .movie-view{
    padding-bottom: 2rem;
  }

</style>
