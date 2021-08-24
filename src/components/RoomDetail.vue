<template>
  <div class="room__detail__wrapper">
    <div class="room__detail__container" v-if="showContent">
      <div class="room__detail__top__wrapper">
        <div class="room__detail__main__wrapper">
          <div class="room__detail__name__wrapper">
            <div class="room__detail__name">Deluxe Double Room</div>
            <div class="room__detail__comments__wrapper">
              <div class="room__detail__comment">房客評價(128)</div>
              <div class="room__detail__comment__icons__wrapper">
                <img :src="star.image" alt="" class="room__detail__comment__icon" v-for="star in commentIcons" :key="star.id">
              </div>
            </div>
          </div>
          <div class="room__detail__price__wrapper">
            <div class="room__detail__price__item">
              <div class="room__detail__price__title">平日(週一 ~ 四)</div>
              <div class="room__detail__price">$2,888<span class="room__detail__date">/日</span></div>
            </div>
            <div class="room__detail__price__item">
              <div class="room__detail__price__title">假日(週五 ~ 日)</div>
              <div class="room__detail__price">$3,000<span class="room__detail__date">/日</span></div>
            </div>
          </div>
        </div>
        <div class="room__detail__description">
          Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
        </div>
      </div>
      <div class="room__detail__middle__wrapper">
        <div class="room__detail__information__wrapper">
          <div class="room__detail__information__title">房間資訊</div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">人數限制</div>
            <div class="room__detail__information__content">1</div>
          </div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">床型</div>
            <div class="room__detail__information__content">單人床</div>
          </div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">衛浴數量</div>
            <div class="room__detail__information__content">1</div>
          </div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">房間大小</div>
            <div class="room__detail__information__content">18 平方公尺</div>
          </div>
        </div>
        <div class="room__detail__information__wrapper">
          <div class="room__detail__information__title">入住/退房時間</div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">入住時間</div>
            <div class="room__detail__information__content">15:00~21:00</div>
          </div>
          <div class="room__detail__information__item">
            <div class="room__detail__information__name">退房時間</div>
            <div class="room__detail__information__content">10:00以前</div>
          </div>
        </div>
      </div>
      <div class="room__detail__bottom__wrapper">
        <div class="room__detail__bottom__title">客房設施</div>
        <div class="room__detail__bottom__icons__container">
          <div class="room__detail__bottom__item" v-for="icon in icons" :key="icon.id">
            <img :src="icon.image" alt="" class="room__detail__icon">
            <div class="room__detail__icon__text">{{icon.text}}</div>
          </div>
        </div>
      </div>
      <Calendar />
      <template >
        <div class="room__detail__order__button" @click="orderView">
          <div class="room__detail__order__button__text">
            預定房間
          </div>
        </div>
      </template>
    </div>
    <div class="room__detail__form__container">
      <div class="form__detail__title__wrapper">
        <div class="form__detail__title__item">
          <div class="form__detail__price__title">
            平日(週一 ~ 四)
          </div>
          <div class="form__detail__price">
            $2,888/日
          </div>
        </div>
        <div class="form__detail__title__item">
          <div class="form__detail__price__title">
            假日(週五 ~ 日)
          </div>
          <div class="form__detail__price">
            $3,000/日
          </div>
        </div>
      </div>
      <form action="" class="room__detail__form__wrapper">
        <div class="form__detail__item">
          <label for="form__detail__name__input" class="form__detail__name room__detail__label">姓名</label>
          <input type="text" class="form__detail__name__input form__detail__input" id="form__detail__name__input">
        </div>
        <div class="form__detail__item">
          <label for="room__detail__phone__input" class="room__detail__phone room__detail__label">聯絡電話</label>
          <input type="text" class="room__detail__phone__input form__detail__input" id="room__detail__phone__input">
        </div>
        <div class="form__detail__item">
          <label for="room__detail__email__input" class="room__detail__email room__detail__label">E-mail</label>
          <input type="text" class="room__detail__email__input form__detail__input" id="room__detail__email__input">
        </div>
        <div class="form__detail__item form__detail__time__container">
          <div class="form__detail__time__wrapper">
            <label for="check__in" class="room__detail__time__title room__detail__label">入住時間</label>
            <input type="date" class="room__detail__time__input form__detail__input" id="check__in">
          </div>
          <div class="form__detail__time__wrapper">
            <label for="check__out" class="room__detail__time__title room__detail__label">退房時間</label>
            <input type="date" class="room__detail__time__input form__detail__input" id="check__out">
          </div>
        </div>
        <div class="form__detail__button__link">
          <div class="form__detail__button__wrapper" @click.stop.prevent="orderView">
            <button class="form__detail__button">預訂房間</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Calendar from './../components/Calendar.vue'
import { mapState } from 'vuex'
export default {
  name: 'RoomDetail',
  components: {
    Calendar
  },
  data () {
    return {
      icons: [
        {
          id: 1,
          text: 'wifi',
          image: require('./../assets/image/wifi.svg')
        },
        {
          id: 2,
          text: '早餐',
          image: require('./../assets/image/breakfast.svg')
        },
        {
          id: 3,
          text: 'Mini Bar',
          image: require('./../assets/image/miniBar.svg')
        },
        {
          id: 4,
          text: 'Room Service',
          image: require('./../assets/image/roomService.svg')
        },
        {
          id: 5,
          text: '電話',
          image: require('./../assets/image/phone.svg')
        },
        {
          id: 6,
          text: '空調',
          image: require('./../assets/image/airCondition.svg')
        },
        {
          id: 7,
          text: '冰箱',
          image: require('./../assets/image/refrigerator.svg')
        },
        {
          id: 8,
          text: '沙發',
          image: require('./../assets/image/sofa.svg')
        },
        {
          id: 9,
          text: 'View',
          image: require('./../assets/image/view.svg')
        },
        {
          id: 10,
          text: '禁止吸煙',
          image: require('./../assets/image/nonSmoking.svg')
        },
        {
          id: 11,
          text: '適合兒童',
          image: require('./../assets/image/children.svg')
        },
        {
          id: 12,
          text: '寵物攜帶',
          image: require('./../assets/image/pet.svg')
        }
      ],
      commentIcons: [
        {
          id: 1,
          image: require('./../assets/image/darkStar.svg')
        },
        {
          id: 2,
          image: require('./../assets/image/darkStar.svg')
        },
        {
          id: 3,
          image: require('./../assets/image/darkStar.svg')
        },
        {
          id: 4,
          image: require('./../assets/image/darkStar.svg')
        },
        {
          id: 5,
          image: require('./../assets/image/star.svg')
        }
      ]
    }
  },
  computed: {
    ...mapState(['orderViewIsChecked', 'showContent'])
  },
  created () {

  },
  methods: {
    orderView () {
      this.$store.commit('toggleOrderView')
    }
  }
}
</script>

<style lang="scss" scoped>
.room__detail {
  &__container {
    padding-bottom: 10px;
  }
  &__main__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  &__name__wrapper {
    width: 100%;
  }
  &__name {
    font-size: 30px;
    font-weight: 400;
    line-height: 26px;
  }
  &__price__wrapper {
    width: 80%;
    padding: 10px 0;
    display: grid;
    grid-gap: 1rem;
    text-align: center;
  }
  &__price__title {
    font-weight: 300;
    font-size: 14px;
    color: #949494;
    line-height: 18px;
  }
  &__price {
    font-weight: 500;
    font-size: 1rem;
    line-height: 21px;
  }
  &__description {
    font-size: 14px;
    line-height: 21px;
    font-weight: 300;
    margin-top: 21px;
    padding: 10px;
  }
  &__middle__wrapper {
    display: flex;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  &__information__wrapper {
    width: 100%;
    padding: 10px;
  }
  &__information__title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
  }
  &__information__item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0 5px 0;
  }
  &__information__name, &__information__content {
    width: 100%;
    font-size: 14px;
    font-weight: 300;
  }
  &__bottom__wrapper {
    padding: 10px;
  }
  &__bottom__title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 35px;
  }
  &__bottom__icons__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 28px;
    text-align: center;
  }
  &__bottom__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__icon {
    margin-bottom: 10px;
  }
  &__order__button {
    padding: 15px;
    cursor: pointer;
  }
  &__order__button__text {
    background-color: #000;
    color: #fff;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
  }
  &__comments__wrapper {
    display: none;
  }
}
.room__detail__form__container {
  display: none;
}

@media screen and (min-width: 756px) {
  .room__image__wrapper, .room__detail__container {
    padding: 0 20px;
  }
  .room__detail {
    &__main__wrapper {
      margin-top: 20px;
    }
    &__description {
      margin-top: 0;
    }
    &__order__button {
      display: none;
    }
    &__wrapper {
      display: flex;
    }
    &__container {
      width: 100%;
    }
    &__price__wrapper {
      display: none;
    }
    &__form__container {
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      flex-direction: column;
    }
    &__form__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      max-width: 378px;
      max-height: 467px;
      padding: 0 25px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
    }
    &__label {
      display: block;
      color: #6D6D6D;
      font-weight: 300;
      line-height: 34px;
    }
    &__name__wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
  .form__detail {
    &__title__wrapper {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
      max-width: 400px;
    }
    &__price__title {
      font-weight: 300;
      line-height: 36px;
      color: #949494;
    }
    &__price {
      font-weight: 500;
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 20px;
    }
    &__item {
      width: 100%;
      margin-bottom: 6px;
    }
    &__name {
      margin-top: 25px;
    }
    &__input {
      height: 40px;
      width: 100%;
      border: none;
      background-color: #EDEDED;
    }
    &__time__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    &__time__input {
      max-width: 150px;
    }
    &__button__wrapper {
      height: 50px;
      width: 100%;
      margin-top: 30px;
      background-color: #000;
      text-align: center;
      cursor: pointer;
    }
    &__button__link {
      width: 100%;
    }
    &__button {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 5px;
      line-height: 50px;
    }
  }
}
</style>
