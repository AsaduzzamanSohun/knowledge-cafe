
import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Header from './assets/components/Header/Header'
import Bookmarks from './assets/components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

  };

  const handlesMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-12 max-w-7xl mx-auto mt-10'>
        <Blogs
          handleBookmarks={handleBookmarks}
          handlesMarkAsRead={handlesMarkAsRead}></Blogs>

        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}>

        </Bookmarks>


      </main>
    </>
  )
}

export default App
