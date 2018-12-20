import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

import activities from './modules/activities'
import movie from './modules/movie'
import book from './modules/book'
import group from './modules/group'

export default new VueX.Store({
  modules:{
    activities,
    movie,
    book,
    group
  }
})
