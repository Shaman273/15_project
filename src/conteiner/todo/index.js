
import { convertLegacyProps } from 'antd/lib/button/button'
import {useState} from 'react'
import CheckboxItem from '../../CheckboxItem'

function Todo() {
    const [tasks, setTasks] = useState([
        {
            name: 'Do homework',
            done: false
        },
        {
            name: 'Clean house',
            done: false
        },
        {
            name: 'Cook meal',
            done: false
        }
    ])

    const handleChange = (e, item, index) =>{
    const temp = [...tasks]
    temp[index].done = !temp[index].done
    setTasks([...temp])

    }


    const [newTask,setnewTask] = useState('')
    const addnewItems = (e) => {
        setnewTask(e.target.value)
    }

    const changeaddnewItems = () => {
        setTasks([...tasks, {name:newTask, done:false}])
        clearValue()
    }

    const clearValue = () => {
        setnewTask('')
    }

console.log(tasks)
    const taskItems = tasks.map((item, i) => <CheckboxItem key={i} item={item.name} index={i} handleChange={handleChange}/>)

    return(
        <>
         <input value={newTask}  onChange={addnewItems}/>
        <button onClick={changeaddnewItems}>
            najimay
        </button>
        {taskItems}
        </>
    )
}

export default Todo