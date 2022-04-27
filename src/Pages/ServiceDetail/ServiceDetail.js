import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../hooks/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);


    return (
        <div className='container'>
            <h2>This is service detail component: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/proceed/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Now!</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;