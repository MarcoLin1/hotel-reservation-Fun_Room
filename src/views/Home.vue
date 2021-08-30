<template>
  <div class="home__page">
    <div class="home__page__slider__container">
      <div class="home__page__slides">
        <div class="home__page__slide home__page__slide__first">
          <div alt="" class="home__page__slide__first__image"></div>
        </div>
        <div class="home__page__slide home__page__slide__second">
          <div alt="" class="home__page__slide__second__image"></div>
        </div>
        <div class="home__page__slide home__page__slide__third">
          <div alt="" class="home__page__slide__third__image"></div>
        </div>
      </div>
      <div class="home__page__navigation__manual">
        <div class="home__page__manual up__button" @click.stop.prevent="sliderControll('up')">&lt;</div>
        <div class="home__page__manual down__button" @click.stop.prevent="sliderControll('down')">&lt;</div>
      </div>
    </div>
    <Navbar />
      <div class="home__page__wrapper" v-if="isChecked">
      <div class="icons__wrapper">
        <div class="icon__item">
          <img src="./../assets/image/facebook.svg" alt="" class="icon__fb icon">
        </div>
        <div class="icon__item">
          <img src="./../assets/image/instagram.svg" alt="" class="icon__ig icon">
        </div>
        <div class="icon__item">
          <img src="./../assets/image/email.svg" alt="" class="icon__mail icon">
        </div>
      </div>
      <div class="home__page__order__container">
        <div class="home__page__order__item">
          <div class="home__page__order__number">01</div>
        </div>
        <div class="home__page__order__item">
          <div class="home__page__order__room">Single Room</div>
        </div>
        <div class="home__page__order__item">
          <div class="home__page__order__description">潔淨白色極簡主義, 恣意享受舒適與自在, 身心靈極致美好的享受</div>
        </div>
        <div class="home__page__order__item home__page__order__item__last">
          <div class="home__page__order__price">$2,700</div>
          <div class="home__page__order__button__wrapper">
            <div class="home__page__order__button" @click="moveToRoomDetail('Single Room')">線上訂房</div>
          </div>
        </div>
      </div>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      slideIndex: 0
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState(['isChecked'])
  },
  methods: {
    toggleEvent () {
      const toggleCheckbox = document.querySelector('.navbar__toggle')
      const homeWrapper = document.querySelector('.home__page__wrapper')
      if (!toggleCheckbox.checked) {
        homeWrapper.classList.add('disappear')
      } else {
        homeWrapper.classList.remove('disappear')
      }
    },
    sliderControll (direction) {
      const sliderContainer = document.querySelector('.home__page__slider__container')
      const slides = document.querySelector('.home__page__slides')
      const slidesLength = slides.querySelectorAll('.home__page__slide').length
      const sliderHeight = sliderContainer.clientHeight
      if (direction === 'up') {
        this.slideIndex++
        if (this.slideIndex > slidesLength - 1) {
          this.slideIndex = 0
        }
        slides.style.transform = `translateY(-${this.slideIndex * sliderHeight}px)`
      }

      if (direction === 'down') {
        if (this.slideIndex <= 0) {
          return
        }
        this.slideIndex--
        slides.style.transform = `translateY(-${this.slideIndex * sliderHeight}px)`
      }
    },
    moveToRoomDetail (text) {
      this.$store.commit('clickItem', text)
      this.$router.push({ name: 'room-detail' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home__page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.home__page__wrapper {
  width: 100%;
}

.home__page {
  &__slider__container {
    position: absolute;
    top: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  &__slides {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    transition: transform 0.5s ease-in;
  }
  &__slide {
    height: 100%;
  }
  &__slide__first__image {
    background-image: url('./../assets/image/home_page_room_1.jpeg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
  &__slide__second__image {
    background-image: url('./../assets/image/room_1.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
  &__slide__third__image {
    background-image: url('./../assets/image/homePage.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
  &__navigation__manual {
    position: relative;
    top: 60%;
    left: -45%;
    display: grid;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
  }
  &__manual {
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transition: 0.8s;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
}

.up__button {
  font-size: 8px;
  transform: rotate(90deg);
}

.down__button {
  font-size: 8px;
  transform: rotate(270deg);
}

.icons__wrapper {
  position: relative;
  bottom: -80px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-left: 18px;
  z-index: 99;
}

.icon {
  &__item {
    position: relative;
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.icon__fb, .icon__ig, .icon__mail {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.home__page__order {
  &__container {
    position: relative;
    right: 0;
    top: 20px;
    width: 238px;
    height: 150px;
    margin: 0 20px 0 auto;
    padding: 11px 15px 16px 18px;
    background-color: rgba(255, 255, 255, 0.38);
    backdrop-filter: blur(4.5px);
    z-index: 99;
  }
  &__number {
    font-size: 36px;
    line-height: 42px;
    font-style: italic;
    color: #ffffff;
    font-weight: 400;
  }
  &__room {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
  }
  &__description {
    font-size: 7px;
    font-weight: 300;
    line-height: 12px;
    color: #3e3e3e;
    margin: 10px 0 12px 0;
  }
  &__item__last {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  &__price {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
  &__button__wrapper {
    width: 60px;
    height: 22px;
    background-color: black;
    font-size: 8px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
  &__button {
    color: #ffffff;
    text-decoration: none;
  }
  &__button {
    cursor: pointer;
  }
}
.disappear {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}

@media screen and (min-width: 800px) {
  .icons__wrapper {
    display: flex;
    position: absolute;
    top: none;
    bottom: 3%;
    right: 5%;
  }
  .home__page__order__container {
    top: 100px;
    margin: 0 0 0 50px;
  }

}
</style>
