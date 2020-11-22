<template>
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Nombre">Nombre Completo:</label>
        <input
          type="text"
          class="form-control"
          id="Nombre"
          placeholder="Nombre..."
          v-model="paciente.nombre"
          autofocus
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="edad">Edad:</label>
        <input
          type="number"
          class="form-control"
          id="edad"
          placeholder="Edad..."
          v-model="paciente.edad"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="cedula">Cedual:</label>
        <input
          type="text"
          class="form-control"
          id="cedula"
          placeholder="0-0-0..."
          v-model="paciente.cedula"
        />
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4">
      <div class="form-group">
        <label for="celular">Celular/Telefono:</label>
        <input
          type="text"
          class="form-control"
          id="celular"
          placeholder="Nombre..."
          v-model="paciente.celular"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="fechaNacimiento">Fecha De Nacimiento:</label>
        <input
          type="date"
          class="form-control"
          id="fechaNacimiento"
          placeholder="Edad..."
          v-model="paciente.fechaNacimiento"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="dirreccionPaciente">Direccion Residencial:</label>
        <input
          type="text"
          class="form-control"
          id="dirreccionPaciente"
          placeholder="Dirreccion Residencial..."
          v-model="paciente.direccionPaciente"
        />
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4">
      <div class="form-group">
        <label for="email">Correo Electromico:</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Correo Electronico..."
          v-model="paciente.email"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="fechaMuestra">Fecha De la Muestra:</label>
        <input
          type="date"
          class="form-control"
          id="fechaMuestra"
          v-model="paciente.fechaMuestra"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="dirreicionMuestra">Direccion de la Muestra:</label>
        <input
          type="text"
          class="form-control"
          id="dirreicionMuestra"
          placeholder="Dirreccion de la Muestra..."
          v-model="paciente.direicionMuestra"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        paciente:Object
    }
};
</script>

<style scoped>
input {
  width: 250px;
}
</style>