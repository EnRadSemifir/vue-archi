<template>
  <div class="home">
    <UnTitre msg="Ceci est un titre depuis une view" />
    <UnComposant :data="ducks" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnTitre from "@/core/components/UnTitre.vue"; // @ is an alias to /src
import UnComposant from "@/modules/monModule/components/UnComposant.vue";

@Options({
  components: {
    UnTitre,
    UnComposant,
  },
})
export default class UneView extends Vue {
  ducks = [
    { name: "Riri", type: "Caneton" },
    { name: "Fifi", type: "Caneton" },
    { name: "Loulou", type: "Caneton" },
    { name: "Donald", type: "oncle" },
    { name: "Picsou", type: "Vieil avare" },
  ];
}
</script>