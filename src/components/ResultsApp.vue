<template>
  <div>
    <ol>
      <li
        v-for="(aplicacion, index) in this.$store.state.aplicacions"
        v-bind:key="index"
      >
        {{ aplicacion.nom }} <i class="fa fa-thumbs-up"> </i>
        {{ aplicacion.countFav }} <i class="fa fa-thumbs-down"></i>
        {{ aplicacion.countDesfav }}
        <scores-app :aplicacio="aplicacion"></scores-app>
      </li>
    </ol>
  </div>
</template>

<script>
import ScoresApp from "./ScoresApp";
export default {
  components: { ScoresApp },
};
</script>
<style scoped>
ol {
  text-align: justify;
  list-style: inside;
}
</style>