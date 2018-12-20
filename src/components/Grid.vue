<template>
  <div class="grid">
    <ul class="hasCover">
      <li v-for="item in items">
        <router-link to="">
          <img v-if="item.images" :src="item.images.large"/>
          <span class="title">{{item.title}}</span>
          <rating v-if="item.rating" :rating="item.rating"></rating>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Rating from "./Rating";

  export default {
    name: "Grid",
    components: {Rating},
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

  .hasCover {

    li {
      width: 33.3%;
      display: inline-block;
      margin: auto;
      padding-bottom: 1.5rem;
      text-align: center;
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

</style>
