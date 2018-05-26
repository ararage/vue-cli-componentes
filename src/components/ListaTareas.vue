<template>
    <div>
        <li v-for="(tarea, indice) of tareas"
            v-bind:key="tarea" class="list-group-item"
            v-bind:class="{terminada: tarea.terminada}">
        {{ tarea.texto }}
        <span class="pull-right">
        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
                v-on:click="tarea.terminada = !tarea.terminada"
        ></button>
        <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
                v-on:click="borrar(indice)"
        ></button>
        </span>
        </li>
    </div>
</template>
<script>
export default {
  props: ['tareas'],
  methods: {
    borrar (indice) {
      this.tareas.splice(indice, 1)
    }
  }
}
</script>
<style scoped>
.terminada {
  color: gray;
  text-decoration: line-through;
}
</style>
