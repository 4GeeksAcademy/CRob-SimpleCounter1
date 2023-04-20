import React from "react"

export const Counter = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>Counter</h1>
            {count}
        </div>
    )
}