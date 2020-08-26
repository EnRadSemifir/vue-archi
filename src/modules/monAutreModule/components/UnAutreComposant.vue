<template>
  <div class="unAutreComposant">
    <ul></ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    data: Array,
  },
})
export default class UnAutreComposant extends Vue {
  data!: ArrayConstructor;
}
</script>