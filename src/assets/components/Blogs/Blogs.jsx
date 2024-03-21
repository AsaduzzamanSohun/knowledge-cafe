import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks, handlesMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))



    }, [])

    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handleBookmarks={handleBookmarks}
                    handlesMarkAsRead={handlesMarkAsRead}
                    blog={blog}></Blog>)
            }



        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handlesMarkAsRead: PropTypes.func
}

export default Blogs;