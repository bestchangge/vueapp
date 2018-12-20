<template>
  <div class="page-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view/>
    <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'
  import TalionView from '../views/TalionView'

  export default {
    name: "PagesView",
    components: {HeaderBar,TalionView},
    data(){
      return{
        talion:''
      }
    },
    methods:{
      open(){
        this.talion='open'
      },
      close(){
        this.talion=''
      }
    }
  }
</script>

<style scoped>

</style>
