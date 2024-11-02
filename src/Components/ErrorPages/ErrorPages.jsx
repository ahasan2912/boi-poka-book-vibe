import error from '../../assets/image/error-image.avif'
const ErrorPages = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-5xl text-center'>Page Not Found</h2>
                <img className='w-96 mt-6 rounded-lg' src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPages;