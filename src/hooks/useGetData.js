import { useState, useEffect } from 'react';
export default function useGetData(url, options, value ) {
    const [getData, setGetData] = useState(value);
    useEffect(() => {
        if (!getData.trim()) {
            setGetData([]);
            return;
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setGetData(res.data);
            });
    }, []);
    return getData;
}
