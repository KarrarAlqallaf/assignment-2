import './Row.css'

const Row = ({ 
  children, 
  gap = "88px", 
  align = "center", 
  justify = "center", 
  wrap = false,
  padding = "16px",
  backgroundColor = "transparent",
  className = ""
}) => {
  return (
    <div 
      className={`row ${className}`}
      style={{
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        padding,
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}

export default Row
