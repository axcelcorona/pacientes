import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    pacientes: [],
    paciente: {
      nombre: '',
      edad: '',
      id: '',
      numeroPaciente: '',
      email: '',
      fechaNacimiento: '',
      dirreccionPaciente: '',
      fechaMuestra: '',
      celular: '',
      cedula: '',
      sintomas: []
    }
  },
  mutations: {
    addPacietne(state, payload) {
      state.pacientes.push(payload)
      console.log(state.pacientes)
    },
    deletePaciente(state, payload) {
      state.pacientes = state.pacientes.filter(item => item.id !== payload)
    },
    editarPaciente(state, payload) {
      if(!state.pacientes.find(item => item.id === payload ? payload : item)){
        router.push('/')
        return
      }
      state.paciente = state.pacientes.find(item => item.id === payload )
    },
    updatePaciente(state, payload) {
      state.pacientes = state.pacientes.map(item => item.is === payload ? payload : item)
      console.log('paciente editado')
      router.push('/')
    }
  },
  actions: {
    // Enviando los Datos a la base de datos FireBase
    async setPacientes({ commit }, paciente) {
      try {
        const res = await fetch(`https://covid-19-pacientes.firebaseio.com/pacientes/${paciente.id}.json`,{
          method:'PUT',
          body: JSON.stringify(paciente)
        })
        const datadb = await res.json()
        console.log(datadb)
      } catch (error) {
        console.log(error)
      }
      commit('addPacietne', paciente)
    },

    setDeletePacietne({ commit }, id) {
      commit('deletePaciente', id)
    },

    setEditarPaciente({ commit }, id) {
      commit('editarPaciente', id)
    },

    setUpdatePaciente({commit}, paciente){
      commit('updatePaciente', paciente)
    }
  },
  modules: {
  }
})
