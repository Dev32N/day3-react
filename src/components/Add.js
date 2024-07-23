import React, { useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

export default function Add({ addStudent }) {
    const [newStudent, setNewStudent] = useState('');

    const handleAdd = () => {
        if (newStudent.trim()) {
            addStudent(newStudent.trim());
            setNewStudent('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <InputGroup className='mb-3'>
            <Input
                type="text"
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
                placeholder="Thêm thông tin một học sinh mới"
                onKeyDown={handleKeyDown}
            />
            <Button color="primary" onClick={handleAdd}>ADD</Button>
        </InputGroup>
    );
}
