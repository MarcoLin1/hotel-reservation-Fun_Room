<template>
  <div class="order__container" v-if="orderViewIsChecked">
    <div class="order__wrapper">
      <form action="" class="order__form__wrapper">
        <div class="order__form__title">訂房資訊</div>
        <div class="order__form__item">
          <label for="order__form__room__type" class="order__form__room__type__title order__form__label">房型</label>
          <select name="order__form__room__type" id="order__form__room__type" class="order__form__room__type">
            <option value="1">Single Room (單人房)</option>
            <option value="2">Deluxe Single Room (豪華單人房)</option>
            <option value="3">Double Room (雙人房)</option>
            <option value="4">Deluxe Double Room (豪華雙人房)</option>
            <option value="5">Twin Room (雙床房)</option>
            <option value="6">Deluxe Twin Romm (豪華雙床房)</option>
          </select>
        </div>
        <div class="order__form__item">
          <label for="order__form__name__input" class="order__form__name order__form__label">姓名</label>
          <input type="text" class="order__form__name__input order__form__input" id="order__form__name__input">
        </div>
        <div class="order__form__item">
          <label for="order__form__phone__input" class="order__form__phone order__form__label">聯絡電話</label>
          <input type="text" class="order__form__phone__input order__form__input" id="order__form__phone__input">
        </div>
        <div class="order__form__item">
          <label for="order__form__email__input" class="order__form__email order__form__label">E-mail</label>
          <input type="text" class="order__form__email__input order__form__input" id="order__form__email__input">
        </div>
        <div class="order__form__item order__form__time__container">
          <div class="order__form__time__wrapper">
            <label for="check__in" class="order__form__time__title order__form__label">入住時間</label>
            <input type="date" class="order__form__time__input order__form__input" id="check__in">
          </div>
          <div class="order__form__time__wrapper">
            <label for="check__out" class="order__form__time__title order__form__label">退房時間</label>
            <input type="date" class="order__form__time__input order__form__input" id="check__out">
          </div>
        </div>
      </form>
      <div class="credit__card__container">
        <div class="credit__card__title">付款方式</div>
        <div class="credit__card__items__wrapper">
          <div class="credit__card__item credit__card__item__top">
            信用卡
            <span class="credit__card__text">(享9折優惠)</span>
          </div>
          <div class="credit__card__item credit__card__item__bottom">
            入住付款
          </div>
        </div>
      </div>
      <div class="payment__container">
        <div class="payment__title">付款資訊</div>
        <div class="payment__items__wrapper">
          <div class="payment__item payment__item__top">
            <label for="payment__item__name__input" class="payment__item__name__label payment__label">持卡人</label>
            <input type="text" id="payment__item__name__input" class="payment__input">
          </div>
          <div class="payment__item payment__item__middle">
            <label for="payment__item__credit__card__input" class="payment__item__credit__card__label payment__label">信用卡號碼</label>
            <div class="payment__item__credit__card__input__wrapper">
              <input type="text" class="payment__item__credit__card__input payment__input" id="payment__item__credit__card__input">
              <input type="text" class="payment__item__credit__card__input payment__input" id="payment__item__credit__card__input">
              <input type="text" class="payment__item__credit__card__input payment__input" id="payment__item__credit__card__input">
              <input type="text" class="payment__item__credit__card__input payment__input" id="payment__item__credit__card__input">
            </div>
          </div>
          <div class="payment__item payment__item__bottom">
            <div class="payment__item__inner__wrapper">
              <label for="payment__item__sign__input" class="payment__sign__label payment__label">簽名欄位末三碼(CVV)</label>
              <input type="text" class="payment__item__sign__input payment__input">
            </div>
            <div class="payment__item__inner__wrapper">
              <label for="payment__item__date" class="payment__item__date__label payment__label">到期日</label>
              <div class="payment__item__date__wrapper">
                <select name="payment__item__month" id="payment__item__month" class="payment__item__month">
                  <option value="" selected disabled class="payment__month">MM</option>
                  <option value="" v-for="month in 12" :key="month">{{month}}</option>
                </select>
                <select name="payment__item__year" id="payment__item__year" class="payment__item__year">
                  <option value="" selected disabled class="payment__year">YY</option>
                  <option value="" v-for="year in 12" :key="year">{{year}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="amount__container">
        <div class="amount__item">
          <div class="amount__title">小計</div>
          <div class="amount__inner__wrapper">
            <div class="amount__inner__item">
              <span class="amount__inner__text">平日</span>
              <span class="amount__inner__date">2夜</span>
            </div>
            <div class="amount__inner__item">
              <span class="amount__inner__text">假日</span>
              <span class="amount__inner__date">0夜</span>
            </div>
          </div>
        </div>
        <div class="amount__item">
          <div class="amount__title">消費金額</div>
          <div class="amount__price">$5,400</div>
        </div>
        <router-link to="/confirm">
          <div class="order__button__wrapper">
            <button class="order__button">預訂房間</button>
          </div>
        </router-link>
        <div class="order__button__wrapper order__cancel__button__wrapper" @click.stop.prevent="cancelOrder">
          <button class="order__button">取消</button>
        </div>
      </div>
    </div>
    <div class="order__cancel__wrapper" @click.stop.prevent="cancelOrder">
      <div class="order__cancel">X</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    // Navbar,
  },
  computed: {
    ...mapState(['orderViewIsChecked'])
  },
  methods: {
    cancelOrder () {
      this.$store.commit('toggleOrderNonView')
    }
  }
}
</script>

<style lang="scss" scoped>
  .order__container {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .order__wrapper {
    background-color: #f5f5f5;
    width: 100%;
    margin: 0 auto;
  }
  .order__form {
    &__wrapper {
      background-color: #fff;
      box-shadow: 0.5px 2px 4.5px rgba(0, 0, 0, 0.13);
      position: relative;
      width: 100%;
      max-width: 330px;
      padding: 8px 30px 40px 30px;
      margin: 0 auto;
      margin-top: 80px;
    }
    &__title {
      font-weight: 400;
      font-size: 18px;
      line-height: 34px;
    }
    &__room__type {
      width: 100%;
      height: 40px;
      border: none;
      background-color: #000;
      color: #fff;
      padding: 0 5px;
    }
    &__item {
      width: 100%;
    }
    &__label {
      display: block;
      font-size: 14px;
      line-height: 34px;
      font-weight: 400;
      color: #6D6D6D;
    }
    &__input {
      height: 40px;
      width: 100%;
      border: none;
      padding-left: 5px;
      background: #EDEDED;
    }
    &__time__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
  .credit__card {
    &__container {
      width: 100%;
      max-width: 330px;
      box-shadow: 0.5px 2px 4.5px rgba(0, 0, 0, 0.13);
      background-color: #fff;
      padding: 21px 30px 13px 30px;
      margin: 0 auto;
      margin-top: 14px;
      display: grid;
      grid-template-columns: auto 1fr;
      position: relative;
      top: 10%;
    }
    &__title {
      font-size: 18px;
      font-weight: 400;
      line-height: 34px;
      margin-top: 4px;
    }
    &__items__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__item {
      width: 100%;
      max-width: 199px;
      height: 40px;
      cursor: pointer;
    }
    &__item__top {
      background-color: #000;
      color: #fff;
      text-align: center;
      line-height: 40px;
      border: 1px solid;
    }
    &__text {
      color: chocolate;
    }
    &__item__bottom {
      text-align: center;
      line-height: 40px;
      outline: 1px solid;
      margin-top: 1rem;
    }
  }
  .payment {
    &__container {
      width: 100%;
      max-width: 330px;
      box-shadow: 0.5px 2px 4.5px rgba(0, 0, 0, 0.13);
      background-color: #fff;
      padding: 9px 30px 15px 30px;
      margin: 0 auto;
      margin-top: 14px;
      position: relative;
      top: 10%;
    }
    &__title {
      font-size: 18px;
      font-weight: 400;
      line-height: 34px;
      margin-top: 4px;
    }
    &__label {
      display: block;
      font-size: 14px;
      line-height: 34px;
      font-weight: 400;
      color: #6D6D6D;
    }
    &__input {
      border: none;
      background-color: #EDEDED;
      height: 40px;
      width: 100%;
      padding-left: 5px;
    }
    &__item__credit__card__input__wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
    &__item__bottom {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    &__item__date__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    &__item__sign__input {
      height: 38px;
    }
    &__item__month, &__item__year {
      height: 40px;
      border: none;
      background-color: #EDEDED;
      color: #CACACA;
      padding-left: 5px;
      &:focus {
        color: #000;
      }
    }
  }
  .amount {
    &__container {
      width: 100%;
      max-width: 390px;
      margin: 0 auto;
      margin-top: 10px;
    }
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__title, &__inner__text, &__inner__date {
      width: 100%;
      font-weight: 400;
      line-height: 34px;
    }
    &__inner__wrapper {
      width: 100%;
      max-width: 80px;
      text-align: right;
    }
    &__inner__text {
      margin-right: 10px;
    }
    &__price {
      font-size: 24px;
      font-weight: 700;
      line-height: 34px;
    }
  }
  .order__button__wrapper {
    height: 40px;
    width: 100%;
    max-width: 390px;
    background-color: #000;
    text-align: center;
    margin: 10px 0 30px 0;
  }
  .order__button {
    color: #fff;
    line-height: 40px;
    letter-spacing: 5px;
  }
  .order__cancel__wrapper {
    display: none;
  }

  @media screen and (min-width: 756px) {
    .order__container {
      position: absolute;
      top: 0;
      width: 100%;
      height: auto;
      background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(14px);
      z-index: 999;
      padding: 60px 0;
      flex-direction: row;
      justify-content: center;
    }
    .order__wrapper {
      max-width: 700px;
      margin: 0;
    }
    .order__form {
      &__wrapper {
        max-width: 589px;
        margin-top: 35px;
        padding: 0;
      }
      &__item, &__title {
        max-width: 530px;
        margin: 0 auto;
      }
      &__title {
        padding-top: 15px;
      }
      &__time__container {
        padding-bottom: 30px;
      }
    }
    .credit__card {
      &__container {
        max-width: 589px;
        top: 0;
        padding-bottom: 30px;
        padding: 0;
      }
      &__title {
        padding-left: 30px;
        line-height: 90px;
      }
      &__items__wrapper {
        flex-direction: row;
        justify-content: space-evenly;
        padding: 30px 0;
      }
      &__item__bottom {
        margin-top: 0;
      }
    }
    .payment {
      &__container {
        top: 0;
        max-width: 589px;
        padding: 0;
      }
      &__title {
        max-width: 530px;
        margin: 0 auto;
        padding-top: 18px;
      }
      &__items__wrapper {
        max-width: 530px;
        margin: 0 auto;
        padding-bottom: 30px;
      }
      &__item__bottom {
        display: flex;
        justify-content: space-between;
      }
      &__item__credit__card__input__wrapper {
        grid-gap: 24px;
      }
      &__item__sign__input {
        max-width: 195px;
      }
      &__item__inner__wrapper {
        width: 48%;
      }
      &__item__date__wrapper {
        grid-gap: 18px;
      }
      &__item__month, &__item__year {
        max-width: 135px;
      }
    }
    .amount {
      &__container {
        max-width: 589px;
      }
    }
    .order__button__wrapper {
      max-width: none;
    }
    .order__cancel__wrapper {
      display: block;
      margin-left: 20px;
      cursor: pointer;
    }
    .order__cancel__button__wrapper {
      display: none;
    }
    .order__cancel {
      background-color: #ffffff;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
</style>
