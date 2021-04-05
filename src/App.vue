<template>
  <router-view></router-view>
</template>

<script>
import 'normalize.css';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: { ...mapActions('categories', ['fetchCategories']) },
  created() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss">
#app {
  width: 1150px;
  margin: 0 auto;
  min-width: 320px;
}

@media screen and (max-width: 1200px) {
  #app {
    width: 90%;
  }
}
</style>
