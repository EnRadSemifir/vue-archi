<template>
  <div class="unComposant">
    <table></table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    data: Array,
  },
})
export default class UnComposant extends Vue {
  data!: ArrayConstructor;
}
</script>