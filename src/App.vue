<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <!--<titulo></titulo>-->
      <!-- v-on recibe el evento del componente nueva-tarea,
      y recibe el evento (1) del mismo componente-->
      <!--<nueva-tarea :tareas="tareas" v-on:incrementarContador="numTareas += $event"></nueva-tarea>-->
      <nueva-tarea  :tareas="tareas"
                    :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import NuevaTarea from './components/NuevaTarea.vue'
import ListaTareas from './components/ListaTareas.vue'
export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data () {
    return {
      titulo: '* Lista de tareas *',
      //  numTareas: 3,
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
  },
  methods: {
    actualizarContador () {
      this.numTareas++
    }
  }
}
</script>

<style>
</style>
