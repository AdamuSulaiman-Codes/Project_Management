import noProjectImage from "../assets/no-projects.png";


const NoProject = ({onCreateNewProject}) => {
    return (
        <div className="no-project-container">
            <img src={noProjectImage} alt="No project Image" className="no-project-image" />
            <p className="no-project-text">No Projects Selected</p>
            <button className="no-project-button" onClick={onCreateNewProject}>Create Project</button>
        </div>
    );
};

export default NoProject;
