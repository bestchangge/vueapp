<template>
  <router-link class="user-bar" to="" tag="div">
    <div class="avatar">
      <template>
        <img src="../assets/user_normal.jpg"/>
      </template>
    </div>
    <div class="holder">登录发广播</div>
    <div class="icon icon-camera"></div>
    <div class="icon icon-open"></div>
  </router-link>
</template>

<script>
  export default {
    name: "UserBar"
  }
</script>

<style lang="scss" scoped>
  .user-bar {
    padding: 0.8rem;
    overflow: hidden;
    border-bottom: 0.1rem solid #f3f3f3;

    .avatar {
      width: 4rem;
      height: 4rem;
      float: left;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .holder {
      float: left;
      padding-left: 1rem;
      line-height: 4rem;
      font-size: 1.4rem;
      color: #aaa;
    }

    .icon {
      float: right;
      width: 2.4rem;
      height: 2.4rem;
      margin: 0.8rem;
    }

    .icon-camera{
      background-image: url(../assets/camera.svg);
    }

    .icon-open {
      background-image: url(../assets/pen.svg);
    }

  }

</style>
