<template>
    <div 
      v-if="step === 3"
      class="container-end"
    >
      <PraySvg :size="'60'" :color="'white'"/>
      <h2>Your Meditation Is Over !</h2>
      <span>Made With Love<br> ❤️ By Sith Norvang ❤️</span>
      <div class="container-network">
        <a
          class="icon-network"
          href="https://github.com/slaoprp"
          target="_blank"
        >
          <GithubSvg :size="'80'" :color="'white'" />
          <span>Github</span>
        </a>
        <a
          class="icon-network"
          href="https://www.linkedin.com/in/sith-norvang-3a72501a5"
          target="_blank"
        >
          <LinkedInSvg  :size="'80'" :color="'white'"  />
          <span>LinkedIn</span>
        </a>
        <a 
          class="icon-network"
          href="https://www.eliyote.com"
          target="_blank"
        >
          <span>Portfolio</span>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import PraySvg from '@/assets/svg/PraySvg'
  import GithubSvg from '@/assets/svg/GithubSvg'
  import LinkedInSvg from '@/assets/svg/LinkedInSvg'
  
  export default {
    components: {
      PraySvg,
      GithubSvg, 
      LinkedInSvg
    },
    methods: {
      linkTo() {
        this.$router.push('www.eliyote.com')
      }
    },
    computed: {
      ...mapGetters([
        'step',
      ]),
    }
  }
  </script>
  
  <style scoped>
  .container-end {
    color: white;
    width: auto;
    height: auto;
    padding: 50px;
    background-color: rgba(5, 5, 5, 0.900);
    border-radius: 15px;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.200);
  }
  
  .container-network {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
  }
  
  .icon-network {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
</style>