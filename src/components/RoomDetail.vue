<template>
  <div class="room__detail__container">
    <div class="room__detail__top__wrapper">
      <div class="room__detail__main__wrapper">
        <div class="room__detail__name__wrapper">
          <div class="room__detail__name">Deluxe Double Room</div>
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
    <div class="room__detail__order__button">
      <div class="room__detail__order__button__text">
        預定房間
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './../components/Calendar.vue'
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.room__detail {
  &__container {
    // outline: 2px solid;
    padding-bottom: 10px;
  }
  &__top__wrapper {
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
    // width: 60%;
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
}
</style>
