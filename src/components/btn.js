import React from 'react'

export const Btn = (props) => {
    return (
        <>
            <button className={"btn " + props.class} >
                <p>{props.content}</p>    
            </button>
        </>
    )
}
