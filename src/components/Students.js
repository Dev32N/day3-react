import React, { useState } from 'react';
import { Container, ListGroup } from 'reactstrap';
import Student from './Student';
import Add from './Add';
import Footer from './Footer';
import "./style.css";

export default function Students() {
    const [flag, setFlag] = useState("");
    const [checkAll,setCheckAll] =useState(false)
    const [list, setList] = useState([
        { id: 1, name: "Lê Mèo", checked: true },
        { id: 2, name: "Lê Nai", checked: true },
        { id: 3, name: "Lê Thỏ", checked: false },
        { id: 4, name: 'Lê Gà', checked: true },
    ]);

    const deleteById = (id) => {
        setList(list.filter(stud => stud.id !== id));
    };

    const reChecked = (id) => {
        let newList = list.map(stud => stud.id === id ? { ...stud, checked: !stud.checked } : stud);
        setList(newList);
    };

    const addStudent = (name) => {
        const newStudent = {
            id: list.length ? Math.max(...list.map(stud => stud.id)) + 1 : 1,
            name,
            checked: false,
        };
        setList([...list, newStudent]);
    };

    const filterStudents = (list, flag) => {
        if (flag === "CHECK") {
            return list.filter(stud => stud.checked);
        } else if (flag === "NOCHECK") {
            return list.filter(stud => !stud.checked);
        } else if(flag==="CHECKALL"){
            setList(list.map(student=>({...student,checked:!checkAll})))
            setCheckAll(!checkAll)
            setFlag("")
        }
        return list;
    }
    const rename =(id, name)=>{
        let newList = list.map(stud=>stud.id===id?{...stud,name:name}:stud)
        setList(newList)
    }
    const deleteAllChecked = () => {
        setList(list.filter(stud => !stud.checked));
    };
    return (
        <div className='app-container'>
            <Container className='content-container w-50 p-5 my-5'>
                <h1 className='title'>Student List</h1>
                <Add addStudent={addStudent} />
                <ListGroup>
                    {
                        filterStudents(list, flag).map((stud, index) => (
                            <Student
                                key={index}
                                student={stud}
                                deleteById={deleteById}
                                reChecked={reChecked}
                                rename={rename}
                            />
                        ))
                    }
                </ListGroup>
                <Footer setFlag={setFlag} deleteAllChecked={deleteAllChecked} checkAll={checkAll} setCheckAll={setCheckAll}/>
            </Container>
        </div>
    );
}
