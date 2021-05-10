<template>
  <v-container>
    <v-card width="600" height="600" raised>
      <v-row v-for="row in sudokuGrid" :key="row">
        <v-col v-for="cell in row" :key="cell">
          <v-card>
            <v-input v-text="cell" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SudokuValidator extends Vue {
  private sudokuGrid = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [6, 5, 4, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}
</script>
