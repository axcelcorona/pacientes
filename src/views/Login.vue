<template>
  <div class="container my-3">
    <form>
      <div class="card shadow-sm p-3 mb-5 bg-white rounded">
        <div class="card-header bg-info text-white">
          <h2>Iniciar Seción</h2>
        </div>
        <div class="card-body">
          <div class="mt-2">
            <label for="dirreicionMuestra">Usuario</label>
            <input
              type="text"
              class="form-control"
              id="dirreicionMuestra"
              placeholder="Ingrese su Usuario..."
            />
          </div>
          <div class="my-2">
            <label for="dirreicionMuestra">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="dirreicionMuestra"
              placeholder="Ingrese su contraseña..."
            />
          </div>
          <button class="mt-4 btn btn-block bg-info text-white">Entrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>