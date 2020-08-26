<template>
  <div class="unAutreComposant">
    <ul>
      <li :v-for="item in data" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
})
export default class UnAutreComposant extends Vue {
  data!: ArrayConstructor;
}
</script>