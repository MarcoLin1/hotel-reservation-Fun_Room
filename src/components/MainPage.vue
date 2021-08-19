<template>
<div class="nav__container">
  <div class="navbar__container">
    <a href="#" class="navbar__brand">Fun Room</a>
    <input type="checkbox" class="navbar__toggle" id="navbar__toggle">
    <!-- 增加標籤 -->
    <label for="navbar__toggle" class="navbar__toggle__hamburger" @click="toggleEvent">
      <span class="navbar__hamburger"></span>
    </label>
    <div class="navbar__wrapper">
      <ul class="navbar__list">
        <li class="navbar__item"><a href="#" class="navbar__link">Single Room</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Deluxe Single Room</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Double Room</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Deluxe Double Room</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Twin Room</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Deluxe Twin Room</a></li>
      </ul>
    </div>
  </div>
  <div class="home__page__wrapper">
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

export default {
  methods: {
    toggleEvent () {
      const toggleCheckbox = document.querySelector('.navbar__toggle')
      const homeWrapper = document.querySelector('.home__page__wrapper')
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
.navbar {
  &__container {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    height: 57px;
    background-color: rgba(255, 255, 255, 0.62);
  }
  &__wrapper {
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.62);
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out;
    text-align: center;
  }
  &__brand {
    font-weight: 700;
    font-size: 1.7rem;
    text-decoration: none;
    color: #333;
    line-height: 57px;
    margin-left: 18px;
    word-break: break-all
  }
  &__item {
    margin: 1.4rem 0;
    opacity: 0;
  }
  &__link {
    color: #333;
    text-decoration: none;
  }
  &__toggle:checked ~ &__wrapper {
    transform: scale(1, 1);
  }
  &__toggle:checked ~ &__wrapper &__item {
    transition: opacity 0.2s ease-out 0.15s;
    opacity: 1;
  }
  &__toggle__hamburger {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 23px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__hamburger {
    position: relative;
  }
  &__hamburger, &__hamburger::after, &__hamburger::before {
    height: 2.5px;
    width: 20px;
    background: #333;
  }
  &__hamburger::after, &__hamburger::before {
    content: "";
    position: absolute;
    left: 0;
  }
  &__hamburger::before {
    top: 8px;
  }
  &__hamburger::after {
    bottom: 8px;
  }
  &__toggle {
    visibility: hidden;
    position: absolute;
  }
  &__toggle:checked ~ &__toggle__hamburger &__hamburger::before {
    background: #ffffff;
    content: "X";
    color: #333;
    width: 13px;
    height: 13px;
    top: -15px;
    font-size: 1.5rem
  }
  &__toggle:checked ~ &__toggle__hamburger &__hamburger {
    background-color: #ffffff;
    height: 0;
  }
  &__toggle:checked ~ &__toggle__hamburger &__hamburger::after {
    width: 0;
    height: 0;
  }
}

.home__page__wrapper {
  width: 100%;
  position: relative;
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
  .navbar {
    &__container {
      display: grid;
      grid-template-columns: 150px auto repeat(6, auto);
    }
    &__toggle__hamburger {
      display: none;
    }
    &__brand {
      grid-column: 1 / 3;
    }
    &__wrapper {
      all: unset;
      opacity: 1;
      grid-column: 3 / 8;
    }
    &__item {
      opacity: 1;
      margin: 0;
    }
    &__list {
      height: 100%;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: end;
      grid-gap: 1rem;
      word-wrap:break-word;
      text-align: center;
    }
  }
  .home__page__wrapper {
    position: inherit;
  }
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
