<template>
  <v-container>
    <v-row class="fill-height" align="center">
      <v-col cols="12" sm="4">
        <v-row align="center" justify="center">
          <v-col>
            <div class="grid-sudoku">
              <div v-for="(row, idx) in sudokuGrid" class="grid-row" :key="idx">
                <div v-for="(cell, idy) in row" class="grid-cell" :key="idy">
                  <input
                    type="text"
                    v-model="sudokuGrid[idx][idy]"
                    class="grid-cell-editor"
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-btn block outlined color="indigo" @click="saveGrid">
              Validate
            </v-btn>
          </v-col>
        </v-row>
        <v-alert type="success" :value="validationOk">
          Board validated successfully
        </v-alert>
        <v-alert type="error" :value="validationErr">
          Board validation error.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { saveBoard, validateBoard } from "@/services/sudoku";

@Component
export default class SudokuValidator extends Vue {
  private validationOk = false;
  private validationErr = false;
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

  private saveGrid() {
    let x = { board: this.sudokuGrid };

    console.log(x);

    saveBoard(x).then((response) => {
      console.log(response);
      validateBoard(response).then((response) => {
        if (response) {
          console.log("board is valid;");
          this.validationOk = true;
          this.validationErr = false;
        } else {
          console.log("invalid board");
          this.validationOk = false;
          this.validationErr = true;
        }
      });
    });
  }
}
</script>

<style scoped>
.mytable {
  border-color: black;
  border: 1em;
}

.grid-sudoku {
  display: table;
  background: white;
  border: 3px solid black;
}

.grid-sudoku > div:nth-child(3),
.grid-sudoku > div:nth-child(6) {
  border-bottom: 3px solid black;
}

.grid-row > div:nth-child(3),
.grid-row > div:nth-child(6) {
  border-right: 3px solid black;
}

.grid-cell {
  display: table-cell;
  padding: 10px;
  border: 1px dotted gray;
}

.grid-cell-editor {
  border: none;
  width: 20px;
  height: 20px;
  font-family: "Courier", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  transition: all ease 1s;
}
</style>
