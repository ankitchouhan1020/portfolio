<template>
  <div>
    <h1><span>ANKIT</span>CHOUHAN</h1>
    <h2>
      👋 I'm a Computer Science student, Programmer and a Web Developer. In my
      free time I try my best to be a mediocre badminton player.
    </h2>
    <div class="social-icons">
      <a target="__blank" href="https://github.com/ankitchouhan1020"
        ><fa style="font-size: 30px" :icon="['fab', 'github']"
      /></a>
      <a target="__blank" href="https://linkedin.com/in/ankitchouhan1020"
        ><fa style="font-size: 30px" :icon="['fab', 'linkedin-in']"
      /></a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap");

h1 {
  font-family: "Saira Extra Condensed", sans-serif;
  @apply text-6xl text-sandy-brown;
}

h1 span {
  @apply text-gray-200;
}

h2 {
  font-family: "Ubuntu Condensed", sans-serif;
  @apply text-xl text-justify text-gray-200;
}

.social-icons {
  @apply mt-5;
}

.social-icons a {
  @apply p-3 mr-5 rounded-full bg-gray-200 inline-block text-charcoal;
}

.social-icons a:hover {
  @apply bg-burnt-sienna text-gray-100;
}
</style>
