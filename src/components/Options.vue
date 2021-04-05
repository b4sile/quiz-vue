<template>
  <div class="top">
    <h1 v-if="currentCategory">Chosen category - {{ currentCategory.name }}</h1>
    <button @click="$router.go(-1)">Back</button>
  </div>
  <form @submit.prevent="$router.push('/quiz')">
    <div>
      Choose number of questions
      <label v-for="value in allAmounts" :key="value">
        {{ value }}
        <input
          name="amount"
          type="radio"
          @change="setAmount(value)"
          :checked="value === amount"
        />
      </label>
    </div>
    <div>
      Choose difficulty
      <label v-for="value in allDifficulties" :key="value">
        {{ value }}
        <input
          name="difficulty"
          type="radio"
          @change="setDifficulty(value)"
          :checked="value === difficulty || value === 'any'"
        />
      </label>
    </div>
    <button type="submit">start</button>
  </form>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { types } from '../store';

export default {
  name: 'Options',
  computed: {
    ...mapState('quiz', [
      'currentCategory',
      'allAmounts',
      'allDifficulties',
      'amount',
      'difficulty',
    ]),
  },
  methods: {
    ...mapMutations('quiz', [types.SET_DIFFICULTY, types.SET_AMOUNT]),
  },
};
</script>
<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  cursor: pointer;
  padding: 10px 30px;
  text-transform: uppercase;
}
</style>
