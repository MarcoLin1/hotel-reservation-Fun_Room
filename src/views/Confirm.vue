<template>
  <div class="confirm__page__container">
    <Navbar v-if="false"/>
    <ConfirmDetail />
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import ConfirmDetail from './../components/ConfirmDetail.vue'
export default {
  components: {
    Navbar,
    ConfirmDetail
  }
}
</script>

<style lang="scss" scoped>

</style>
