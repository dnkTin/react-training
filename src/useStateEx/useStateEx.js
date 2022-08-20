import React, {useState} from 'react'

function Example() {
  const [count, setCount] = useState()

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
