<template>
  <div class="container my-3">
    <form>
      <Formulario msg="Datos del paciente" :paciente="paciente"/>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '../components/Formulairo'
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
}
</script>
