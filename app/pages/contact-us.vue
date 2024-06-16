<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'contact-us',
    // alias: 'contact-us',
    title: 'Contact Us',
    description: `Get in Touch: We're All Ears!`,
    navOrder: '11',
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="pb-12 text-center bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
  >
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
          <div class="px-6 py-12 rounded-lg tertiary-card">
            <h2 class="font-bold leading-tight mb-2 text-3xl">
              Subscribe To Our Newsletter
            </h2>
            <p class="mb-8">
              Sign up for our newsletter to receive updates and exclusive offers
            </p>
            <form
              class="mx-auto sm:w-9/12 xl:w-8/12"
              action="https://www.getdrip.com/forms/243852739/submissions"
              method="post"
              target="_blank"
              rel="noopener"
              data-drip-embedded-form="243852739"
            >
              <div class="flex items-center overflow-hidden p-2 rounded-full">
                <label for="emailfield" class="sr-only">Email address:</label>
                <input
                  id="emailfield"
                  class="border-0 flex-1 outline-none px-5 py-2 rounded-full w-full"
                  placeholder="email@example.com"
                  type="email"
                  required
                  name="fields[email]"
                />
                <UButton type="submit" class="ml-2" size="md" color="secondary">
                  Sign Up
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
