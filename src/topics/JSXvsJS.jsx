import React from 'react'

function Example(){
    const name= "Zainab";
    return(
       <div>
         <h1>Hello {name}</h1>
         <p>This is Jsx </p>
       </div>
    )
}

function JSXvsJS() {
    return (
        <div className='text-white ' >
            <p className='font-bold'>JavaScript</p>
            <p className='pb-2'>JavaScript (JS) is a programming language used to add logic and dynamic behavior to web applications. </p>
            <p className='font-bold'>Example:</p>
            <p> const name = "Zainab"</p>
            <p className='pb-2'> consol.log ("Hello" + variable name in cruly bracket)</p>
            <p className='font-bold'>JavaScript XML</p>
            <p className='pb-2'>JSX is a syntax extension of JavaScript mainly used in React to write UI elements in an HTML-like syntax. </p>
            <p className='font-bold'>Example:</p>
            <Example/>
        </div>
    )
}

export default JSXvsJS