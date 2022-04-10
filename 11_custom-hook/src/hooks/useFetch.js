import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => {
          if (!response.ok) {
            setError('Something went wrong!!!')
            setLoading(false)
            setData([])
          } else {
            return response.json()
          }
        })
        .then(data => {
          setData(data)
          setLoading(false)
          setError('')
        });
    }, [])
    
    return {data, loading, error};
    
}

export default useFetch;
