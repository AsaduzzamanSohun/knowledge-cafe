import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto border-b-2'>
            <h1 className="text-2xl font-bold p-4 mx-4">
                Knowledge Cafe</h1>

                <img src={profile} alt="" />
        </header>
    );
};

export default Header;