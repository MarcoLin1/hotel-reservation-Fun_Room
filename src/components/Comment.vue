<template>
  <div class="comment__container">
    <div class="comment__top__wrapper">
      <div class="comment__name__wrapper">
        <div class="comment__name__title">代號/姓名</div>
        <input type="text" class="comment__name__input" v-model="name">
      </div>
      <div class="comment__icons__wrapper">
        <div class="comment__icon__wrapper">
          <div class="comment__icon" @click="iconClick(1)" v-if="toggleIcon1"></div>
          <div class="comment__icon__full" @click="iconClick(1)" v-else></div>
        </div>
        <div class="comment__icon__wrapper">
          <div class="comment__icon" @click="iconClick(2)" v-if="toggleIcon2"></div>
          <div class="comment__icon__full" @click="iconClick(2)" v-else></div>
        </div>
        <div class="comment__icon__wrapper">
          <div class="comment__icon" @click="iconClick(3)" v-if="toggleIcon3"></div>
          <div class="comment__icon__full" @click="iconClick(3)" v-else></div>
        </div>
        <div class="comment__icon__wrapper">
          <div class="comment__icon" @click="iconClick(4)" v-if="toggleIcon4"></div>
          <div class="comment__icon__full" @click="iconClick(4)" v-else></div>
        </div>
        <div class="comment__icon__wrapper">
          <div class="comment__icon" @click="iconClick(5)" v-if="toggleIcon5"></div>
          <div class="comment__icon__full" @click="iconClick(5)" v-else></div>
        </div>
      </div>
    </div>
    <div class="comment__description__wrapper">
      <div class="comment__description__title">評論</div>
      <div class="comment__description__input__wrapper">
        <textarea class="comment__description__input" rows="8" cols="40" type="text" maxlength="100" v-model="comment"></textarea>
        <span class="comment__description__numbers">{{countNum}} / 100</span>
      </div>
    </div>
    <div class="comment__tags__wrapper">
      <div class="comment__tag__item">
        <button class="comment__tag" @click.stop.prevent="buttonContent('服務讚')">服務讚</button>
      </div>
      <div class="comment__tag__item">
        <button class="comment__tag" @click.stop.prevent="buttonContent('清潔讚')">清潔讚</button>
      </div>
      <div class="comment__tag__item">
        <button class="comment__tag" @click.stop.prevent="buttonContent('衛生讚')">衛生讚</button>
      </div>
      <div class="comment__tag__item">
        <button class="comment__tag" @click.stop.prevent="buttonContent('安全讚')">安全讚</button>
      </div>
      <div class="comment__tag__item">
        <button class="comment__tag" @click.stop.prevent="buttonContent('設施讚')">設施讚</button>
      </div>
    </div>
    <div class="comment__button__wrapper">
      <button class="comment__button">確定留評</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: '',
      name: '',
      toggleIcon1: true,
      toggleIcon2: true,
      toggleIcon3: true,
      toggleIcon4: true,
      toggleIcon5: true
    }
  },
  computed: {
    countNum: function () {
      return this.comment.length
    }
  },
  methods: {
    buttonContent (text) {
      if (this.comment) {
        this.comment = this.comment + ', ' + text
      } else {
        this.comment += text
      }
    },
    iconClick (number) {
      if (number === 1) {
        this.toggleIcon1 = !this.toggleIcon1
      } else if (number === 2) {
        this.toggleIcon2 = !this.toggleIcon2
      } else if (number === 3) {
        this.toggleIcon3 = !this.toggleIcon3
      } else if (number === 4) {
        this.toggleIcon4 = !this.toggleIcon4
      } else {
        this.toggleIcon5 = !this.toggleIcon5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment {
    &__container {
      padding: 30px 20px;
      max-width: 500px;
      margin: 0 auto;
    }
    &__top__wrapper {
      display: flex;
      margin-bottom: 1rem;
      max-width: 400px;
    }
    &__name__wrapper {
      width: 90%;
      min-width: 170px;
    }
    &__icons__wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 25px);
      grid-gap: 2px;
      align-items: center;
    }
    &__icon__wrapper {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 2px;
    }
    &__icon, &__icon__full {
      background-repeat: no-repeat;
      background-size: auto;
      background-position: center;
      width: 17px;
      height: 17px;
      background-color: #000;
      cursor: pointer;
    }
    &__icon {
      mask-image: url('./../assets/image/star.svg');
      -webkit-mask-image: url('./../assets/image/star.svg');
    }
    &__icon__full {
      mask-image: url('./../assets/image/starFull.svg');
      -webkit-mask-image: url('./../assets/image/starFull.svg');
    }
    &__name__title {
      line-height: 19px;
      margin-bottom: 5px;
      font-size: 14px;
      color: #6D6D6D;
    }
    &__name__input {
      border: none;
      background-color: #EDEDED;
      height: 40px;
      width: 100%;
      max-width: 150px;
      padding-left: 5px;
    }
    &__description__input__wrapper {
      width: 100%;
      max-width: 410px;
      background-color: #EDEDED;
      padding-bottom: 5px;
      min-width: 345px;
    }
    &__description__title {
      font-size: 14px;
      font-weight: 400;
      color: #6D6D6D;
      margin-bottom: 5px;
    }
    &__description__numbers {
      font-size: 14px;
      color: #B1B1B1;
      display: block;
      text-align: right;
      margin-right: 5px;
    }
    &__description__input {
      border: none;
      background-color: #EDEDED;
      padding: 5px;
      resize: none;
      overflow: auto;
      min-width: 300px;
    }
    &__tags__wrapper {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
      margin-top: 18px;
    }
    &__tag__item {
      border: 1px solid;
      border-radius: 5px;
      text-align: center;
      height: 28px;
      min-width: 55px;
      &:hover {
        background-color: #000;
        cursor: pointer;
      }
    }
    &__tag {
      line-height: 28px;
      &:hover {
        color: #fff;
      }
      &:focus {
        font-weight: bold;
      }
    }
    &__button__wrapper {
      margin: 30px 0 30px 0;
      background-color: #000;
      height: 40px;
      text-align: center;
      cursor: pointer;
      min-width: 310px;
    }
    &__button {
      color: #fff;
      line-height: 40px;
    }
  }

  @media screen and (min-width: 756px) {
    .comment {
      &__container {
        max-width: 700px;
        margin: 30px auto;
      }
      &__top__wrapper {
        max-width: none;
      }
      &__name__input {
        max-width: none;
      }
      &__description__input__wrapper {
        max-width: none;
      }
      &__description__input {
        width: 600px;
      }
      &__icons__wrapper {
        justify-content: center;
      }
    }
  }
</style>
