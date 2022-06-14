import { useState, useCallback } from 'react';
// move the logic of the hook here

export function useSetFavourite() {
    // store the state of the favourite choice
    const [isFavourite, setIsFavourite] = useState(false)

    // create a toggle function to change the state
    const toggleFavourite = useCallback(() => {
        setIsFavourite(!isFavourite)
    }, [isFavourite])

    return {
        isFavourite,
        toggleFavourite
    }
}