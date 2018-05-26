// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//  Se encarga de la comunicación de información entre los componentes (un servicio)
export var bus = new Vue({
  methods: {
    actualizarContador (numTareas) {
      this.$emit('actualizarContador', numTareas)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
