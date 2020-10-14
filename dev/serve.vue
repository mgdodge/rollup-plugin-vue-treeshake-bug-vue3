<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DemolibSample } from '@/entry.esm';

export default Vue.extend({
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
