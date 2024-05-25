import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const CustomerTable = () => {
    const queryClient = useQueryClient()

    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
                res.json()
            ),
        staleTime: 60000,
        // refetchInterval: 4000,
        // retry: 3,
    })
    const { mutate, isPending, isError, isSuccess, } = useMutation({
        mutationFn: (newPost) =>
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((res) => res.json()),
        onSuccess: (newPost) => {
            // queryClient.invalidateQueries({ queryKey: ['posts'] })
            queryClient.setQueryData(['posts'], (oldPost) => [...oldPost, newPost])
        }
    })

    if (error || isError) return <div>There was an error</div>
    if (isLoading) return <div>Loading...</div>
    if (isPending) return <div>pending...</div>
    return (
        <div>
            <button onClick={() => mutate(
                {
                    "userId": 40000,
                    "id": 400,
                    "title": "Hey me name ram",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            )}>Add Post</button>
            {data?.map((todo) => (
                <div key={todo.id} className='my-4'>
                    <h2>Id: {todo.id}</h2>
                    <h2>Title: {todo.title}</h2>
                    <p>Body:: {todo.body}</p>
                </div>
            ))}
        </div>
    )
}

export default CustomerTable
