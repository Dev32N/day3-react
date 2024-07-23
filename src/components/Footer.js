import React from 'react';
import { Button, Input } from 'reactstrap';
import "./style.css"

export default function Footer(props) {
    const { setFlag, deleteAllChecked, checkAll } = props;
    return (
        <div className='footer-container'>
            <div className='check-all'>
              <label>Check All</label>
              <Input className='bg-info' type='checkbox' checked = {checkAll} onChange={()=>setFlag("CHECKALL")}/>
            </div>
            <Button className='btn-success mx-1' onClick={() => setFlag("CHECK")}>Filter Check</Button>
            <Button className='btn-success mx-1' onClick={() => setFlag("NOCHECK")}>Filter no Check</Button>
            <Button className='btn-success mx-1' onClick={() => setFlag("")}>Filter Clear</Button>
            <Button className='btn-danger mx-1' onClick={deleteAllChecked}>Delete checked</Button>
        </div>
    );
}
