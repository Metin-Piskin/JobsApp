import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, type = null) => {
    const [Jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [url]);

    async function fetchData() {
        try {
            const { data: responseData } = await axios.get(url);
            setJobs(responseData);
            setLoading(false);

            if (type === null) {
                setJobs(responseData);
            } else {
                setJobs(responseData[type]);
            }
        }
        catch (err) {
            setError(err);
            setLoading(false);
        }
    }


    return { Jobs, loading, error };
}
export default useFetch;