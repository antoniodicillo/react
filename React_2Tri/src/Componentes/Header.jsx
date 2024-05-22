import Navbar from './Navbar'

function Header() {
    return ( 
        <>
        <header className='flex bg-primary-sla text-white p-4 mb-4 text-lg'>
            <span>Olá, Visitante</span>
            <h1>Bem-vindo a o site</h1>
            <Navbar/>
        </header>
        </>
     );
}

export default Header;