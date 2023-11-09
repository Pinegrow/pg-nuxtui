<script setup lang="ts">
  const { isMobileMenuOpen } = useMobileMenu()
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
        <NavHamburger @click="isMobileMenuOpen = true"></NavHamburger>
      </div>
      <div
        data-pg-name="NavBarPrimary"
        style="grid-area: primary-nav"
        class="hidden sm:flex"
      >
        <NavPrimary class="sm:w-full" />
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
        <NavSecondary />
      </div>
    </div>
    <USlideover
      v-model="isMobileMenuOpen"
      data-pg-name="NavBarSecondary"
      style="grid-area: primary-nav"
      class="w-80 sm:hidden"
      side="left"
    >
      <NavPrimary class="m-4" />
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
