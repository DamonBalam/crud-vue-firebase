import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tareas: [],
        tarea: {
            id: '',
            nombre: '',
        },
    },
    mutations: {
        SET_TAREAS(state, tareas) {
            state.tareas = tareas;
        },
        SET_TAREA(state, tarea) {
            state.tarea = tarea;
        },
        SET_ELIMINAR_TAREA(state, id) {
          state.tareas = state.tareas.filter( tarea => tarea.id != id);
        }
    },
    actions: {
        getTareas({ commit }) {
            let tareas = [];
            db.collection('tareas')
                .get()
                .then((res) => {
                    res.forEach((doc) => {
                        let tarea = doc.data();
                        tarea.id = doc.id;
                        tareas.push(tarea);
                    });
                    commit('SET_TAREAS', tareas);
                });
        },
        getTarea({ commit }, idTarea) {
            db.collection('tareas')
                .doc(idTarea)
                .get()
                .then((doc) => {
                    let tarea = doc.data();
                    tarea.id = doc.id;
                    commit('SET_TAREA', tarea);
                });
        },
        editarTarea({ commit }, tarea) {
            db.collection('tareas')
                .doc(tarea.id)
                .update({
                    nombre: tarea.nombre,
                })
                .then(() => {
                    router.push('/');
                    // console.log('tarea editada!');
                });
        },
        agregarTarea({ commit }, nombre) {
            db.collection('tareas')
                .add({
                    nombre: nombre,
                })
                .then((doc) => {
                    router.push('/');
                });
        },
        eliminarTarea({ commit, dispatch }, idTarea) {
            db.collection('tareas')
                .doc(idTarea)
                .delete()
                .then(() => {
                    // DISPATCH REALIZA PEDIDOS AL SERVIDOR lo recomendable es modificar el state
                    // dispatch('getTareas'); 
                    commit('SET_ELIMINAR_TAREA', idTarea);
                });
        },
    },
    modules: {},
});
