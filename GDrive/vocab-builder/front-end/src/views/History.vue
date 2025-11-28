<template>
  <div>
    <h1>Test History</h1>

    <div v-if="history.length === 0" class="ui message">
      <div class="header">No tests taken yet!</div>
      <p>Go to the "Test" page to take your first quiz.</p>
    </div>

    <table v-else class="ui celled table">
      <thead>
        <tr>
          <th>Date Taken</th>
          <th>Score</th>
          <th>Total Questions</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(test, i) in history" :key="i">
          <td>{{ formatDate(test.testDate) }}</td>
          <td>{{ test.score }}</td>
          <td>{{ test.totalQuestions }}</td>
          <td :class="getGradeColor(test.score, test.totalQuestions)">
            {{ getPercentage(test.score, test.totalQuestions) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "history",
  data() {
    return {
      history: [],
    };
  },
  async mounted() {
    const response = await api.getTestResults();
    this.history = response.data || response;
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    getPercentage(score, total) {
      return Math.round((score / total) * 100);
    },
    getGradeColor(score, total) {
      const percent = (score / total) * 100;
      if (percent >= 80) return "positive"; // Green
      if (percent < 50) return "negative"; // Red
      return "";
    },
  },
};
</script>

<style scoped>
.positive {
  background-color: #fcfff5 !important;
  color: #2c662d;
}
.negative {
  background-color: #fff6f6 !important;
  color: #9f3a38;
}
</style>
