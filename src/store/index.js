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
    }
  },
  actions: {
    setPacientes({commit}, paciente){
      commit('addPacietne', paciente)
    }
  },
  modules: {
  }
})
