import {useParams, useNavigate} from 'react-router-dom'

export default function PostUnico() {

    const params = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>{params.postName}</h1>
            <button onClick={() => navigate("../")}>Voltar</button>
        </div>
    );
}