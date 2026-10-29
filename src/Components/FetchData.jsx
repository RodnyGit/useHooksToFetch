import React from 'react'
import useFetch from './UseFetch';

const FetchData = () => {
    const [data] = useFetch('https://api.giphy.com/v1/gifs/trending');
    console.log(data);

    return (
        <>
            
            <div className='list_data_main'>
                <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
                {data.data && data.data.map((gif) => (
                    <div key={gif.id} className='list_data'>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>
                    </div>
                ))}

            </div>


        </>
    )
}

export default FetchData
