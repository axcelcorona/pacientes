<template>
  <div class="card shadow-sm p-3 mb-5 bg-white rounded">
    <div class="card-header bg-info text-white">
      <h2 id="msg">{{ msg }}</h2>
      <span class="float-right">1</span>
    </div>
    <div class="card-body">
      <Input :paciente="paciente"/>
      <hr />
      <h2>Sintomas</h2>
      <div class="row d-flex justify-content-around">
        <div class="col-ms-4">
          <CheckBoxs :sintoma="sintoma1" :paciente="paciente" />
        </div>
        <div class="col-ms-4">
          <CheckBoxs :sintoma="sintoma2" :paciente="paciente"/>
        </div>
        <div class="col-ms-4">
          <CheckBoxs :sintoma="sintoma3" :paciente="paciente"/>
        </div>
      </div>
      <button class="btn btn-block btn-info mt-2">Procesar</button>
    </div>
  </div>
</template>

<script>
import Input from "./inputs/Input";
import CheckBoxs from "./inputs/CheckBoxs";

export default {
  components: {
    Input,
    CheckBoxs,
  },
  props: {
    msg: String,
    paciente: Object,
  },
  data() {
    return {
      sintoma1: [
        "Fiebre > 38 °C",
        "Fatiga",
        "Dolor Muscular",
        "Dolor Toráxico",
        "Tos",
        "Anosmia (Falta de Ofalto)",
        "Resequedad de los Ojos y/o Lengua",
      ],
      sintoma2: [
        "Rinitis",
        "Ojos Rojos",
        "Perdida del Sabor",
        "Perdida del Apetito",
        "Dolor de Cabeza",
        "Porducción de Esputo",
        "Dolor de Garganta",
      ],
      sintoma3: [
        "Vértigo",
        "Diarrea",
        "Nauceas/Vomito",
        "Confucion Mental",
        "Delirium",
        "Edama Unilateral de Miembros Inferiores",
        "Taquipnea (Frecuencia Respiratoira > 24 RPM)",
      ],
    };
  },
};
</script>

<style scoped>
#msg {
  display: inline-block;
}
span {
  font-size: 25px;
}
</style>