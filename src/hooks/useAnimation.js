import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)

  const toggleAnimation = useCallback(() => {
    setIsPlaying(prev => {
      if (!prev) {
        setAnimationCount(count => count + 1)
      }
      return !prev
    })
  }, [])

  const startAnimation = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true)
      setAnimationCount(count => count + 1)
    }
  }, [isPlaying])

  const stopAnimation = useCallback(() => {
    setIsPlaying(false)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        setIsPlaying(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying, toggleAnimation])

  return {
    isPlaying,
    animationCount,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}