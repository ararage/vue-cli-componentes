<template>
  <div>
    <h2>{{tituloMayuscula()}}</h2>
    <h3>Tarea a hacer: {{numTareas}}</h3>
  </div>
</template>
<script>
import { bus } from '../main.js'
export default {
  //  Propiedades recibidas
  //  props: ['titulo', 'numTareas'],
  props: ['titulo'],
  data () {
    return {
      numTareas: 0
    }
  },
  /* props: {
    //  Definimos las propiedades del atributo titulo cuando se consuma el componente
    titulo: {
      required: true,
      type: String,
      default: 'Tareas'
    }
  }, */
  methods: {
    tituloMayuscula () {
      return this.titulo.toUpperCase()
    }
  },
  //  Cuando se crea el componente recibe del bus de NuevaTarea un evento del bus con un atributo
  //  Que es el tamaño del arrego de tareas y se nombra como numTareas
  created () {
    bus.$on('actualizarContador', (numTareas) => {
      this.numTareas = numTareas
    })
  }
}
</script>
