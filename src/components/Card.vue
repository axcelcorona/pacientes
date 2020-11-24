<template>
  <div class="card my-3  shadow-sm p-3 mb-5 bg-white rounded">
    <div class="card-header">
      <span>{{ paciente.numeroPaciente }}</span>
      <h2 id="nombre">{{ paciente.nombre }}</h2>
    </div>
    <div class="card-body" id="card">
      <div class="row d-flex justify-content-around">
        <div class="col-ms-4">
          <h6>Edad: {{ paciente.edad }}</h6>
          <h6 class="mt-2">Cedula: {{ paciente.cedula }}</h6>
        </div>
        <div class="col-ms-4">
          <h6>Fecja de Nacimiento: {{ paciente.fechaNacimiento }}</h6>
          <h6 class="mt-2">
            Dirección Residencial: {{ paciente.direccionPaciente }}
          </h6>
        </div>
        <div class="col-ms-4">
          <h6>Culular: {{ paciente.celular }}</h6>
          <h6 class="mt-2">Email: {{ paciente.email }}</h6>
        </div>
      </div>
      <div class="row d-flex justify-content-around mt-4">
        <div class="col-ms-6">
          <h6>Fecha de la Muestra: {{ paciente.fechaMuestra }}</h6>
        </div>
        <div class="col-ms-6">
          <h6 class="mt-2">
            Dirección de la Muestra: {{ paciente.direccionMuestra }}
          </h6>
        </div>
      </div>
      <hr />
      <div v-for="(item, index) in paciente.sintomas" :key="index">
        <ul>
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="card-footer bg-white">
      <button class="btn btn-danger" @click="setDeletePacietne(paciente.id)">
        Eliminar
      </button>
      <router-link
        class="btn btn-warning mx-2"
        :to="{
          name: 'Editar',
          params: {
            id: paciente.id,
          },
        }"
        >Editar</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    paciente: Object,
  },
  methods: {
    ...mapActions(["setDeletePacietne"]),
  },
};
</script>

<style scoped>
#nombre {
  display: inline-block;
}
#card {
  max-height: 300px;
  overflow: auto;
}
</style>