interface User {
    name: string;
    id: number;
}

const newUser: User = {
    name: 'Ryan',
    id: 1,
}


function Test() {


    return (
        <>
        <h1>Test Component</h1>
        {newUser.name}
        </>
    )
}


export default Test;
