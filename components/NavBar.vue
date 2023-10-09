<script setup lang="ts">
  const { isMobileMenuOpen, isSecondaryMenuOpen } = useMobileMenu()
  const { navlinksPrimary, navlinksSecondary, currentPath } = useNav()

  // { container: '!-ml-2 sm:ml-auto', width: 'w-full sm:w-48', item: { disabled: 'cursor-text select-text' } }

  const dropdownItems = [
    [
      {
        slot: 'account',
        disabled: true,
      },
      ...navlinksSecondary.value.map((navlink) => ({
        slot: navlink.link.replace(/^\//, '').replaceAll('/', '-'),
        label: navlink.text,
        icon: navlink.icon,
        to: navlink.link,
        activeClass: 'text-primary',
      })),
    ],
  ]
</script>
<template>
  <nav class="container mx-auto px-4">
    <div class="flex h-full items-center justify-between navbar-grid py-4">
      <div style="grid-area: logo" class="flex justify-center">
        <TheLogo />
      </div>
      <div
        data-pg-name="Hamburger"
        style="grid-area: hamburger"
        class="sm:hidden"
      >
        <TheHamburger @click="isMobileMenuOpen = true"></TheHamburger>
      </div>
      <div
        data-pg-name="PrimaryDesktopNav"
        style="grid-area: primary-nav"
        class="hidden sm:flex"
      >
        <PrimaryNav class="sm:w-full" />
      </div>
      <div data-pg-name="Searchbox" style="grid-area: search">
        <UFormGroup hint="Optional">
          <UInput
            placeholder="Search..."
            size="md"
            trailing-icon="i-material-symbols-search-rounded"
            class="w-full"
          />
        </UFormGroup>
      </div>
      <div data-pg-name="Profile" class="flex space-x-1">
        <ProfileActions class="!hidden sm:!flex" />
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
              <UButton class="font-bold my-4 sm:my-2"
                >Sign In / Join Us</UButton
              >
            </div>
          </template>
        </UDropdown>
      </div>
    </div>
    <USlideover
      v-model="isMobileMenuOpen"
      data-pg-name="PrimaryMobileNav"
      style="grid-area: primary-nav"
      class="w-80 sm:hidden"
      side="left"
    >
      <PrimaryNav class="m-4" />
    </USlideover>
  </nav>
</template>
<style scoped>
  .navbar-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'hamburger logo profile' 'search search search';
    gap: 20px;
  }
  @media (min-width: 640px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'logo search profile' 'primary-nav primary-nav primary-nav';
      gap: 20px;
    }
  }
  @media (min-width: 1280px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: 'logo primary-nav search profile';
    }
  }
</style>
