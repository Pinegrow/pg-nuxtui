<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default(/*rawProps*/) {
        return {
          url: '-',
          statusCode: 404,
          statusMessage: 'Not Found',
          message: '(404 Not Found)',
          stack: '',
          data: '{"error":"FetchError:  (404 Not Found)"}',
        }
      },
    },
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )
  const isDev = process.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }
</script>
<template>
  <NuxtLayout>
    <div
      class="flex flex-col gap-4 items-center justify-center my-12 text-center"
    >
      <div class="text-3xl">
        {{ is404 ? 'This page could not be found' : 'An error occurred' }}
      </div>
      <div class="text-xl opacity-50">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </div>
      <pre v-if="isDev">{{ error }}</pre>
      <UButton label="< Go Back" size="lg" @click="handleError"></UButton>
    </div>
  </NuxtLayout>
</template>
