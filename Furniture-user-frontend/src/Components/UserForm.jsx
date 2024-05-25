import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

const UserForm = () => {
    const [editData, setEditData] = useState(null);
    const { handleSubmit, register, reset } = useForm();
    const [localData, setLocalData] = useState([]);
    const [hasEventChanged, setHasEventChanged] = useState(false);

    const onSubmit = (data) => {
        let info = JSON.parse(localStorage.getItem('data')) ?? [];
        info.push(data);
        localStorage.setItem('data', JSON.stringify(info));
        setHasEventChanged(!hasEventChanged);
        reset();
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        setLocalData(data);
    }, [hasEventChanged]);

    const deleteItems = (index) => {
        const updatedData = [...localData];
        updatedData.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(updatedData));
        setHasEventChanged(!hasEventChanged);
    };

    const onEditData = (data) => {
        const updatedData = localData.map(item => {
            if (item === editData) {
                return {
                    ...item,
                    name: data?.name !== '' ? data.name : item.name,
                    email: data?.email !== '' ? data.email : item.email
                };
            }
            return item;
        });

        localStorage.setItem('data', JSON.stringify(updatedData));
        reset();
        setEditData(null);
        setHasEventChanged(!hasEventChanged);
    };

    return (
        <div>
            <h2>User Detail</h2>
            <form onSubmit={handleSubmit(editData ? onEditData : onSubmit)}>
                <Input type='text' register={register} defaultValue={editData?.name} registerName='name' placeholder='Your name' required />
                <Input type='email' register={register} defaultValue={editData?.email} registerName='email' placeholder='Email' required />
                <br />
                <button type="submit" className='bg-black text-white text-sm p-2 rounded'>Submit</button>
            </form>
            <div>
                {localData?.map((data, index) => (
                    <div key={index} className='grid grid-cols-4'>
                        <div>{data?.name}</div>
                        <div>{data?.email}</div>
                        <button onClick={() => setEditData(data)}>Edit</button>
                        <button onClick={() => deleteItems(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserForm;
