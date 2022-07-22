import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input,setInput]=useState('');
    const handleChange=(e)=>{
      setInput(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      props.onSubmit({id:Math.floor(Math.random()*10000),
                      text:input
                    })
                    setInput('')
                            }
  return (
    <>
    <form onSubmit={handleSubmit}>
<input type="text" placeholder='add todo' value={input} name="text" onChange={handleChange}/>
<button >Add To do</button>
</form>
</>
  )
}

export default TodoForm