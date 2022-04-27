import { useState, useEffect } from 'react';
const useServiceDetails = (serviceId) => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://obscure-shore-20433.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])
    return [service];
}

export default useServiceDetails;