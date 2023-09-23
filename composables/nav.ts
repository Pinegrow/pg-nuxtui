import { computed } from 'vue'
import site from '@/site'

export const useNav = () => {
  const routes = useRouter().getRoutes()

  const navlinksFromRouter = routes
    // Filter out routes starting with upper-case, for eg, NotFoundInDev
    .filter(
      (route) => route.name && route.name[0] !== route.name[0].toUpperCase(),
    )
    // Remove dynamic routes
    .filter((route) => !route.path.includes(':'))
    // Include only ones that has a title (which are defined via definePageMeta in pages)
    .filter((route) => route.meta.title)
    .filter((route) => route.path !== '/try-now')
    .sort((a, b) => (a.meta.navOrder > b.meta.navOrder ? 1 : -1))
    .map((route) => {
      return {
        text: route.meta.title,
        link: route.path,
      }
    })

  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig || navlinksFromRouter)

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === '/'
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
