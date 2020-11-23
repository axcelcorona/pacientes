<template>
  <div class="container my-3">
    <form @submit.prevent="setUpdatePaciente(pacieten)">
      <Formulairo msg="Datos del Paciente a Editar" :paciente="paciente"/>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Formulairo from '../components/Formulairo'
export default {
  components:{
    Formulairo
  },
  computed:{
    ...mapState(['paciente'])
  },
  methods:{
    ...mapActions(['setEditarPaciente', 'setUpdatePaciente'])
  },
  created(){
    this.setEditarPaciente(this.$route.params.id)
  }
}
</script>
