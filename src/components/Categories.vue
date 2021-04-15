<template>
  <h1>Choose category</h1>
  <div v-if="isLoading">Loading...</div>
  <ul v-else>
    <li @click="setCurrentCategory({ name: 'Any' })">
      <router-link to="options">
        <h2>Any</h2>
      </router-link>
    </li>
    <li
      @click="setCurrentCategory({ id, name })"
      :key="id"
      v-for="{ id, name, total_num_of_questions } in categories"
    >
      <router-link to="options">
        <h2>{{ name }}</h2>
        <div class="count">All questions: {{ total_num_of_questions }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { types } from '../store';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Categories',
  computed: { ...mapState('categories', ['categories', 'isLoading']) },
  methods: { ...mapMutations('quiz', [types.SET_CURRENT_CATEGORY]) },
};
</script>

<style lang="scss" scoped>
ul {
  text-align: center;
  padding: 0;
  margin: 0 -5px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    box-sizing: border-box;
    flex: 0 1 calc(25% - 10px);
    cursor: pointer;
    border: 5px solid #7a9aa7;
    background: #f8fdff;
    border-radius: 10px;
    margin: 5px;
    min-width: 250px;
    min-height: 150px;
    transition: background ease 0.3s;

    a {
      color: inherit;
      text-decoration: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &:hover {
      background: #d1e7f0;
    }

    .count {
      margin-bottom: 10px;
    }
  }
}
@media screen and (max-width: 1160px) {
  ul li {
    flex-basis: calc(33.333% - 10px);
  }
}
@media screen and (max-width: 871px) {
  ul li {
    flex-basis: calc(50% - 10px);
  }
}
@media screen and (max-width: 581px) {
  ul li {
    flex-basis: 100%;
  }
}
</style>
