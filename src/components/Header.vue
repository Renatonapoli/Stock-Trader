<template>
  <v-app-bar app>
    <v-app-bar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-app-bar-title>
    <v-toolbar-items>
      <v-btn depressed to="/">Início</v-btn>
      <v-btn text to="/portfolio">Portifólio</v-btn>
      <v-btn text to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn text slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2"
          >Saldo:
          {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
  },
};
</script>

<style></style>
