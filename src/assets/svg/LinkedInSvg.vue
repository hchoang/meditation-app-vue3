<template>
  <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 96H127.9C110.3 96 96 110.5 96 128.3V511.7C96 529.5 110.3 544 127.9 544H512C529.6 544 544 529.5 544 511.7V128.3C544 110.5 529.6 96 512 96ZM231.4 480H165V266.2H231.5V480H231.4ZM198.2 237C176.9 237 159.7 219.7 159.7 198.5C159.7 177.3 176.9 160 198.2 160C219.4 160 236.7 177.3 236.7 198.5C236.7 219.8 219.5 237 198.2 237V237ZM480.3 480H413.9V376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2V480H273.1V266.2H336.8V295.4H337.7C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8V480V480Z" :fill="defaultColor"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    }
  },
  computed: {
    defaultWidth() {
      return this.size
    },
    defaultHeight() {
      return this.size
    },
    defaultColor() {
      return this.color
    }
  }
}
</script>