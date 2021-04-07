<template>
  <div class="wrapper">
    <div class="container">
      <div>
        Correct answers: {{ getResults.correctAnswers }} of
        {{ getResults.totalAnswers }}
      </div>
      <div>
        Percent correct answers: {{ getResults.percentCorrectAnswers }}%
      </div>
      <div>
        <router-link to="/">
          <Button class="btn">try again</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Button from '../components/Button';

export default {
  name: 'Result',
  components: { Button },
  computed: { ...mapGetters('quiz', ['getResults']) },
};
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
}
.container {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  min-height: 400px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.btn {
  width: 100%;
}
</style>
