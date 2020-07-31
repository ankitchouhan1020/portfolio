<template>
  <div class="container">
    <div class="side-bar">
      <ul>
        <li><img alt="team" src="../static/profile.jpeg" /></li>
        <li><NuxtLink to="/">HOME</NuxtLink></li>
        <li><NuxtLink to="/skills">SKILLS</NuxtLink></li>
        <li><NuxtLink to="/projects">PROJECTS</NuxtLink></li>
        <li><NuxtLink to="/education">EDUCATION</NuxtLink></li>
      </ul>
    </div>
    <div class="contents"><nuxt /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply h-screen min-w-full flex;
}

.side-bar {
  @apply w-1/5 min-h-screen flex items-center justify-center text-center bg-burnt-sienna overflow-hidden;
}

.side-bar > ul > li {
  @apply pb-3 text-gray-400 font-semibold text-xl;
}

li:first-child {
  @apply mb-5;
}

.contents {
  margin-right: -20%;
  @apply overflow-y-scroll w-4/5 min-h-screen flex flex-col justify-center pl-10
    pr-10 bg-charcoal;
}

img {
  @apply w-48 h-48 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border-4 border-gray-300;
}

.nuxt-link-exact-active {
  @apply text-gray-100;
}

a:hover {
  @apply text-gray-100;
}
</style>
