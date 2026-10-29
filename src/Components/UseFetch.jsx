// import React, { useEffect, useState } from 'react'

// const UseFetch = (url) => {
//     const [data, setData] = useState();
//     useEffect(() => {
//         fetch(url).then((res) => res.json())
//             .then((data) => setData(data))
//     }, [])
//     return [data]

// }

// export default UseFetch

import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams({
            lang: 'es',
            api_key: 'Rs83nDAzJwlLob8J9RSaMkPQLI0Jqm2q'
        });

        fetch(`${url}?${params}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return [data];
};

export default UseFetch;