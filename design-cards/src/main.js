// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CardTitle from './components/CardTitle'
import CardContent from './components/CardContent'
import UseCase from './components/UseCase'
import Example from './components/Example'

Vue.config.productionTip = false

Vue.component('card-title', CardTitle);
Vue.component('card-content', CardContent);
Vue.component('card-use-case', UseCase);
Vue.component('card-example', Example);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
