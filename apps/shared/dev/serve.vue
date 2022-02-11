<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { FicoKitSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  FicoKitSample,
  // }
});
</script>

<template>
  <div id="app">
        <h4>fc button component:</h4>
    <connect-btn>click here</connect-btn>
    <h4>fc check input: </h4>
    <fc-check />
  </div>
</template>
