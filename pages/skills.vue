<template>
  <div>
    <h1>SKILLS</h1>
    <div class="mt-5">
      <h2>
        🎯 PROGRAMMING LANGUAGES
      </h2>
      <ul class="list-inline-item">
        <li><fa :icon="['fab', 'html5']" /></li>
        <li><fa :icon="['fab', 'js-square']" /></li>
        <li><fa :icon="['fab', 'css3']" /></li>
      </ul>
    </div>
    <div class="mt-5">
      <h2>
        🎨 LIBRARIES AND FRAMEWORKS
      </h2>
      <div class="langs">
        VueJs, Flutter, NodeJs(Express)
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap");

h1 {
  font-family: "Saira Extra Condensed", sans-serif;
  @apply text-5xl text-sandy-brown;
}

h2 {
  font-family: "Ubuntu Condensed", sans-serif;
  @apply text-xl text-justify text-gray-200;
}

.list-inline-item {
  @apply pl-5;
}

.list-inline-item > li {
  @apply inline-block mr-3 text-gray-500 text-3xl;
}

.langs {
  @apply pl-5 text-gray-500;
}
</style>
