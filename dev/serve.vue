<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DemolibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  DemolibSample,
  // }
});
</script>

<template>
  <div id="app">
    <demolib-sample />
  </div>
</template>
