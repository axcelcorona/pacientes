<template>
  <div class="container my-3">
    <form @submit.prevent="porcesarFormulario">
      <Formulario msg="Datos del paciente" :paciente="paciente"/>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '../components/Formulairo'
import {mapActions} from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Formulario
  },
  data() {
    return {
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
    }
  },
  methods:{
    ...mapActions(['setPacientes']),
    porcesarFormulario(){
      // generando el id 
      this.paciente.id = shortid.generate()
      console.log(this.paciente.id)

      // enviadno los datos al arry
      this.setPacientes(this.paciente)

      // Limpiando el formulario
      this.paciente = {
        nombre:'',
        edad: '',
        id:'',
        numeroPaciente:'',
        email:'',
        fechaNacimiento:'',
        direccionPaciente:'',
        direccionMuesta:'',
        fechaMuestra:'',
        celular:'',
        cedula:'',
        sintomas:[]
      }
    }
  }
}
</script>
