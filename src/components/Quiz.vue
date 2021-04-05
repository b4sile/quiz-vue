<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>{{ currentQuestion }}</div>
  {{ currentQuestionIndex }}
  <button @click="setQuestionIndex(currentQuestionIndex + 1)">next</button>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import { types } from '../store';

export default {
  name: 'Quiz',
  computed: {
    ...mapState('quiz', ['questions', 'isLoading', 'currentQuestionIndex']),
    ...mapGetters('quiz', ['currentQuestion']),
  },
  methods: {
    ...mapActions('quiz', ['fetchQuestions']),
    ...mapMutations('quiz', [types.SET_QUESTION_INDEX]),
  },
  created() {
    this.fetchQuestions();
  },
};
</script>
<style scoped lang="scss"></style>
