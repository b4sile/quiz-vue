<template>
  <h1>Choose category</h1>
  <div v-if="isLoading">Loading...</div>
  <div v-else>{{ categories }}</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Categories',
  computed: mapState('categories', ['categories', 'isLoading']),
  methods: mapActions('categories', ['fetchCategories']),
  created() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped></style>
