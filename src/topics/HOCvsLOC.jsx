function Welcome() {
    return (
        <div>
            <h2>Welcome to React</h2>
        </div>
    )
}
function WithMessage(Component) {
    return function EnhancedComponent() {
        return (
            <div>
                <p>Extra message from HOC</p>
                <Component />
            </div>
        )
    }
}
const EnhancedWelcome = WithMessage(Welcome)
function HOCvsLOC() {

    return (
        <div className='text-white'>
            <div>
                <p className='font-bold'>High Order Component</p>
                <p className='py-2'>A Higher-Order Component is a function that takes an existing component as an argument, adds extra functionality to it, and returns a new enhanced component.</p>
                <p className='font-bold'>Low Order Component</p>
                <p className='pb-2'>Lower-Order Component” is not an official React term. It is sometimes used informally to refer
                    to the normal/original component that is passed to an HOC. </p>
            </div>

            <div className='pb-4'>
                <p className='font-bold'>Normal Component</p>
                <Welcome />
            </div>

            <div className='pb-4'>
                <p className='font-bold'>High Order Coponent</p>
                <EnhancedWelcome />
            </div>



        </div>
    )
}

export default HOCvsLOC