<template>
    <div class="container">
        {{ tarea.id }} - {{ tarea.nombre }}
        <h1>Editar</h1>
        <form @submit.prevent="editarTarea(tarea)">
            <div class="form-group">
                <input type="text"  class=" form-control" v-model="tarea.nombre" name="tarea" id="tarea" />
                <button class="mt-2 btn-block  btn btn-primary btn-sm" type="submit">Editar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'Editar',
        data() {
            return {
                id: this.$route.params.id,
            };
        },
        created() {
            this.getTarea(this.id);
        },
        computed: {
            ...mapState(['tarea']),
        },
        methods: {
            ...mapActions(['getTarea', 'editarTarea']),
        },
    };
</script>

<style lang="scss" scoped></style>
