<template>
  <div class="home">
    <UnTitre msg="Ceci est un titre depuis une autre view" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnTitre from "@/core/components/UnTitre.vue"; // @ is an alias to /src
import UnAutreComposant from "@/modules/monAutreModule/components/UnAutreComposant.vue";

@Options({
  components: {
    UnTitre,
    UnAutreComposant,
  },
})
export default class UneAutreView extends Vue {}
</script>
