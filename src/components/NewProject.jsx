import { useRef } from "react";
import Input from "./Input";


const NewProject = ({onAddProject, onCancel}) => {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()

    
    function handleClick(){
        
        const values = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
        }
        onAddProject(values);

        titleRef.current.value = ""
        descriptionRef.current.value = ""
        dueDateRef.current.value = ""
    }
    return (
        <div className="new-project-container">
            <Input name="Title" ref={titleRef}/>
            <Input name="Description" textarea ref={descriptionRef}/>
            <Input name="Due Date" type="date" ref={dueDateRef}/>
            <div className="btns">
                <button className="create-project-button" onClick={handleClick}>Create Project</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default NewProject;
