<template>
  <v-container>
    <a class="btn btn-block btn-social" @click.prevent="login">
      <span class="fa" /> Login with Google
    </a>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private login() {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }
}
</script>
