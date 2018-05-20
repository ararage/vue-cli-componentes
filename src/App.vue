<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import NuevaTarea from './components/NuevaTarea.vue'
export default {
  components: {
    Titulo,
    NuevaTarea
  },
  data () {
    return {
      titulo: '* Lista de tareas *',
      tareas: [
        {
          texto: 'Aprende Vue.js',
          terminada: false
        },
        {
          texto: 'Aprende Angular',
          terminada: false
        },
        {
          texto: 'Aprende Ionic',
          terminada: false
        }
      ]
    }
  }
}
</script>

<style>
</style>
