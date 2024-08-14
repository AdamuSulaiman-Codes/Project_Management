import ProjectList from "./ProjectList";
const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask }) => {
    if (!project) {
        return <p>No project selected.</p>;
    }

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <>
            <div>
                <button onClick={onDelete}>Delete</button>
                <h2>{project.title}</h2>
                <p>{formattedDate}</p>
                <p>{project.description}</p>
            </div>
            <div>
                <h1>Tasks</h1>
                <ProjectList 
                tasks={project.tasks} 
                onAddTask={onAddTask} 
                onDeleteTask={onDeleteTask}/>
            </div>
        </>
    );
}

export default SelectedProject;
