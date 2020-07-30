<template>
  <div>
    <h1>EDUCATION</h1>
    <div class="container px-5 py-24 flex flex-wrap">
      <div class="flex flex-wrap w-full">
        <div class="lg:w-4/5 md:w-1/2 md:pr-10 md:py-6">
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-sandy-brown inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2>
                Maulana Azad National Institute of Technology Bhopal
              </h2>
              <div class="flex flex-row justify-between">
                <div class="text-gray-500 text-2xl">BACHELOR OF TECHNOLOGY</div>
                <div class="text-gray-500 text-xl">2016 - 2020</div>
              </div>
              <div class="flex flex-row justify-between">
                <div class="text-gray-600 text-md">
                  Computer Science and Engineering
                </div>
                <div class="text-gray-600 text-md">8.0 GGPA</div>
              </div>
            </div>
          </div>

          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-sandy-brown inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2>
                Govt. Higher Secondary School Rehti
              </h2>
              <div class="flex flex-row justify-between">
                <div class="text-gray-600 text-md">XII - 97.2%</div>
                <div class="text-gray-600 text-md">2014 - 2015</div>
              </div>
            </div>
          </div>

          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-sandy-brown inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2>
                New Model Higher Secondary School Rehti
              </h2>
              <div class="flex flex-row justify-between">
                <div class="text-gray-600 text-md">X - 91.3%</div>
                <div class="text-gray-600 text-md">2012 - 2013</div>
              </div>
            </div>
          </div>
        </div>
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
  @apply text-4xl text-justify text-gray-200;
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
