import React, { ChangeEvent, useState } from 'react'
import style from './ListTask.module.css'
import Task from './Task'
import notepad from '../assets/notepad.svg'

interface TaskProps {
    text: string;
    onDeleteTask: (taskToDelete: string) => void;
    onTaskComplete: (taskCompleted: any) => void;
    completed: boolean;
}


const ListTasks = () => {

    const [listTasks, setListTasks] = useState<{ text: string; completed: boolean }[]>([])

    const [task, setTask] = useState<string>('')

    const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);

    function onSaveText(event: ChangeEvent<HTMLTextAreaElement>) {
        const currentTask = event.currentTarget.value
        setTask(currentTask)
    }

    function handleSendTask() {
        setListTasks([...listTasks, { text: task, completed: false }]);
        setTask("")
    }

    function toogleTaskCompletion(index: number) {
        const updatedTasks = [...listTasks];
        updatedTasks[index].completed = !updatedTasks[index].completed
        setListTasks(updatedTasks)
        updateCompletedTasksCount(updatedTasks);
    }

    function updateCompletedTasksCount(tasks: { text: string; completed: boolean }[]) {
        const count = tasks.filter(task => task.completed).length;
        setCompletedTasksCount(count);
    }

    function deleteTask(index: number) {
        const updatedTasks = [...listTasks];
        updatedTasks.splice(index, 1);
        setListTasks(updatedTasks);
    }

    return (
        <div>
            <div className={style.fieldArea}>
                <textarea
                    onChange={onSaveText}
                    className={style.taskField}
                    placeholder='Adicione uma tarefa' />

                <button
                    onClick={handleSendTask}
                    className={style.addTaskButton}>Criar +
                </button>
            </div>

            <header className={style.headerList}>
                <h5>Tarefas criadas <span className={style.tasksCreated}>{listTasks.length}</span></h5>
                {listTasks.length <= 0 ? <p>Concluídas <span>{listTasks.length}</span></p> :
                    <p>Concluídas <span>{completedTasksCount} de {listTasks.length}</span></p>}
            </header>

            <div className={style.listTaskContent}>
                {listTasks.map((actualTask, index) => (
                    <Task
                        onDeleteTask={() => deleteTask(index)}
                        key={actualTask.text}
                        text={actualTask.text}
                        onTaskComplete={() => toogleTaskCompletion(index)}
                        completed={actualTask.completed}
                    />
                ))}

            </div>

            {listTasks.length <= 0 && (
                <section className={style.noTasksSection}>
                    <img src={notepad} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p> Crie tarefas e organize seus itens a fazer</p>
                </section>
            )}

        </div>


    )
}

export default ListTasks