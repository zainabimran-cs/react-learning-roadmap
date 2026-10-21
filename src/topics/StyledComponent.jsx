import styled from "styled-components"

const Title= styled.h1`
color:blue;
font-size: 24px` 

function StyledComponent() {
    return (
        <div className='text-white'>
            <div>
                <p>Styled Components is a library that allows us to write CSS styles directly inside
                    React components using JavaScript.</p>
                <p className='mb-2'>In normal CSS, we create CSS classes to style elements, whereas in Styled Components, we can write CSS directly inside a JavaScript file.</p>
                <p>Steps to make styled component</p>
                <ul className='list-decimal ml-6'>
                    <li>install styled-component - npm install styled-components</li>
                    <li>Then import it inito your component - import styled from "styled-components";</li>
                </ul>
            </div>

            <div className="my-2">
                <Title>This is Styled Component</Title>
            </div>
        </div>
    )
}

export default StyledComponent