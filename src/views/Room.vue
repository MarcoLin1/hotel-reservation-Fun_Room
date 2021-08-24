<template>
  <div class="room__container">
    <Navbar />
    <div class="room__image__wrapper" v-if="showContent">
      <div class="room__image__left"></div>
      <div class="room__image__right">
        <div class="room__image__right__top"></div>
        <div class="room__image__right__bottom"></div>
      </div>
    </div>
    <div class="room__information__item" v-if="showContent">
      <router-link to="/room/detail" class="room__information__link">
        <div class="room__information__button">
          房間介紹
        </div>
      </router-link>
      <router-link to="/room/review" class="room__information__link">
        <div class="room__information__button">
          房客評價(128)
        </div>
      </router-link>
    </div>
    <RoomDetail />
    <Order />
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import RoomDetail from './../components/RoomDetail.vue'
import Order from './../views/Order.vue'
import { mapState } from 'vuex'
export default {
  name: 'Room',
  components: {
    Navbar,
    RoomDetail,
    Order
  },
  computed: {
    ...mapState(['showContent'])
  }
}
</script>

<style lang="scss" scoped>
.room {
  &__image__left {
    background-image: url('./../assets/image/homePage.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 500px;
    position: relative;
  }
  &__information__item {
    display: flex;
    justify-content: center;
    background-color: #F1F1F1;
    text-align: center;
  }
  &__information__button {
    width: 110px;
    margin: 0 20px;
    padding: 14px 10px 12px 10px;
    cursor: pointer;

    &:hover {
      border-bottom: 1.5px solid;
    }
  }
  &__information__link {
    text-decoration: none;
    color: #000000;
  }
}

@media screen and (min-width: 756px) {
  .room {
    &__image__wrapper {
      display: grid;
      grid-template-columns: 1fr 0.6fr;
      grid-gap: 1rem;
      padding: 0 10px;
    }
    &__image__left {
      width: 100%;
      height: 100%;
    }
    &__image__right {
      width: 100%;
    }
    &__image__right__top, &__image__right__bottom {
      background-image: url('./../assets/image/homePage.jpg');
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
      position: relative;
    }
    &__image__right__bottom {
      margin-top: 1rem;
    }
    &__information__item {
      display: none;
    }
  }
}
</style>
