<template>
  <v-app id="sudoku-validator">
    <v-app-bar app color="primary" dark clipped-left>
      <div class="d-flex align-center">
        <v-img
          alt="Azena Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo-azena.svg')"
          transition="scale-transition"
          width="130"
        />
        <h2>Sudoku Validator</h2>
      </div>
    </v-app-bar>

  <!-- ! could this be replaced by an acutal menu? -->
    <v-navigation-drawer app absolute clipped width="200">
      <v-list dense>
        <v-list-item-content> Home </v-list-item-content>
        <v-list-item-content> Sudoku </v-list-item-content>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app color="green lighten-2">
      The usual footer information
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
