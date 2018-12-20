<template>
  <div class="broadcast-view has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
    </div>
    <a class="more" href="#">显示更多广播</a>
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import UserBar from '../components/UserBar'
  import Card from '../components/Card'

  export default {
    name: "BroadcastView",
    data(){
      return{
        items:new Array(10)
      }
    },
    components: {Banner, UserBar,Card}
  }
</script>

<style scoped>
  .more{
    color: #42bd56;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    display: block;
    padding: 1.2rem;
  }

</style>
