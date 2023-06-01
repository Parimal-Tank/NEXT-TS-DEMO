import React from 'react'


type UserProps = {
    user: Object
}

const User = (props: UserProps) => {

    console.log('This is User Data', props.user);
    return (
        <div>
            This is User COmponents
        </div>
    )
}

export default User
