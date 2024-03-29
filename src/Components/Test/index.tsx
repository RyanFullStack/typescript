interface User {
    name: string;
    id: number;
}

const newUser: User = {
    name: 'Ryan',
    id: 1,
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const newAccount: User = new UserAccount('John', 2)


function Test() {


    return (
        <>
        <h1>Test Component</h1>
        {newUser.name}
        {newAccount.name}
        </>
    )
}


export default Test;
