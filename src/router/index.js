import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../views/PagesView'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import BookView from '../views/BookView'
import BroadcastView from '../views/BroadcastView'
import GroupView from '../views/GroupView'
import GridMovieView from '../views/GridMovieView'
import RegisterView from '../views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'broadcast',
          name: 'BroadcastView',
          component: BroadcastView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path:'gridmovie',
          name:'GridMovieView',
          component:GridMovieView
        }
      ]
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
  ]
})
