import {Outlet, Link} from 'react-router-dom'
const Servicos = ()=>{
    return(
        <div className="mainInfo">
            <h1>Serviços</h1><br/>
            <h2> Estes são alguns dos nossos serviços:</h2><br/>
            <Outlet/>
        </div>
    )
}

export default Servicos