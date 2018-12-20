<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="item in items">
          <a :href="baseUri + item.href">
            {{item.title}}<span></span>
          </a>
        </li>
        <li class="line"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Types",
    data() {
      return {
        baseUri: 'https://m.douban.com/',
        items: [
          {
            title: '经典',
            href: 'movie/classic'
          },
          {
            title: '冷门佳片',
            href: 'movie/underrated'
          },
          {
            title: '豆瓣高分',
            href: 'movie/doubantop'
          },
          {
            title: '动作',
            href: 'movie/action'
          },
          {
            title: '喜剧',
            href: 'movie/comedy'
          },
          {
            title: '爱情',
            href: 'movie/love'
          },
          {
            title: '悬疑',
            href: 'movie/mystery'
          },
          {
            title: '恐怖',
            href: 'movie/horror'
          },
          {
            title: '科幻',
            href: 'movie/scifi'
          },
          {
            title: '治愈',
            href: 'movie/sweet'
          },
          {
            title: '文艺',
            href: 'movie/artfilm'
          },
          {
            title: '成长',
            href: 'movie/youth'
          },
          {
            title: '动画',
            href: 'movie/animation'
          },
          {
            title: '华语',
            href: 'movie/chinese'
          },
          {
            title: '欧美',
            href: 'movie/western'
          },
          {
            title: '韩国',
            href: 'movie/korean'
          },
          {
            title: '日本',
            href: 'movie/japanese'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .types {
    margin-top: 1rem;
  }

  h2 {
    color: #111;
    font-size: 1.68rem;
    padding: 0 1.6rem;
  }

  .type-list {
    margin: 0.8rem 0 0 1.6rem;
    overflow: hidden;
  }

  li {
    width: 50%;
    box-sizing: border-box;
    border-top: solid 0.1rem #eee;
    border-right: solid 0.1rem #eee;
    font-size: 1.6rem;
    float: left;
    padding-right: 1.8rem;
    height: 4.2rem;
    line-height: 4.2rem;
  }

  li:nth-child(2n) {
    padding-left: 1.8rem;
  }

  a {
    display: block;
    color: #42bd56;
  }

  span {
    color: #ccc;
    float: right;
    font-weight: bold;
    border-right: solid 0.1rem #ccc;
    border-bottom: solid 0.1rem #ccc;
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(-45deg);
    margin-top: 1.48rem;
  }

</style>
