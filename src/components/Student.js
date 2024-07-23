import React, { useState } from 'react'
import { Button, Input, ListGroupItem } from 'reactstrap'
import "./style.css"

export default function Student(props) {
    const { student, deleteById, reChecked, rename } = props
    const [isEdit,setIsEdit] = useState(false)
    const [text,setText] = useState(student.name)
    const handleDelete = () => {
        deleteById(student.id);
    }
    const handleReChecked = () => {
        reChecked(student.id);
    };
    return (
        <div>
            <ListGroupItem className='student-item'>
                <input
                    type="checkbox"
                    checked={student.checked}
                    onChange={handleReChecked}
                    className='student-checkbox'
                />
                <div className={student.checked ? "student-name active" : "student-name"} onClick={()=> reChecked(student.id)}>
                    {
                        !isEdit?<span onDoubleClick={()=>setIsEdit(true)}>{student.name}</span>:
                        <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e) =>{
                            if(e.key==="Enter"){
                                setIsEdit(false)
                                rename(student.id,text)
                            }
                        }}/>
                    }
                </div>
                <Button className='btn-danger' onClick={handleDelete}><i className='fa-solid fa-close'></i></Button>
            </ListGroupItem>
        </div>
    )
}
