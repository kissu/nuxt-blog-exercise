<template lang='pug'>
  .error-page
    h1 Oops, something went wrong!
    p Back to
      a(href="/")  safety !
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
