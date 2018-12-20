<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/douban-app-logo.png"/>
      </a>
      <div class="user-info">
        <strong>豆瓣<span>写了日记</span></strong>
        <div class="timestamp">2018-10-22 16:30:41</div>
      </div>
    </div>
    <div class="article-card">
      <div class="title">
        豆瓣App 4.12.0 主要更新
      </div>
      <div class="detail">
        可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
      </div>
    </div>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span class="btn comment"><i>0</i></span>
      <span class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style lang="scss" scoped>

  .card {
    position: relative;
    padding: 0 0 2rem 5rem;
    margin: 2rem 1.8rem 0 1.8rem;
  }

  .desc {
    margin-left: -5rem;
    display: flex;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
    }
  }

  .user-info {
    margin: auto 0 auto 1rem;
    strong {
      font-size: 1.7rem;
      line-height: 1rem;
      color: #494949;

      span {
        color: #aaa;
        margin-left: 0.5rem;
        font-weight: normal;
      }
    }

    .timestamp {
      font-size: 1.4rem;
      margin-top: 0.6rem;
      line-height: 1;
      color: #aaa;
    }
  }

  .article-card {
    margin: 0.8rem 0 1.8rem 0;
    padding: 1.5rem;
    border-radius: 0.2rem;
    background: #f9f9f9;
    .title {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.4;
      color: #111;
    }
    .detail {
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: #aaa;
      overflow: hidden;
      text-overflow: ellipsis;

    }
  }

  .info {
    span {
      margin: auto 2rem auto 0;
      font-size: 1.4rem;
    }
    .like::before {
      content: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
    }

    .comment::before {
      content: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
    }

    .retweet::before {
      content: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
    }

    .more::before {
      content: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
    }

    .more {
      float: right;
      margin-right: 0;
      position: relative;
      left: 0;
      top: 0.4rem;
    }

    i {
      font-style: normal;
      color: #ccc;
      position: relative;
      left: 0.4rem;
      top: -0.45rem;
    }
  }

  .btn::before {
    content: '';
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }

  .card::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
  }

</style>
