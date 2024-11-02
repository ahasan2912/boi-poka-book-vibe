import banner_image from '../../assets/image/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='rounded-md'
                    src={banner_image} />
                <div className='flex flex-col md:items-start'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;