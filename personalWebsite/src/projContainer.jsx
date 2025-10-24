import './projContainer.css'

const ProjectContainer = ({
    title,
    imageSrc,
    imageAlt = "Project image",
    align = "center", 
    justify = "flex-start", 
    wrap = false,
    className = "",
    url = null,
    onClick = null
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (url) {
            window.open(url, '_blank');
        }
    }

    return (
        <div 
            className={`project-container ${className} ${url || onClick ? 'clickable' : ''}`}
            style={{
                alignItems: align,
                justifyContent: justify,
                flexWrap: wrap ? "wrap" : "nowrap",
            }}
            onClick={handleClick}
        >
            {title && <h3 className="project-title">{title}</h3>}
            {imageSrc && <img src={imageSrc} alt={imageAlt} className="project-image" />}
        </div>
    )
}

export default ProjectContainer