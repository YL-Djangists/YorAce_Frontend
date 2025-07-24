import { useEffect, useState } from "react"

export const useDebounce = (
  value: string,
  delay: number = 300
) => {
  const [ debouncedValude, setDebouncedValue ] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValude
}
