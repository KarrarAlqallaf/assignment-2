import './Circle.css'

const Circle = ({ imageSrc, alt = "Profile picture", size = 150, className = "" }) => {
  return (
    <div 
      className={`circle-container ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src={imageSrc} 
        alt={alt}
        className="circle-image"
      />
    </div>
  )
}

export default Circle
