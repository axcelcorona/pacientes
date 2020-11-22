<template>
  <div v-for="(item,index) in sintoma" :key="index">
    <div class="form-check my-1">
      <input
        class="form-check-input"
        type="checkbox"
        :value="item"
        :id="item"
        v-model="paciente.sintomas"
      />
      <label class="form-check-label" :for="item">
        {{item}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        sintoma: Array,
        paciente:Object
    }
};
</script>

<style>
</style>