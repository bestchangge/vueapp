<template>
  <div class="book-view has-header">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img class="cover" src="../assets/book_zw.jpg"/>
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
    <types></types>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Scroller from "../components/Scroller";
  import Types from "../components/Types";

  export default {
    name: "BookView",
    components: {Scroller, Types},
    computed: {
      // Getting Vuex State from store/modules/book
      ...mapState({
        novel: state => state.book.novel,
        reality: state => state.book.reality,
        travel: state => state.book.travel,
        bookTags: state => state.book.bookTags
      })
    },
    methods: {
      // Dispatching getBook
      getBook: function () {
        this.$store.dispatch('getBook')
      }
    },
    created: function created() {
      // Getting books data on created
      this.getBook()
    }
  }
</script>

<style scoped>
  .promItem {
    overflow: hidden;
    margin: 1.6rem;
  }

  .cover {
    width: 10rem;
    float: left;
    margin-right: 1.5rem;
  }

  .price{
    color: #E76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
    float: right;
  }
  .name{
    font-size: 2rem;
    color: #494949;
    text-overflow: ellipsis;
    line-height: 2.2rem;
    white-space: nowrap;
  }
  .info{
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #9B9B9B;
    font-weight: 300;
  }

</style>
