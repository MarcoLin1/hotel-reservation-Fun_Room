<template>
  <div class="complete__order__container" v-if="isCompleted">
    <div class="complete__order__wrapper">
      <div class="complete__order__title">已完成預訂</div>
      <div class="complete__order__text">感謝您的預訂，已將訂房詳情 Mail 給您，若預取消訂房或異動，請再來電，由客服人員為您做異動。</div>
      <div class="complete__order__button__wrapper" @click.stop.prevent="moveToFirstPage">
        <div class="complete__order__button">回到首頁</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isCompleted'])
  },
  methods: {
    moveToFirstPage () {
      this.$store.commit('toggleToUncompleted')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .complete__order {
    &__container {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(14px);
    }
    &__wrapper {
      width: 100%;
      height: auto;
      max-width: 306px;
      margin: 0 auto;
      background-color: #f5f5f5;
      padding: 30px 40px 30px 40px;
      position: relative;
      top: 15%;
    }
    &__title {
      font-size: 22px;
      font-weight: 400;
      line-height: 34px;
      text-align: center;
    }
    &__text {
      font-size: 14px;
      line-height: 21px;
    }
    &__button__wrapper {
      height: 40px;
      text-decoration: none;
    }
    &__button {
      background-color: #000;
      color: #fff;
      text-align: center;
      line-height: 40px;
      margin-top: 25px;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 756px) {
    .complete__order {
      &__container {
        background: transparent;
        backdrop-filter: none;
        width: 70%;
        max-width: 700px;
      }
      &__wrapper {
        top: 0;
        max-width: 450px;
        // height: 300px;
      }
    }
  }
</style>
