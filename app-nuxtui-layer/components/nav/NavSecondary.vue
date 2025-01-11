<script setup lang="ts">
  const { navsSecondary } = useNavMenu()

  const dropdownItems = [
    [
      {
        slot: 'account',
        disabled: true,
      },
      ...navsSecondary.map((nav) => ({
        slot: nav.to.replace(/^\//, '').replaceAll('/', '-'),
        label: nav.title,
        icon: nav.icon,
        to: nav.to,
        activeClass: 'text-primary',
      })),
    ],
  ]
</script>
<template>
  <UDropdown
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      container: '!-ml-2 sm:ml-auto',
      rounded: '',
      width: 'w-full sm:w-48',
      item: { disabled: 'cursor-text select-text opacity-100' },
    }"
    :items="dropdownItems"
  >
    <UAvatar
      src="https://avatars.githubusercontent.com/u/73772701?v=4"
      alt="Avatar"
      size="lg"
      class="sm:ml-2"
    />
    <template #account>
      <div class="my-1 space-x-1 w-full">
        <ProfileActions class="sm:!hidden" />
        <UButton class="font-bold my-4 sm:my-2">Sign In / Join Us</UButton>
      </div>
    </template>
  </UDropdown>
</template>
<style scoped></style>
