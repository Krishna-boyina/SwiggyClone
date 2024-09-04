import React from 'react'

const Welcome = () => {

    const userName = localStorage.getItem('username')
    return (
        <div>
            <h1>Welcome to Vendor Dashboard {userName ? `${userName}!` : "! Login to Continue.."}</h1>
        </div>
    )
}

export default Welcome
