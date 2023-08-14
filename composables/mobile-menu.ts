import { ref } from 'vue'
const isMobileMenuOpen = ref(false)

const openMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

export const useMobileMenu = () => {
  return {
    isMobileMenuOpen,
    openMobileMenu,
  }
}
