const { isMobileMenuOpen } = useMobileMenu()

export default defineNuxtPlugin((nuxtApp) => {
  addRouteMiddleware((to, from) => {
    isMobileMenuOpen.value = false
  })
})
