export function classNames(...classes: any[string]) {
  return classes.filter(Boolean).join(' ')
}

// Helper function to capitalize the first letter of the matched group
export const upperFirst = (_: string, c: string | undefined): string => {
  return c ? c.toUpperCase() : ''
}

// Converts a kebab-case string to camelCase
export const camelCase = (str: string): string => {
  return str.replace(/-(\w)/g, upperFirst)
}

// Converts a camelCase or PascalCase string to kebab-case
export const kebabCase = (str: string): string => {
  return (
    str
      ?.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      ?.map((x) => x.toLowerCase())
      ?.join('-') ?? ''
  )
}

export const omit = (obj: object, keys: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  )
}
