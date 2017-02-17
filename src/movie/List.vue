<template>
<div class="movie">
  <h1>{{ movie }}</h1>

  <!-- <spinner :show="loading"></spinner> -->
</div>
</template>

<script>
//import Spinner from 'Spinner.vue';

export default {
  //components: {Spinner},
  data() {
    return {
      loading: true,
      movie: ''
    }
  },
  created() {
    // GET /someUrl
    this.$http.get('/api/movie/top250').then(response => {
      this.loading = false;
      //this.movie = response.body;
    }, response => {
      // error callback
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
