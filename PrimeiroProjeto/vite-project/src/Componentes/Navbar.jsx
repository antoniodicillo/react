function Navbar() {
    return(
        <> 
            <nav className='navbar navbar-expand-lg bg-body-tertiary m-0'>
                <div className='container-fluid'>
                    <a href="#" className='navbar-brand'>Meu Portifolio</a>
                    <div className='navbar navbar-collapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Sobre</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className='mb-5 p-3'></hr>

        </> 
    )
}

export default Navbar