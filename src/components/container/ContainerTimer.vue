<template>
    <section
      v-if="step === 2"
      class="container"
    >
      <TimerHeader />
      <TimerView
        :timeLeft="timeLeft"
        :timeSelected="timeSelected.value"
      />
      <TimerRemaining
        :timeLeft="timeLeft"
      />
      <VibeSwitcher />
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import TimerView from '@/components/TimerView.vue'
  import TimerRemaining from '@/components/TimerRemaining'
  import TimerHeader from '@/components/TimerHeader'
  import VibeSwitcher from '@/components/VibeSwitcher'
  
  export default {
    components: {
      TimerView,
      TimerRemaining,
      TimerHeader,
      VibeSwitcher
    },
    data() {
      return {
        timeLimit: 0,
        timePassed: 0,
        timerInterval : 0,
      };
    },
    computed: {
      ...mapGetters([
        'timeSelected',
        'vibeSelected',
        'step',
        'isPlaying'
      ]),
      timeLeft() { 
        if (this.timerInterval === null) {
          return 0
        } else if (this.timePassed === this.timeSelected.value) {
          clearInterval(this.timerInterval)
          this.$store.dispatch('changeVibe', { value: 'bird' })
          this.$store.dispatch('changeStep')
          console.log('step : ', this.step)
          return 0
        } else {
          return this.timeSelected.value - this.timePassed
        }
      },
    },
    watch: {
      isPlaying(isInProgress) {
        if (isInProgress) {
          this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        } else {
          clearInterval(this.timerInterval)
        }
      }
    },
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 400px;
    background-color: rgba(5, 5, 5, 0.700);
    border-radius: 15px;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.500);
  }
  
  h1, .container {
    color: white;
    font-size: 25px;
  }
</style>