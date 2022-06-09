import { useCallback, useState } from 'react'

export function useSetFavourite() {
  const [isFavourite, setIsFavourite] = useState(false)

  const toggleFavourite = useCallback(() => {
    setIsFavourite(!isFavourite)
  }, [isFavourite])

  return {
    isFavourite,
    toggleFavourite,
  }
}
