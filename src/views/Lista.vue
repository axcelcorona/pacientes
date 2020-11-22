<template>
  <div class="container" v-for="(item, index) in pacientes" :key="index">
    <Card :paciente="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  computed:{
      ...mapState(['pacientes'])
  }
};
</script>

<style>
</style>