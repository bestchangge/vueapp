<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type==='hasCover'">
        <li v-for="item in items">
          <router-link to="">
            <img v-if="item.images" :src="item.images.large"/>
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" :style="{'border-color': item.color}">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Rating from './Rating'

  export default {
    name: "Scroller",
    props: ['title', 'type', 'items'],
    components: {Rating}
  }
</script>

<style lang="scss" scoped>
  .scroller {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 1.6rem;

    h2 {
      color: #111;
      font-size: 1.68rem;
    }

    a {
      color: #42bd56;
      font-size: 1.44rem;
    }
  }

  .content {
    margin-top: 0.5rem;

    .hasCover {
      overflow-x: auto;
      white-space: nowrap;
      padding-left: 0.6rem;
      overflow-y: hidden;

      li {
        display: inline-block;
        padding-left: 0.8rem;
        width: 10rem;
        margin: auto;
      }
      .title {
        display: block;
        text-align: center;
        margin-top: 0.5rem;
        line-height: 1.4rem;
        font-size: 1.4rem;
        color: #111;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img {
        height: 14.2rem;
        width: 10rem;
      }

    }
    .onlyString {
      overflow-x: auto;
      white-space: nowrap;
      padding-left: 0.6rem;

      li {
        display: inline-block;
        margin: 0 0 0.8rem 0.8rem;
        border: solid 0.1rem;
        border-radius: 0.4rem;
        vertical-align: middle;
      }

      a {
        height: 4rem;
        line-height: 4rem;
        margin: auto;
        font-size: 1.5rem;
        padding: 0 2.4rem;
        display: block;
      }

      li:empty {
        width: 100%;
        display: block;
        height: 1px;
        border: 0;
        margin: 0;
      }
    }

  }

</style>
