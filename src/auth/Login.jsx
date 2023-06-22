
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

import { app } from '../config/FirestoreApp';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();

    const auth = getAuth(app);

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const onHandleForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, usuario, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Usuario o contraseña incorrectos, error: ${errorMessage}`);
            });
        console.log(usuario, password)
    }

    const onHandleUser = (e) => {
        setUsuario(e.target.value);
    }
    const onHandlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <form onSubmit={onHandleForm}>
                    <div>
                        <label htmlFor="">Usuario</label>
                        <input
                            type="text" placeholder="dni / correo "
                            onChange={onHandleUser} />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input
                            type="password" placeholder="***"
                            onChange={onHandlePassword} />
                    </div>
                    <div>
                        <button type="submit">Ingresar</button>
                        <br />
                        <Link to={'register'}>Registrarme</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
