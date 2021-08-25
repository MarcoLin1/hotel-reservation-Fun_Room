<template>
  <div class="review__wrapper">
    <div class="review__container">
      <router-link to="/room/comment"  class="review__comment__link">
        <div class="revire__comment__link__text">+ 我要給評</div>
      </router-link>
      <div class="reivew__comment__wrapper">
        <div class="review__comment__item" v-for="comment in commentAccount" :key="comment.id">
          <div class="review__comment__item__top">
            <div class="review__comment__item__account">{{comment.name}}</div>
            <img :src="comment.image" alt="" class="review__comment__icon">
          </div>
          <div class="review__comment__item__middle">
            <div class="review__comment__item__description">{{comment.text}}</div>
          </div>
          <div class="review__comment__item__bottom">
            <div class="review__comment__item__tag">服務讚</div>
            <div class="review__comment__item__tag">服務讚</div>
            <div class="review__comment__item__tag">服務讚</div>
            <div class="review__comment__item__tag">服務讚</div>
            <div class="review__comment__item__tag">服務讚</div>
          </div>
        </div>
      </div>
    </div>
    <div class="review__cancel__wrapper" @click.stop.prevent="$router.go(-1)">
      <div class="review__cancel">X</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentAccount: [
        {
          id: 1,
          name: 'y****mst',
          image: require('./../assets/image/commentStars.svg'),
          text: '空間很大，住起來很舒服'
        },
        {
          id: 2,
          name: 'ma***gglt',
          image: require('./../assets/image/commentStars.svg'),
          text: '不是照騙，CP值很高，推推！'
        },
        {
          id: 3,
          name: 'l****epq',
          image: require('./../assets/image/commentStars.svg'),
          text: '服務人員很親切，距離車站只要5分鐘'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .review {
    &__container {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding-top: 27px;
    }
    &__comment__link {
      text-align: right;
      line-height: 34px;
      font-weight: 400;
      color: #000;
    }
  }
  .review__comment {
    &__item {
      margin-bottom: 20px;
    }
    &__item__top {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
    &__item__account {
      font-size: 14px;
      line-height: 34px;
    }
    &__item__description {
      font-size: 14px;
      line-height: 34px;
    }
    &__item__bottom {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
    }
    &__item__tag {
      height: 28px;
      text-align: center;
      line-height: 28px;
      border: 1px solid;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 300;
    }
  }
  @media screen and (min-width: 756px) {
    .review {
      &__wrapper {
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.78);
        backdrop-filter: blur(14px);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      }
      &__container {
        background-color: #F5F5F5;
        max-width: 580px;
        height: 70%;
        padding: 20px 30px 20px 30px;
        position: relative;
        top: 15%;
        margin: 0;
      }
      &__cancel__wrapper {
        width: 40px;
        height: 40px;
        background-color: #F5F5F5;
        text-align: center;
        position: relative;
        top: 15%;
        margin-left: 10px;
      }
      &__cancel {
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
</style>
