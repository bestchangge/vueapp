<template>
  <div class="banner">
    <template>
      <div class="content">
        <span class="title">{{title}}</span>
        <div class="button-wrapper">
          <span class="download">极速下载</span>
          <span class="open">打开</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    props: {
      title: {
        type: String,
        required: false,
        default: '打开App，浏览更多'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .content {
    display: flex;
    justify-content: space-between;
    background-image: url("../assets/promotion_bg.jpg");
    background-size: cover;
    height: 7rem;
    align-items: center;
    overflow: hidden;
    padding: 0 1.6rem;

    .title {
      font-size: 1.4rem;
      font-weight: normal;
      line-height: 2.2rem;
      color: #2CA532;
    }
    .download, .open {
      margin: auto;
      font-size: 1.3rem;
      border: 0.1rem solid #42bd56;
      border-radius: 0.3rem;
      line-height: 2.2rem;
      font-weight: bold;
      padding: 0.4rem 1.4rem;
    }
    .download {
      color: #fff;
      background: #42bd56;
    }
    .open {
      color: #42bd56;
    }
  }

</style>
