<template>
  <div class="home__page">
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
          <div class="home__page__order__number">05</div>
        </div>
        <div class="home__page__order__item">
          <div class="home__page__order__room">Twim Room</div>
        </div>
        <div class="home__page__order__item">
          <div class="home__page__order__description">潔淨白色極簡主義, 恣意享受舒適與自在, 身心靈極致美好的享受</div>
        </div>
        <div class="home__page__order__item home__page__order__item__last">
          <div class="home__page__order__price">$3,350</div>
          <div class="home__page__order__button__wrapper"><router-link to="/order" class="home__page__order__button">線上訂房</router-link></div>
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
      console.log(toggleCheckbox)
      console.log(homeWrapper)
      if (!toggleCheckbox.checked) {
        homeWrapper.classList.add('disappear')
      } else {
        homeWrapper.classList.remove('disappear')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.home__page {
  background-image: url('./../assets/image/homePage.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}

.home__page__wrapper {
  width: 100%;
}

.icons__wrapper {
  position: relative;
  bottom: -80px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-left: 18px;
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
