import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    aplicacions: [
      {
        nom: "Whatsapp",
        descripcio: "Una aplicació de missatgeria",
        instalada: true,
        countFav: 0,
        countDesfav: 0
      },
      {
        nom: "Minecraft",
        descripcio: "Joc",
        instalada: false,
        countFav: 0,
        countDesfav: 0
      },
      {
        nom: "Meet",
        descripcio: "Aplicació de videoconferències per la feina",
        instalada: true,
        countFav: 0,
        countDesfav: 0
      }
    ]
  },
  mutations: {
    afegir: function (state, aplicacio) {
      state.aplicacions.push(aplicacio);
    },
    esborrar: function (state, aplicacio) {
      const index = state.aplicacions.indexOf(aplicacio);
      state.aplicacions.splice(index, 1);
    },
    countFav: function (state, aplicacio) {
      console.log("puntuando postivo");
      const index = state.aplicacions.indexOf(aplicacio);
      state.aplicacions[index].countFav++;
    },
    countDesfav: function (state, aplicacio) {
      console.log("puntuando negativo");
      const index = state.aplicacions.indexOf(aplicacio);
      state.aplicacions[index].countDesfav++;
    }
  }
});

export default store;
