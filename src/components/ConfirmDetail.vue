<template>
  <div class="confirm__container">
    <div class="confirm__inner__container">
      <div class="confirm__inner__wrapper" v-if="isFinished">
        <div class="confirm__wrapper" >
          <div class="confirm__title">確認訂房資訊</div>
          <div class="confirm__items__wrapper">
            <div class="confirm__item">
              <div class="confirm__item__subject">房型</div>
              <div class="confirm__item__description">{{bookingData.roomType}}</div>
            </div>
            <div class="confirm__item">
              <div class="confirm__item__subject">預訂人</div>
              <div class="confirm__item__description">{{bookingData.name}}</div>
            </div>
            <div class="confirm__item">
              <div class="confirm__item__subject">聯絡電話</div>
              <div class="confirm__item__description">{{bookingData.phone}}</div>
            </div>
            <div class="confirm__item">
              <div class="confirm__item__subject">E-mail</div>
              <div class="confirm__item__description">{{bookingData.email}}</div>
            </div>
            <div class="confirm__item">
              <div class="confirm__item__subject">預訂日期</div>
              <div class="confirm__item__description confirm__item__date">{{bookingData.checkinDate}} ~ {{bookingData.checkoutDate}}</div>
            </div>
          </div>
        </div>
        <div class="amount__container">
          <div class="amount__item amount__item__top">
            <div class="amount__title">小計</div>
            <div class="amount__inner__wrapper">
              <div class="amount__inner__item">
                <span class="amount__inner__text">總共</span>
                <span class="amount__inner__date">{{bookingData.countDate}}夜</span>
              </div>
              <!-- <div class="amount__inner__item">
                <span class="amount__inner__text">假日</span>
                <span class="amount__inner__date">0夜</span>
              </div> -->
            </div>
          </div>
          <div class="amount__item">
            <div class="amount__title">消費金額</div>
            <div class="amount__price">{{bookingData.totalPrice}}</div>
          </div>
          <div class="amount__buttons__wrapper">
            <div class="amount__button__left__wrapper" @click.stop.prevent="$router.go(-1)">
              <button class="amount__button">修改資料</button>
            </div>
            <div class="amount__button__right__wrapper" @click.stop.prevent="toggleComplete">
              <label class="amount__button amount__button__text" for="amount__checkbox">確認預訂</label>
            </div>
          </div>
        </div>
      </div>
      <CompleteOrder />
      <router-link class="confirm__cancel__wrapper" to="/" @click.stop.prevent="">
        <div class="confirm__cancel">X</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import CompleteOrder from './../components/CompleteOrder.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CompleteOrder
  },
  computed: {
    ...mapState(['isFinished', 'bookingData'])
  },
  methods: {
    toggleComplete () {
      this.$store.commit('toggleToComplete')
    },
    toggleToUncomplete () {
      this.$store.commit('toggleToUncompleted')
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm {
  &__inner__container {
    background-color: #E5E5E5;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  &__inner__wrapper {
    position: relative;
    height: 100%;
  }
  &__wrapper {
    position: relative;
    top: 15%;
  }
  &__title {
    width: 100%;
    max-width: 329px;
    margin: 0 auto;
    margin-bottom: 14px;
  }
  &__items__wrapper {
    display: grid;
    grid-gap: 15px;
    width: 100%;
    max-width: 330px;
    margin: 0 auto;
    box-shadow: 0.5px 2px 4.5px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    padding: 20px 0;
  }
  &__item {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  &__item__subject, &__item__description {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #6D6D6D;
    &:hover {
      color: #000;
    }
  }
  &__item__subject {
    width: 40%;
  }
  &__item__date {
    font-weight: 500;
    color: #000;
  }
  &__cancel__wrapper {
    display: none;
  }
}
.amount {
  &__container {
    position: relative;
    bottom: -25%;
    width: 100%;
    max-width: 330px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
  &__item__top {
    margin-top: 10px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    width: 100%;
    line-height: 34px;
    font-weight: 400;
  }
  &__inner__item {
    font-weight: 400;
    line-height: 34px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  &__inner__wrapper, &__price {
    width: 100%;
    max-width: 80px;
  }
  &__price {
    font-weight: 700;
    font-size: 24px;
  }
  &__buttons__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 11px;
  }
  &__button__left__wrapper, &__button__right__wrapper {
    height: 40px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  &__button__left__wrapper {
    background-color: #ffffff;
  }
  &__button__right__wrapper {
    background-color: #000000;
  }
  &__button {
    line-height: 40px;
  }
  &__button__text {
    color: #ffffff;
    font-size: 14px;
  }
}

@media screen and (min-width: 756px) {
  .confirm {
    &__container {
      height: 100%;
    }
    &__inner__container {
      background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(14px);
      padding: 80px 0 60px 0;
      display: flex;
      justify-content: center;
      height: 100vh;
    }
    &__inner__wrapper {
      width: 100%;
      height: 100%;
      max-width: 700px;
      max-height: 550px;
      background-color: #f5f5f5;
    }
    &__title {
      font-size: 36px;
      line-height: 34px;
      margin-bottom: 40px;
      max-width: 589px;
    }
    &__items__wrapper {
      max-width: 589px;
    }
    &__cancel__wrapper {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #f5f5f5;
      text-align: center;
      margin-left: 10px;
      cursor: pointer;
      text-decoration: none;
      color: #000;
    }
    &__cancel {
      line-height: 40px;
    }
  }
  .amount {
    &__container {
      max-width: 589px;
      bottom: -18%;
    }
    &__button__left__wrapper {
      outline: 1px solid;
    }
  }
}
</style>
