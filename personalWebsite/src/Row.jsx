import './Row.css'

const Row = ({ 
  children, 
  gap = "88px", 
  align = "center", 
  justify = "center", 
  wrap = false,
  padding = "50px 0",
  backgroundColor = "transparent",
  className = "",
  ...props 
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
      {...props}
    >
      {children}
    </div>
  )
}

export default Row
