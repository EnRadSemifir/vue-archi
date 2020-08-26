<template>
  <div class="commonView">
    <UnTitre msg="Ceci est un titre depuis une view commune" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnTitre from "@/core/components/UnTitre.vue"; // @ is an alias to /src

@Options({
  components: {
    UnTitre,
  },
})
export default class UneViewCommune extends Vue {}
</script>