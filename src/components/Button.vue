<template>
  <button class="button"><slot></slot></button>
</template>
<script>
export default {
  name: 'Button',
};
</script>
<style scoped lang="scss">
.button {
  background: #5a37bc;
  border-radius: 28px;
  display: inline-block;
  text-transform: uppercase;
  color: white;
  transition: background ease 0.3s;
  padding: 10px 30px;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #2e1d5f;
  }

  &:disabled {
    background: rgb(161, 158, 158);
    cursor: default;
  }
}
</style>
