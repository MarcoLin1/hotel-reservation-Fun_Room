<template>
  <div class="calendar__container" v-cloak>
    <div class="calendar__buttons__wrapper">
      <button @click="adjustMonth(-1)" class="calendar__button">&lt;</button>
      <div class="calendar__title">{{calendar.year}} / {{calendar.month + 1}}</div>
      <button @click="adjustMonth(1)" class="calendar__button">&gt;</button>
    </div>
    <div class="calendar__wrapper">
      <div class="calendar__week__day">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <!-- v-for number will loop from 1 -->
      <div class="calendar__week" v-for="i in 6" :key="i">
        <div class="calendar__day" v-for="j in 7" :key="j"
          :data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
          :data-month="calendarMonth[(i - 1) * 7 + j - 1].month"
          :class="{calendar__today: active}"
          @click="calendarActive(calendarMonth[(i - 1) * 7 + j - 1].month, calendarMonth[(i - 1) * 7 + j - 1].date)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      today: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      },
      calendar: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      },
      active: false
    }
  },
  mounted () {
    this.setToday()
  },
  methods: {
    setToday () {
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth() // 0~11
      this.today.date = this.calendar.date = date.getDate()
      this.today.day = this.calendar.day = date.getDay()
    },
    adjustYear (num) {
      this.calendar.year += num
    },
    adjustMonth (num) {
      // range, js month from 0~11
      const month = this.calendar.month += num

      if (month > 11) {
        this.adjustYear(1)
        this.calendar.month = 0
      } else if (month < 0) {
        this.adjustYear(-1)
        this.calendar.month = 11
      } else {
        this.calendar.month = month
      }
    },
    calendarActive (month, day) {
      const dates = document.querySelectorAll('.calendar__day')
      dates.forEach(item => {
        if (Number(item.dataset.month) < this.today.month) {
          return
        } else if (item.dataset.date < this.today.date && item.dataset.month <= this.today.month) {
          return
        }
        if (Number(item.dataset.date) === day && Number(item.dataset.month) === month) {
          item.classList.add('calendar__today')
        }
      })
    }
  },
  computed: {
    calendarFirstDay () {
      const monthFirstDate = new Date(this.calendar.year, this.calendar.month, 1)
      const date = new Date(this.calendar.year, this.calendar.month, 1 - monthFirstDate.getDay())
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay()
      }
    },
    calendarMonth () {
      const data = []
      let date
      for (let i = 0; i < 42; i++) {
        date = new Date(this.calendarFirstDay.year, this.calendarFirstDay.month, this.calendarFirstDay.date + i)
        data.push({
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate(),
          day: date.getDay()
        })
      }
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
  [v-cloak] {
    display: none;
  }
  .calendar {
    &__container {
      margin: 20px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
      padding: 15px;
    }
    &__buttons__wrapper {
      text-align: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    &__button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #000;
      color: #fff;
    }
    &__week__day, &__week {
      display: flex;
      text-align: center;
    }
    &__week__day > div {
      flex: 1 1 0%;
      line-height: 30px;
    }
    &__week > div {
      position: relative;
      flex: 1 1 0%;
      line-height: 30px;
    }
    &__week > div::before {
      content: attr(data-date);
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    &__today::before {
      color: #fff;
      background-color: #000;
      border-radius: 50%;
      display: inline-block;
      justify-content: center;
      align-items: center;
    }
    &__others {
      color: #BBBBBB;
    }
  }

@media screen and (min-width: 756px) {
  .calendar__container {
    display: none;
  }
}
</style>
