function Contato() {
    return(
        <> 
            <div className='bg-body-secondary'>
                <div className='d-flex justify-content-center pt-2 ms-5 me-5 mb-2'>
                    <h1>Contato</h1>
                </div>
                <form className='pb-4 ms-5 me-5 d-flex flex-column w-50' action="">
                    <label className='form-label'>
                        Email
                    </label>
                    <input className='form-control' type="text" />
                    <label className='form-label'>
                        Mensagem
                    </label>
                    <textarea className='form-control' type="text" rows='3' />
                    <button className='btn btn-primary w-25 mt-3'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contato