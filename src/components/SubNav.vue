<template>
  <div class="sub-nav">
    <div class="quickNav" v-if="mold==='quickNav'">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name:'GridMovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name:'GroupView'}">生活在别处</router-link>
        </li>
        <li>
          <router-link :to="{name:'RegisterView'}">注册帐号</router-link>
        </li>
        <li>
          <template v-if="false">
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template v-else>
            <router-link to="" replace>登录豆瓣</router-link>
          </template>
        </li>
      </ul>
    </div>
    <div class="navBottom" v-if="mold==='navBottom'">
      <div class="nav-item">
        <router-link to="">注册账号</router-link>
        <template v-if="false">
          <a href="#" @click.prevent="logout()">退出登录</a>
        </template>
        <template v-else>
          <router-link to="">登录豆瓣</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubNav",
    props: {
      mold: {
        type: String,
        default: 'quickNav'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quickNav {
    ul {
      overflow: hidden;
      margin: 1rem 0 0 0;
      padding-top: 0.6rem;

      li {
        float: left;
        width: 50%;
        padding: 0.3rem;
        box-sizing: border-box;
      }

      a {
        display: block;
        background-color: #f6f6f6;
        padding: 1.2rem 0;
        max-width: 100%;
        font-size: 1.5rem;
        overflow: hidden;
        color: #494949;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        border-radius: 0.2rem;
      }
    }
  }
  .navBottom{
    width: 100%;
    border-top: 0.1rem solid #f3f3f3;
    border-bottom: 0.1rem solid #f3f3f3;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .nav-item{
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
    a{
      display: block;
      color: #42bd56;
      font-size: 1.5rem;
      margin: 0.2rem auto;
      width: 50%;
      box-sizing: border-box;
      &:first-child{
        border-right: 0.1rem solid #e5e5e5;
      }
    }

  }

</style>
