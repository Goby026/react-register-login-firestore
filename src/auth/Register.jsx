import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../config/FirestoreApp';
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const onHandleForm = (e) => {
        e.preventDefault();
        if (!confirm('¿Registrar nuevo usuario?')) {
            return;
        }
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, usuario, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
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
                <h3>Registro de usuario</h3>
                <hr />
                <form onSubmit={onHandleForm}>
                    <div>
                        <label htmlFor="">Nombre de Usuario</label>
                        <input
                            type="text" placeholder="dni / correo "
                            onChange={onHandleUser} />
                    </div>
                    <div>
                        <label htmlFor="">Establecer Contraseña</label>
                        <input
                            type="password" placeholder="***"
                            onChange={onHandlePassword} />
                    </div>
                    <div>
                        <button type="submit">Registrar</button> <br />
                        <Link to="/">Tengo cuenta, ingresar¡</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
