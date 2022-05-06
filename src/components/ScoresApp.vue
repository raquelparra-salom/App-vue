<template>
  <span>
    <button class="btn" @click="clickButtonOk()">
      <i class="fa fa-thumbs-up"></i>
    </button>
    <button class="btn" @click="clickButtonBad()">
      <i class="fa fa-thumbs-down"></i>
    </button>
  </span>
</template>

<script>
export default {
  props: {
    aplicacio: {
      type: Object,
    },
  },
  methods: {
    clickButtonOk() {
      this.$store.commit("countFav", this.aplicacio);
    },
    clickButtonBad() {
      this.$store.commit("countDesfav", this.aplicacio);
    },
  },
};
</script>

<style scoped>
</style>