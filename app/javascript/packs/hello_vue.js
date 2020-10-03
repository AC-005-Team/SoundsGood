

//分離component寫法  APP為在這個vue裡使用的名稱 可以置換

// import Vue from 'vue'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     render: h => h(App)
//   }).$mount()
//   document.body.appendChild(app.$el)
//
//   console.log(app)
// })


import Vue from 'vue'
import App from '../app.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';


// import router from './routes.js';
// import store from '../store';
// import "./js/jquery.js";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'
import "select2/dist/css/select2.css"
import "select2/dist/js/select2.js"
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.use(Vuex);
Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App),
    // router,
  }).$mount("#hello")
})


// 記得  Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>
// -----------從這裡開始-----------------------------------------------------------------
//在html裡放入樣板 給vue抓取的寫法   在index裡頭可以使用component
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "hey hey hey Can you say hello? 在html裡放入樣板 給vue抓取的寫法"
//     },
//      components: { App }
//   })
// })
//
//
//這邊以下使用到turbolink才要開啟 可以先保留

// yarn add vue-turbolinks

// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
