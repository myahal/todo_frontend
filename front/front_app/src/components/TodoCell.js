import React, {useState}  from 'react'

const TodoCell =  (props) => {
    const item = props.item
    const [editStatus, setEditStatus] = useState(false)

    const checkboxHandler = (e) => {
        setEditStatus(e.target.checked)
        props.handler(item.id, e.target.checked)
    }

    
    
    return(
        <tr key={props.index}>
            <td><input type="checkbox" id={props.index} onChange={checkboxHandler} checked={editStatus.edit_status}/></td>
            <td>{item.name}</td>
            <td>{item.contents}</td>
            <td>{item.deadline}</td>
            <td>{item.priority}</td>
            <td>{item.state}</td>
        </tr>
    )
}

export default TodoCell

