<template>
  <div class="wrapper">
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <h2>{{ currentQuestion.question }}</h2>
        <div>
          <RadioButton
            :key="ans"
            v-for="ans in currentQuestion.variants"
            name="ans"
            :value="ans"
            :onChange="setCurrentAnswer"
            :checked="answers[currentQuestionIndex] === ans"
            class="ans"
          />
        </div>
      </div>
      <div class="btns">
        <Button
          class="btn"
          :disabled="currentQuestionIndex === 0"
          @click="setQuestionIndex(currentQuestionIndex - 1)"
          >prev</Button
        >
        <Button
          class="btn"
          :disabled="currentQuestionIndex === questions.length - 1"
          @click="setQuestionIndex(currentQuestionIndex + 1)"
          >next</Button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import { types } from '../store';
import Button from '../components/Button';
import RadioButton from '../components/RadioButton';
import { htmlEncode, shuffle } from '../utils';

export default {
  name: 'Quiz',
  components: { Button, RadioButton },
  computed: {
    ...mapState('quiz', [
      'questions',
      'isLoading',
      'currentQuestionIndex',
      'answers',
    ]),
    ...mapGetters('quiz', ['currentQuestion']),
  },
  methods: {
    ...mapActions('quiz', ['fetchQuestions']),
    ...mapMutations('quiz', [
      types.SET_QUESTION_INDEX,
      types.SET_CURRENT_ANSWER,
    ]),
    htmlEncode,
    shuffle,
  },
  created() {
    this.fetchQuestions();
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  justify-content: space-around;
}
.ans {
  margin-top: 20px;
  width: 100%;
}
.btn {
  padding: 20px 80px;
}
.btns {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}
@media screen and (max-width: 800px) {
  .wrapper {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .btn {
    padding: 20px 60px;
  }
}
</style>
