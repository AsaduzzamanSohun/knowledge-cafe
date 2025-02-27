import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className='text-2xl bg-slate-200 p-4 m-4 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;