import './Column.css'

const Column = ({ 
  children, 
  gap = "12px", 
  align = "stretch", 
  justify = "flex-start", 
  width = "auto",
  height = "auto",
  padding = "16px",
  backgroundColor = "transparent",
  borderRadius = "8px",
  className = "",
  ...props 
}) => {
  return (
    <div 
      className={`column ${className}`}
      style={{
        gap,
        alignItems: align,
        justifyContent: justify,
        width,
        height,
        padding,
        backgroundColor,
        borderRadius
      }}
    >
      {children}
    </div>
  )
}

export default Column