
<script lang="ts">
export default {
  name: 'ConnectBtn'
};
</script>

<template>
  <div class="connect-btn"> 
    <slot />
  </div>
</template>

<style scoped >
.connect-btn {
  border: 1px solid #267bcf;
  background: #267bcf;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 24px; 
  font-size: 14px;
}
</style> 
 

