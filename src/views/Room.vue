<template>
  <div class="room__container">
    <Navbar />
    <div class="room__image__slider" v-if="showContent">
      <div class="room__image__slides">
        <input type="radio" name="room__radio" id="radio__1">
        <input type="radio" name="room__radio" id="radio__2">
        <input type="radio" name="room__radio" id="radio__3">
        <div class="room__slide room__slide__first">
          <img src="./../assets/image/room_1.jpg" alt="" class="room__slide__first__image">
        </div>
        <div class="room__slide room__slide__second">
          <img src="./../assets/image/room_2.jpg" alt="" class="room__slide__second__image">
        </div>
        <div class="room__slide room__slide__third">
          <img src="./../assets/image/room_3.jpg" alt="" class="room__slide__third__image">
        </div>
      </div>
      <div class="room__navigation__manual">
        <label for="radio__1" class="room__manual__label"></label>
        <label for="radio__2" class="room__manual__label"></label>
        <label for="radio__3" class="room__manual__label"></label>
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
    <router-view></router-view>
    <Order />
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import Order from './../views/Order.vue'
import { mapState } from 'vuex'
export default {
  name: 'Room',
  components: {
    Navbar,
    Order
  },
  computed: {
    ...mapState(['showContent'])
  }
}
</script>

<style lang="scss" scoped>
.room {
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
      border-bottom: 1px solid;
    }
  }
  &__information__link {
    text-decoration: none;
    color: #000000;
  }
  &__image__slider {
    width: auto;
    height: 300px;
    overflow: hidden;
  }
  &__image__slides {
    width: 500%;
    height: 300px;
    display: flex;
    position: relative;
  }
  &__image__slides input {
    display: none;
  }
  &__slide {
    width: 20%;
    transition: 0.8s;
  }
  &__slide img {
    width: 100%;
    height: 350px;
  }
  &__navigation__manual {
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: center;
  }
  &__manual__label {
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    &:hover {
      background-color: #000;
    }
  }
  &__manual__label:not(:last-child) {
    margin-right: 20px;
  }
}

#radio__1:checked ~ .room__slide__first {
  margin-left: 0;
}

#radio__2:checked ~ .room__slide__first {
  margin-left: -20%;
}

#radio__3:checked ~ .room__slide__first {
  margin-left: -40%;
}

@media screen and (min-width: 756px) {
  .room {
    &__image__wrapper {
      display: grid;
      grid-template-columns: 1fr 0.6fr;
      grid-gap: 1rem;
      padding: 0 10px;
    }
    &__information__item {
      display: none;
    }
    &__image__slider {
      padding-top: 50px;
      margin: 0 auto 0 10px;
    }
    &__navigation__manual {
      display: none;
    }
    &__image__slides {
      display: grid;
      grid-template-columns: 1fr 0.8fr;
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 10px;
      grid-template-areas:
        "first second"
        "first third";
      width: 100%;
    }
    &__slide {
      width: 100%;
    }
    &__slide__first {
      grid-area: first;
      max-width: 600px;
      margin: 0 0 0 auto;
    }
    &__slide__second {
      grid-area: second;
    }
    &__slide__third {
      grid-area: third;
    }
    &__slide__first__image {
      height: 300px;
      max-width: 600px;
    }
    &__slide &__slide__second__image {
      height: 150px;
      max-width: 420px;
    }
    &__slide &__slide__third__image {
      height: 150px;
      max-width: 420px;
    }
  }
}
</style>
