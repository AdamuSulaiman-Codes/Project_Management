const SideBar = ({onCreateNewProject, projects, onSelect}) => {
    return ( 
        <>
            <div className="side-bar">
                <h1>YOUR PROJECTS</h1>
                <button onClick={onCreateNewProject}>+ Add Projects</button>
                <ul className="projects">
                    {projects.map((project) =>{
                        return(
                            <button onClick={()=>onSelect(project.id)}  key={project.id}>
                                <li key={project.id}>{project.title}</li>
                            </button>
                        )
                    })}
                </ul>
            </div>
        </>
     );
}
 
export default SideBar;