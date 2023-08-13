<template>
    <div v-if="step < 2" class="overlay">
      <div class="popup">
        <PraySvg
          size="80"
          color="white"
        />
        <h1>Welcome to<br> Vibe Meditation App</h1>
        <ContainerSelector
          :question="questionDisplaying"
        >
          <SelectorView
            v-if="step === 0"
            :size="'normal'"
            :mode="'timer'"
          />
          <SelectorView 
             v-if="step > 0"
            :size="'normal'"
            :mode="'vibe'"
          />
        </ContainerSelector>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  import PraySvg from '@/assets/svg/PraySvg'
  import ContainerSelector from '@/components/container/ContainerSelector'
  import SelectorView from '@/components/SelectorView'
  
  export default {
    components: {
      PraySvg,
      ContainerSelector,
      SelectorView
    },
    computed: {
      questionDisplaying() {
        if (this.step === 0) {
          return 'How long do you want to meditate ?' 
        } else {
          return 'Where do you want to meditate ?'
        }
      },
      ...mapGetters([
        'timeSelected',
        'vibeSelected',
        'step'
      ])
    }
  }
  </script>
  
  <style scoped>
  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  
  .popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 600px;
    height: 600px;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    background-color: rgba(5, 5, 5, 0.900);
    border-radius: 15px;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.200);
    color: white;
  }
  
  .bouton-primary {
    width: 200px;
    line-height: 30px;
    border-radius: 5px;
    margin: 30px;
    background-color: rgba(193, 99, 89, 0.800);
    border: rgba(193, 99, 89, 0.800);
    color: aliceblue;
  }
  
  .bouton-off {
    width: 200px;
    line-height: 30px;
    border-radius: 5px;
    margin: 30px;
    background-color: rgba(35, 35, 35, 0.500);
    border: white;
    color: aliceblue;
  }
  </style>