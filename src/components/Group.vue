<template>
  <div class="group">
    <div class="header">
      <h2>{{title}}</h2>
    </div>
    <ul class="content">
      <li v-for="item in items">
        <router-link to="">
          <div class="group-meta">
            <img v-if="item.images.small" :src="item.images.small">
            <span v-if="item.group_member" class="group-member">20005人</span>
            <div class="group-info">
              <span class="title">{{item.title}}</span>
              <rating class="rating" v-if="item.rating" :rating="item.rating"></rating>
            </div>
            <div v-if="item.group_topic" class="group-topic">
              <span>{{item.group_topic.time}}</span>
              <span>{{item.group_topic.title}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <slot name="more"></slot>
  </div>
</template>

<script>
  import Rating from "./Rating";

  export default {
    name: "Group",
    components: {Rating},
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

  .group {
    margin-left: 1.8rem;
    padding: 1.4rem 0;
  }

  .header {
    h2 {
      font-size: 1.8rem;
      font-weight: bold;
      color: #111;
    }
  }

  .content {

    li {
      border-bottom: 1px solid #F2F2F2;
      padding: 1.6rem 1.6rem 1.6rem 0;
    }
  }

  .group-meta {
    img {
      float: left;
      width: 4rem;
      height: 4rem;
      margin-right: 0.5rem;
    }
  }

  .group-info {
    display: block;
    height: 4rem;
    .title {
      font-size: 1.6rem;
      color: #111;
      margin: 1rem;
      text-align: left;
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .rating {
      display: inline;
    }

  }

  .group-member {
    color: #ccc;
    font-size: 1.5rem;
    float: right;
  }

  .group-topic {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-link {
    display: block;
    text-align: center;
    padding: 1.2rem;
    font-size: 1.6rem;
    color: #42bd56;
    border-bottom: 1px solid #F2F2F2;
  }


</style>
