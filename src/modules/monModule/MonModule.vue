<template>
  <div>
    <h1>Bienvenue sur mon module !</h1>
    <UneView />
  </div>
</template>

<script lang="ts">
import UneView from "./views/UneView.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    UneView,
  },
})
export default class MonModule extends Vue {}
</script>