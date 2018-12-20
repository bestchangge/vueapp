<template>
  <div class="list">
    <template v-if="mold==='thumbnail'" v-for="item in items">
        <router-link class="thumbnail" to="#">
          <div class="content">
            <img :src="item.image_hlarge"/>
            <h3>{{item.title}}</h3>
            <p>{{item.content|subStr}}</p>
          </div>
          <div class="author">
            <span class="name">{{item.category_name}}</span>
            <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
          </div>
        </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      mold: {
        type: String,
        default: 'basic'
      },
      items: {
        type: Array,
        required: true
      }
    },
    filters:{
      subStr(value){
        var newVal = value.replace(/<.*?>/g,'');
        return newVal.slice(0,30)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list{
    .thumbnail{
      position: relative;
      display: block;
      padding: 2.5rem 1.8rem 2.5rem 0;
      margin-left: 1.8rem;

      .content {
        overflow: hidden;
        margin-bottom: 1rem;

        h3 {
          font-size: 1.6rem;
          font-weight: 500;
          text-align: justify;
          color: #494949;
          margin-top: 0;
          margin-bottom: 0.6rem;
          line-height: 1.41;
        }
        p {
          line-height: 1.5;
          text-align: justify;
          color: #aaa;
          font-size: 1.2rem;
          overflow: hidden;
        }

        img {
          float: right;
          width: 25.6%;
          height: 8.678rem;
          margin-left: 2.5rem;
        }
      }
      .author{
        font-size: 1.2rem;
        color:#ccc;
      }

      .label{
        position: absolute;
        bottom: 2.5rem;
        right: 1.8rem;
      }
    }

    .thumbnail ~ .thumbnail::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.1rem;
      content: '';
      background: #e3e3e3;;
    }
  }
</style>
