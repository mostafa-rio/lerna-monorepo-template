<template>
  <div class="home">
    <h1>fresh vue app</h1>
    <h3>check box input</h3>
    <FcCheck />
    <h3>default btn</h3>
    <connect-btn> fico kit button </connect-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import ConnectBtn from "fico-kit/src/lib-components/ConnectBtn.vue";
import FcCheck from "fico-kit/src/lib-components/FcCheck.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    FcCheck,
    ConnectBtn,
    // HelloWorld,
  },
};
</script>
