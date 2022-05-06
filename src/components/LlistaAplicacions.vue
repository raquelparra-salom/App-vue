<template>
  <div>
    <div>
      <Aplicacio
        v-for="(item, index) in this.$store.state.aplicacions"
        v-bind:key="index"
        v-bind:aplicacio="item"
      ></Aplicacio>
    </div>
    <div>
      <results-app></results-app>
    </div>
  </div>
</template>

<script>
import Aplicacio from "@/components/Aplicacio";
import ResultsApp from "./ResultsApp";
export default {
  name: "LlistaAplicacions",
  components: { Aplicacio, ResultsApp },
};
</script>

<style scoped>
</style>