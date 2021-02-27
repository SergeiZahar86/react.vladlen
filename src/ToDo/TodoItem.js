import React from 'react'

const styles = {
    stron: {
        margin: 5,
        padding: 0
    }
}

/*export default function TodoItem(oness1, index2){
    return (
        <li>
            <strong>{index2.index + 1}</strong>
            {oness1.oness.title}
        </li>)
}*/
export default function TodoItem({tod, ind}){
    return (
        <li>
            <strong style={styles.stron}>{ind + 1}</strong>
            {tod.title}
        </li>)
}