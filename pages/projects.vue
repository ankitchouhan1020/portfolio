<template>
  <div>
    <section>
      <div class="container px-5 py-24">
        <h1>PROJECTS</h1>
        <div class="my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-300"
                >WEB APP</span
              >
              <span class="mt-1 text-gray-500 text-sm">Dec 2018</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-200 title-font mb-2">
                Conduit : Publishing Platform
              </h2>
              <ul class="features">
                <li>
                  ️Used Vue JS Framework to implement Medium like web
                  application.
                </li>
                <li>
                  Implemented article feed, like, follow, user profile and edit
                  article features.
                </li>
                <li>
                  Implemented fetch article by tags and based on following users
                  features.
                </li>
              </ul>
              <a
                href="https://github.com/ankitchouhan1020/medium-clone"
                target="_blank"
                class="text-sandy-brown inline-flex items-center mt-4"
                >Github Repo
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-300"
                >DEEP LEARNING</span
              >
              <span class="mt-1 text-gray-500 text-sm">May 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-200 title-font mb-2">
                Medical Image Augmentation using GAN.
              </h2>
              <ul class="features">
                <li>
                  ️Used MoNuSeg Dataset which provides tissue images with
                  annotated nuclei bounds.
                </li>
                <li>
                  Used pix2pix, a conditional GAN to learn mapping from input
                  image to output image.
                </li>
                <li>
                  Implemented U-Net for effective biomedical image segmentation
                  tasks.
                </li>
              </ul>
            </div>
          </div>
          x
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-family: "Saira Extra Condensed", sans-serif;
  @apply text-5xl text-sandy-brown;
}

h2 {
  font-family: "Ubuntu Condensed", sans-serif;
  @apply text-4xl text-justify text-gray-200;
}

.features li {
  @apply text-gray-500 list-disc;
}
</style>
