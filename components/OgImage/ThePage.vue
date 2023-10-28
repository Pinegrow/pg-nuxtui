<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    fromBg: {
      type: String,
      default: '#8B5CF6',
    },
    toBg: {
      type: String,
      default: '#D946EF',
    },
    image: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: 'i-vscode-icons:file-type-coffeelint',
    },
    author: {
      type: String,
      default: 'Pinegrow',
    },
    twitter: {
      type: String,
      default: '@vuedesigner',
    },
  })

  const backgroundImage = computed(() => {
    return {
      'background-image': `linear-gradient(
        to right,
        ${props.fromBg},
        ${props.toBg}
      );`,
    }
  })
</script>
<template>
  <div class="rounded-3xl w-full" :style="backgroundImage">
    <div class="flex flex-row h-full pl-6 py-6 w-full">
      <div class="flex flex-col w-1/2">
        <div data-pg-name="Logo" class="flex flex-row items-center">
          <Icon :name="logo" size="72" class="mt-4" />
          <span class="text-white font-extrabold ml-2 mt-4 p-4 text-6xl">
            {{ title }}
          </span>
        </div>
        <!-- <h1 class="p-4 text-6xl text-white">{{ title }}</h1> -->
        <h5 class="mt-8 p-4 text-white text-4xl" style="white-space: normal">
          <span>{{ description }}</span>
        </h5>
        <h5
          v-if="summary"
          class="mt-2 p-4 text-white text-2xl"
          style="white-space: normal"
        >
          {{ summary }}
        </h5>
        <div v-if="twitter" class="flex flex-row items-center mt-auto">
          <Icon name="logos:twitter" size="32" />
          <span class="ml-3 text-2xl text-white">{{ twitter }}</span>
        </div>
      </div>
      <div class="-my-6 w-1/2">
        <img
          cover
          :src="image"
          height="630"
          width="630"
          class="h-full rounded-r-3xl w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
