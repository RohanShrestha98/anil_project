import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'

const User = () => {
    const [teacher, setTeacher] = useState()
    const [courses, setCourses] = useState()
    const url = 'http://159.223.33.101:9005/api/v3/teacher/list/'
    const token = JSON.parse(localStorage.getItem('token'))
    const url2 = 'http://159.223.33.101:9005/api/v3/course/list/'

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    useEffect(() => {
        axios.get(url, { headers }).then(response => {
            setTeacher(response.data.data)
            console.log(response.data);
        })
        axios.get(url2, { headers }).then(response => {
            // console.log(response.data.data);
            setCourses(response.data.data)
        })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-4 gap-6 m-4 sm:grid-cols-1 md:grid-cols-2'>
                {teacher?.map((item) => (
                    <ProductItem
                        coverImg={item?.image}
                        title={item?.firstName}
                        description={item?.email}
                        newPrice={item?.phone}
                    />
                ))}
            </div>
            <div>
                {courses?.map((course) => (
                    <div>
                        <table>
                            <tr>
                                <td className='p-2'>{course?.courseID}</td>
                                <td>{course?.title}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User
