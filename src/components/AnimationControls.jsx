import { useAnimation } from '../hooks/useAnimation'

const AnimationControls = ({ onAnimationChange }) => {
  const { isPlaying, animationCount, toggleAnimation } = useAnimation()

  const handleToggle = () => {
    toggleAnimation()
    onAnimationChange?.(isPlaying)
  }

  return (
    <div className="animation-controls">
      <div className="control-panel">
        <button
          className={`dance-button ${isPlaying ? 'playing' : ''}`}
          onClick={handleToggle}
          aria-label={isPlaying ? 'Stop dancing' : 'Start dancing'}
        >
          {isPlaying ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
        </button>

        <div className="stats">
          <span className="dance-count">
            Dances: {animationCount}
          </span>
        </div>
      </div>

      <div className="keyboard-hint">
        <p>💡 Press <kbd>Space</kbd> to toggle dancing</p>
      </div>
    </div>
  )
}

export default AnimationControls