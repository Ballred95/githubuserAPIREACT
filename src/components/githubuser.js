import React, {useState, useEffect} from 'react' 


export default function gitHubUser({login}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
    })
    return (
    <div className=''>
        {gitHubUser}
    </div>
    )
}