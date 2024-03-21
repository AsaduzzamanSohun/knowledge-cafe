import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({ blog, handleBookmarks, handlesMarkAsRead }) => {

    const {id, title, cover, author_img, author, publish_date, reading_time, hashtags } = blog;

    console.log(blog)

    return (
        <div className='mb-20 space-y-5'>
            <img src={cover} className='w-full mb-10' alt={`This photo is about ${title}`} />

            <div className='flex justify-between items-center'>

                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4>{author}</h4>
                        <p>{publish_date}</p>
                    </div>

                </div>
                <div className='flex gap-4 items-center'>
                    <p>{reading_time} minutes</p>
                    <button onClick={() => handleBookmarks(blog)}>
                        <FaRegBookmark></FaRegBookmark>

                    </button>
                </div>

            </div>

            <h1 className='text-4xl my-5'>{title}</h1>

            <div>
                <p>
                    {hashtags.map((hash, idx) => <span key={idx}> {hash}</span>)}
                </p>
            </div>
            <button onClick={() => handlesMarkAsRead(reading_time, id)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handlesMarkAsRead: PropTypes.func
}

export default Blog;