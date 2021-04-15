<template>
  <router-view></router-view>
</template>

<script>
import 'normalize.css';
import './assets/css/main.css';
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
  height: 100%;
}

@media screen and (max-width: 1200px) {
  #app {
    width: 90%;
  }
}
@media screen and (max-width: 400px) {
  #app {
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
