<template>
  <div class="wrapper" :class="$attrs.class">
    <input
      class="visually-hidden"
      @change="onChange(value)"
      :name="name"
      type="radio"
      :checked="checked"
      :id="name + value"
    />
    <label :for="name + value">{{ value }}</label>
  </div>
</template>
<script>
export default {
  name: 'RadioButton',
  inheritAttrs: false,
  props: ['value', 'onChange', 'name', 'checked'],
};
</script>
<style scoped lang="scss">
.wrapper {
  margin: 5px;
  overflow: hidden;
  border-radius: 20px;
  width: 164px;
  height: 92px;
  font-weight: 900;
  font-size: 24px;
}

label {
  cursor: pointer;
  background: #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: background ease 0.3s;
}

input {
  &:checked + label {
    color: white;
    background: #2e1d5f;
  }
}
@media screen and (max-width: 400px) {
  .wrapper {
    width: 100%;
  }
}
</style>
