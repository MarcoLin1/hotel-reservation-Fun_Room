<template>
  <div class="navbar__container">
    <a href="#" class="navbar__brand">Fun Room</a>
    <input type="checkbox" class="navbar__toggle" id="navbar__toggle">
    <!-- 增加標籤 -->
    <label for="navbar__toggle" class="navbar__toggle__hamburger">
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
    <!-- 增加標籤 -->
    <!-- <label for="navbar__toggle" class="navbar__toggle__hamburger">
      <span class="navbar__hamburger"></span>
    </label> -->
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  &__container {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 57px;
    // -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    // -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    // box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
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
    background: #EEEEEE;
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

</style>
