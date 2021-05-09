<template>
  <sudoku-validator />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SudokuValidator from "@/components/SudokuValidator.vue";

@Component({
  components: { SudokuValidator },
})
export default class Sudoku extends Vue {}
</script>
