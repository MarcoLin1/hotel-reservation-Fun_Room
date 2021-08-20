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
</div>
</template>

<script>

export default {
  methods: {
    toggleEvent () {
      const toggleCheckbox = document.querySelector('.navbar__toggle')
      if (!toggleCheckbox.checked) {
        this.$store.commit('toggleNonChecked')
      } else {
        this.$store.commit('toggleChecked')
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
}
</style>
