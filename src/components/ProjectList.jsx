import { useRef } from "react";

const ProjectList = ({ tasks, onAddTask, onDeleteTask }) => {
    const taskRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        const task = taskRef.current.value.trim();
        if (task) {
            onAddTask(task);
            taskRef.current.value = ""; // Clear the input field after adding the task
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Tasks</label>
                <input type="text" id="task" ref={taskRef} />
                <button type="submit">Add Task</button>
            </form>
            <div className="results">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <div key={index} className="result-container">
                            <p>{task}</p>
                            <button onClick={() => onDeleteTask(index)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </>
    );
}

export default ProjectList;
