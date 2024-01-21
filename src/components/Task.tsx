import React, { useState } from 'react'
import style from './Task.module.css'
import { Trash } from "phosphor-react"

interface TaskProps {
    text: string;
    onDeleteTask: (taskToDelete: string) => void;
    onTaskComplete: (taskCompleted: any) => void;
    completed: boolean;
}

const Task = ({ text, onDeleteTask, onTaskComplete, completed }: TaskProps) => {

    function handleDeleteTask() {
        onDeleteTask(text)
    }

    return (
        <div className={`${style.taskContent} ${completed ? style.completedTask : ''}`}>
            <div className={style.infoTask}>
                <button onClick={onTaskComplete} className={style.completeTaskButton}></button>
                <p>{text}</p>
            </div>
            <button
                onClick={handleDeleteTask}
                className={style.deleteTask}>

                <Trash size={24} />
            </button>
        </div >
    )
}

export default Task