import React, {useState, useEffect} from 'react' 



export default function gitHubUser({login}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.log('error'))
    })

    if(data) {
        return(
            <div>
                <img src ={data.avatar_url} />
                <h1>{data.login}</h1>
            </div>
        )

        return null;
    }
    return (
    <div className=''>
        {gitHubUser}
    </div>
    )
}