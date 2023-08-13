<template>
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle
            class="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          />
          <path
            :stroke-dasharray="circleDasharray"
            :class="remainingPathColor"
            class="base-timer__path-remaining"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            ">
          </path>
        </g>
      </svg>
      <span class="base-timer__label">
        <PlaySvg
          @click="togglePlayPause"
          v-show="!isPlaying"
          size="80"
          color="white"
        />
        <PauseSvg
          @click="togglePlayPause"
          v-show="isPlaying"
          size="80"
          color="white"
        />
      </span>
    </div>
  </template>
  
  <script>
  import PlaySvg from '@/assets/svg/PlaySvg'
  import PauseSvg from '@/assets/svg/PauseSvg'
  import { mapGetters } from 'vuex'
  
  export default {
    components: {
      PlaySvg,
      PauseSvg
    },
    props: {
      timeLeft: {
        type: Number,
        required: true
      },
      timeSelected: {
        type: Number,
        required: true
      },
      alertThreshold: {
        type: Number,
        default: 5
       },
      warningThreshold: {
        type: Number,
        default: 10
      },
    },
    methods: {
      togglePlayPause() {
        this.$store.dispatch('togglePlayPause')
      }
    },
    computed: {
      ...mapGetters([
        'isPlaying',
      ]),
      circleDasharray() {
        return `${(this.timeFraction * 283).toFixed(0)} 283`;
      },
      timeFraction() {
        const rawTimeFraction = this.timeLeft / this.timeSelected
        return rawTimeFraction -
          (1 / this.timeSelected) * (1 - rawTimeFraction)
      },
      formattedTimeLeft() {
        const timeLeft = this.timeLeft
        let minutes = Math.floor(timeLeft / 60)
        const hours = Math.floor(minutes / 60)
        let seconds = timeLeft % 60
        if (seconds < 10) {
          seconds = `0${seconds}`
        }
        if (minutes === 60) {
          minutes = `00`
        }
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      },
      colorCodes() {
        return {
          info: {
            color: "green"
          },
          warning: {
            color: "orange",
            threshold: this.warningThreshold
          },
          alert: {
            color: "red",
            threshold: this.alertThreshold
          }
        }
      },
      remainingPathColor() {
         const { alert, warning, info } = this.colorCodes;
         if (this.timeLeft <= alert.threshold) {
           return alert.color;
         } else if (this.timeLeft <= warning.threshold) {
           return warning.color;
         } else {
           return info.color;
         }
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .base-timer {
    position: relative;
    width: 250px;
    height: 250px;
  
    &__path-remaining {
      stroke-width: 7px;
      stroke-linecap: round;
      transform: rotate(90deg);
      transform-origin: center;
      transition: 1s linear all;
      fill-rule: nonzero;
      stroke: currentColor;
      &.green {
        color: rgb(65, 184, 131);
      }
      &.orange {
        color: orange;
      }
      &.red {
        color: rgba(193, 99, 89, 1.000);
      }
    }
    &__svg {
      /* Flips the svg and makes the animation to move left-to-right
      transform: scaleX(-1); */
    }
    &__circle {
      fill: rgba(35, 35, 35, 0.500);
      stroke: rgba(35, 35, 35, 0.500);
    }
    &__path-elapsed {
      stroke-width: 7px;
      stroke: none;
    }
  
      &__label {
      position: absolute;    
      width: 250px;
      height: 250px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      color: white;
      cursor: pointer;
    }
  }
</style>
  