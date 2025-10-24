import './projContainer.css'

const ProjectContainer = ({
    title,
    imageSrc,
    imageAlt = "Project image",
    align = "center", 
    justify = "flex-start", 
    wrap = false,
    className = ""
}) => {
    return (
        <div 
            className={`project-container ${className}`}
            style={{
                alignItems: align,
                justifyContent: justify,
                flexWrap: wrap ? "wrap" : "nowrap",
            }}
        >
            {title && <h3 className="project-title">{title}</h3>}
            {imageSrc && <img src={imageSrc} alt={imageAlt} className="project-image" />}
        </div>
    )
}

export default ProjectContainer