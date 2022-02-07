import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div>
            <div className="container-error">
                <img src="/notfound.JPG" alt="Página não encontrada!"/>
                <h1>Página não encontrada!</h1>
                <Link to="/">
                Voltar página inicial
                </Link>
            </div>
        </div>
    )
}