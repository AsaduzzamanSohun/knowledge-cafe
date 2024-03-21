import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 space-y-3">

            <div className='bg-gray-400'>
                <h3 className='text-4xl text-center'>Reading time: {readingTime}</h3>
            </div>

            <div className='bg-gray-400 pt-4'>

                <h3 className='text-3xl text-center'>Bookmarks: {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }


            </div>


        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;