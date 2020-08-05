<template>
    <div>
        <h1>
            Inicio
        </h1>
        <router-link to="/agregar">
            <button class="btn btn-primary btn-sm btn-block">Agregar</button>
        </router-link>
        <ul class="my-4 text-left list-group">
            <li v-for="tarea in tareas" :key="tarea.id" class="list-group-item">
                {{ tarea.nombre }}

                <div class="float-right">

                <router-link :to="{ name: 'Editar', params: { id: tarea.id } }">
                    <button class="btn btn-secondary btn-sm">Editar</button>
                </router-link>
                <button class="btn btn-danger ml-2 btn-sm" @click="eliminarTarea(tarea.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'Inicio',
        created() {
            this.getTareas();
        },
        computed: {
            ...mapState(['tareas']),
        },
        methods: {
            ...mapActions(['getTareas','eliminarTarea']),
        },
    };
</script>

<style lang="scss" scoped></style>
