
import React from 'react'
import TodoItem from "./TodoItem";


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props)
{
    return (
        <ul style={styles.ul}>
            {/*<li>1</li>*/}
            {/*<li>2</li>*/}
            {/*<TodoItem/>*/}
            {/*<TodoItem/>*/}
            {/*<TodoItem/>*/}

            {/*итерация массива*/}
            {props.todosss.map((todo1, index ) => {
                return <TodoItem tod={todo1} key={todo1.id} ind={index}/>
            })}
        </ul>
    )
}