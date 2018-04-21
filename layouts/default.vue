<template lang='pug'>
  div
    TheHeader(@sidenavToggle="displaySidenav = !displaySidenav")
    TheSidenav(:show="displaySidenav" @close="displaySidenav = false")
    nuxt
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  data() {
    return {
      displaySidenav: false
    }
  },
  components: {
    TheHeader,
    TheSidenav
  }
}
</script>


<style>
html {
  font-family: 'Gaegu', cursive;
}
body {
  margin: 0;
}
</style>
