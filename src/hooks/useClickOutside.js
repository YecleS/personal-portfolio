import React, { useEffect } from 'react'

export default function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (e) => {
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, callback])
}
