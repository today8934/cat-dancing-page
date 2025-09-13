import { useAnimation } from '../hooks/useAnimation'
import AnimationControls from './AnimationControls'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = () => {
  const { isPlaying, toggleAnimation } = useAnimation()

  const handleCatClick = () => {
    toggleAnimation()
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isPlaying ? 'dancing' : ''}`}
        onClick={handleCatClick}
        role="button"
        tabIndex={0}
        aria-label="Click to make the cat dance"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCatClick()
          }
        }}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <AnimationControls />

      <div className="instructions">
        <p>Click the cat to make it dance! 🎵</p>
      </div>
    </div>
  )
}

export default DancingCat