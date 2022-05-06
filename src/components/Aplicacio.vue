<template>
  <div>
    <h3>{{ aplicacio.nom }}</h3>
    <p>{{ aplicacio.descripcio }}</p>
    <p>
      Instal·lada:
      <input type="checkbox" :checked="aplicacio.instalada" disabled />
    </p>
    <scores-app :aplicacio="aplicacio"></scores-app>
    <p><button @click="eliminar" type="button">Eliminar</button></p>
  </div>
</template>

<script>
import ScoresApp from "./ScoresApp";

export default {
  name: "Aplicacio",
  components: {
    ScoresApp,
  },
  props: ["aplicacio"],
  methods: {
    eliminar() {
      this.$store.commit("esborrar", this.$props.aplicacio);
    },
  },
};
</script>

<style scoped>
</style>