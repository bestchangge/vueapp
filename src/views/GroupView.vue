<template>
  <div class="group-view has-header">
    <user-bar></user-bar>
    <group title="租房找室友" :items="group_a">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <group title="来聊五块钱" :items="group_b">
      <a class="list-link" href="#" slot="more">来聊五块钱</a>
    </group>
    <group title="买买买" :items="group_c">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
  </div>
</template>

<script>
  import UserBar from "../components/UserBar";
  import Group from "../components/Group";
  import {mapState} from 'vuex'
  export default {
    name: "GroupView",
    components: {Group, UserBar},
    computed: {
      // Getting Vuex State from store/modules/group
      ...mapState({
        group_a: state => state.group.group_a,
        group_b: state => state.group.group_b,
        group_c: state => state.group.group_c
      })
    },
    created: function () {
      // Dispatching getGroup on created
      this.$store.dispatch('getGroup')
    }
  }
</script>

<style scoped>

</style>
