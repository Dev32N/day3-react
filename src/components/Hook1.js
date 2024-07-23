import { useState } from "react"

export default function Hook1 (){
    const [student,setStudent] = useState({name:"",age:0})
    return (
        <div className="hook1">
            <h1>Em tên là {student.name}, Em {student.age} tuổi</h1>
            <form>
                <input type="text" placeholder="Nhập tên" value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}></input> <br/>
                <input type="number" placeholder="Nhập tuổi" value={student.age} onChange={(e)=>setStudent({...student,age:e.target.value})}></input>
            </form>
        </div>
    )
}