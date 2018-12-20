<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="onInfinite">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import SubNav from '../components/SubNav'
  import List from '../components/List'
  import InfiniteLoading from 'vue-infinite-loading'
  import Loading from '../components/Loading'

  export default {
    name: "HomeView",
    components: {SubNav, List, InfiniteLoading, Loading},
    methods: {
      onInfinite($state) {
        setTimeout(() => {
         this.loadMore()
          $state.loaded()
        }, 1000)
      },
      ...mapActions([
        'loadMore'
      ])
    },
    computed: {
      ...mapState({
        events: state => state.activities.events
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }

</style>
