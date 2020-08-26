<template>
  <div id="monAutreModule">
    <h1>Bienvenue sur mon autre module !</h1>
    <UneAutreView />
  </div>
</template>

<script lang="ts">
import UneAutreView from "./views/UneAutreView.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    UneAutreView,
  },
})
export default class MonAutreModule extends Vue {}
</script>