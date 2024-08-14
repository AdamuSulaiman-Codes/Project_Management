import { useState } from "react";
import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

const App = () => {
  const [projectState, setProjectState] = useState({
    projects: [],
    current: undefined,
  });

  function handleCreateProject() {
    setProjectState(prevState => ({
      ...prevState,
      current: null
    }));
  }

  function handleDeleteProject() {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.filter(project => project.id !== prevState.current),
      current: undefined,  // Set current to undefined after deletion
    }));
  }

  function handleAddProject(enteredValues) {
    const newProject = {
      id: Date.now(),
      tasks: [], // Ensure tasks array is initialized
      ...enteredValues
    };
    setProjectState(prevState => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      current: undefined
    }));
  }

  function handleCancel() {
    setProjectState(prevState => ({
      ...prevState,
      current: undefined
    }));
  }

  function handleProjectSelection(id) {
    setProjectState(prevState => ({
      ...prevState,
      current: id
    }));
  }

  function handleAddTaskToProject(task) {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project =>
        project.id === prevState.current
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      ),
    }));
  }

  function handleDeleteTaskFromProject(taskIndex) {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project =>
        project.id === prevState.current
          ? {
              ...project,
              tasks: project.tasks.filter((_, index) => index !== taskIndex),
            }
          : project
      ),
    }));
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.current);

  let content = (
    <SelectedProject 
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTaskToProject}
      onDeleteTask={handleDeleteTaskFromProject}
    />
  );

  if (projectState.current === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.current === undefined) {
    content = <NoProject onCreateNewProject={handleCreateProject} />;
  }

  return (
    <>
      <div className="page">
        <SideBar 
          onCreateNewProject={handleCreateProject} 
          projects={projectState.projects}
          onSelect={handleProjectSelection} 
        />
        {content}
      </div>
    </>
  );
};

export default App;
