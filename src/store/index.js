import { createStore } from 'vuex'

export default createStore({
  state: {
    pacientes:[],
    paciente: {
      nombre:'',
      edad: '',
      id:'',
      numeroPaciente:'',
      email:'',
      fechaNacimiento:'',
      dirreccionPaciente:'',
      fechaMuestra:'',
      celular:'',
      cedula:'',
      sintomas:[]
    }
  },
  mutations: {
    addPacietne(state, payload){
      state.pacientes.push(payload)
      console.log(state.pacientes)
    },
    deletePaciente(state, payload){
      state.pacientes = state.pacientes.filter(item => item.id !== payload)
    }
  },
  actions: {
    setPacientes({commit}, paciente){
      commit('addPacietne', paciente)
    },
    setDeletePacietne({commit}, id){
      commit('deletePaciente', id)
    }
  },
  modules: {
  }
})
