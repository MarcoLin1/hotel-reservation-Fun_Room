<template>
  <div class="home__page">
    <MainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    MainPage
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.home__page {
  background-image: url('./../assets/image/homePage.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}

</style>
