<template>
  <v-container>
    <v-card raised>
      <v-simple-table style="mytable">
        <tbody>
          <tr v-for="(row, idx) in sudokuGrid" :key="idx">
            <td v-for="(cell, idy) in row" :key="idy">
              <v-text-field dark:true v-model="sudokuGrid[idx][idy]">
                {{ sudokuGrid[idx][idy] }}
              </v-text-field>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <v-spacer />
    <v-btn block outlined color="indigo" @click="logGrid"> Validate </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SudokuValidator extends Vue {
  private sudokuGrid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [6, 5, 4, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  private logGrid() {
    console.log(this.sudokuGrid);
  }
}
</script>

<style scoped>
.mytable {
  border-color: black;
  border: 1em;
}
</style>
