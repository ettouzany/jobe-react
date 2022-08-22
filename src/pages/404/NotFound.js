import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="pxp-container">
            <div className="pxp-single-candidate-container">
                <div className="row justify-content-center py-5">
                    <div className="col-xl-9 text-center py-5 m-5">
                        <h1>We can’t find this page</h1>
                        <p className='my-4'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <Link to="/" className="btn btn-primary"> <i className="fa fa-home"></i> Go to Homepage</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;