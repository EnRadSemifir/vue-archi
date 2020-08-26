<template>
  <div class="home">
    <UnTitre msg="Ceci est un titre depuis une view" />
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
export default class UneView extends Vue {}
</script>