<template>
  <div class="top">
    <h2 v-if="currentCategory">Category - {{ currentCategory.name }}</h2>
    <Button @click="$router.go(-1)">Back</Button>
  </div>
  <form @submit.prevent="$router.push('/quiz')">
    <div>
      <h2>
        Choose number of questions:
      </h2>
      <div class="options">
        <RadioButton
          v-for="value in allAmounts"
          :value="value"
          :key="value"
          :checked="value === amount"
          name="amount"
          :onChange="setAmount"
        />
      </div>
    </div>
    <div>
      <h2>
        Choose difficulty:
      </h2>
      <div class="options">
        <RadioButton
          v-for="value in allDifficulties"
          :value="value"
          :key="value"
          :checked="value === difficulty || value === 'any'"
          name="difficulty"
          :onChange="setDifficulty"
        />
      </div>
    </div>
    <Button class="submit" type="submit">start</Button>
  </form>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { types } from '../store';
import RadioButton from '../components/RadioButton.vue';
import Button from '../components/Button.vue';

export default {
  components: { RadioButton, Button },
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
    ...mapMutations('quiz', [
      types.SET_DIFFICULTY,
      types.SET_AMOUNT,
      types.CLEAR_QUIZ_STATE,
    ]),
  },
  created() {
    this.clearQuizState();
  },
};
</script>
<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.submit {
  margin-top: 10px;
  padding: 20px 60px;
}
.options {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 400px) {
  .options {
    justify-content: space-around;
  }
  .submit {
    width: 100%;
  }
}
</style>
