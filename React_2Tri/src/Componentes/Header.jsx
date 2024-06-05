import Navbar from './Navbar'

function Header() {
    return ( 
        <>
        <header className='navbarTroco flex bg-black text-white p-4 mb-4 text-lg'>
            <h1 className='pe-5 text-corVerde'>Filminhos</h1>
            <Navbar/>
        </header>
        </>
     );
}

export default Header;