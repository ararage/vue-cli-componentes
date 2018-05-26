<template>
    <div class="input-group">
        <input type=text
                placeholder="Escribe una nueva tarea"
                v-model="nuevaTarea"
                class="form-control"
                v-on:keyup.enter="agregarTarea">
        <span class="input-group-btn">
            <button
                type="button"
                v-on:click="agregarTarea"
                class="btn btn-primary">
                Agregar
            </button>
        </span>
    </div>
</template>
<script>
import { bus } from '../main.js'
export default {
  data () {
    return {
      nuevaTarea: ''
    }
  },
  //  Recibe el arreglo de tareas para hacerle push con el nuevo elemento
  //  Recibe la función de incremento del contador de tareas desde el componente principal para actualizarse con +1
  props: ['tareas', 'actualizarContador'],
  methods: {
    agregarTarea () {
      var texto = this.nuevaTarea.trim()
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false
        })
        //  Vamos a emitir evento hacia el número de tareas del Componente padre (App)
        // this.$emit('incrementarContador', 1)
        //  Llamamos a la función recibida
        //  this.actualizarContador()
        //  Emitimos el evento a través del bus
        //  bus.$emit('actualizarContador', this.tareas.length)
        bus.actualizarContador(this.tareas.length)
      }
      this.nuevaTarea = ''
    }
  },
  //  Emitimos con el gancho de ciclo de vida al crearse el componente el numero de tareas para
  //  que pinte el tamaño inicial del arreglo al titulo
  created () {
    //  bus.$emit('actualizarContador', this.tareas.length)
    bus.actualizarContador(this.tareas.length)
  }
}
</script>
