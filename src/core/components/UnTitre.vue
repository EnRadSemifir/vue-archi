<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class UnTitre extends Vue {
  msg!: string;
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
