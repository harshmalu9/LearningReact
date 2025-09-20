import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/harshmalu9').
        then((response) => response.json()).
        then((data) => setData(data));
    }, [])

  return (
    <div
    className='text-center m-4 bg-gray-700 text-white text-2xl p-4 rounded-xl'
    >
        <img src={data.avatar_url} alt="Github PFP" width={300}/>
        Github followers: {data.followers}
    </div>
  )
}

export default Github