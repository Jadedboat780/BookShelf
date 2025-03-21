import {useState} from "react";
import {Link, useRouter} from "@tanstack/react-router";
import {Button} from "../../components/Button.tsx";
import {InputText} from "../../components/InputText.tsx";
import {createUser} from "../../api/user.ts";

export const Login = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const result = await createUser(login, password, email);
        localStorage.setItem("userId", String(result[0].id));
        router.history.push("/books");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Создание аккаунта</h2>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <InputText label="Логин" type="text" placeholder="Nikita" value={login} setValue={setLogin}/>
                    <InputText label="Почта" type="email" placeholder="tetst@gmail.com" value={email} setValue={setEmail}/>
                    <InputText label="Пароль" type="password" placeholder="*****" value={password} setValue={setPassword}/>
                    <Button text="Вход" type="submit"/>
                </form>
                <div className="mt-6 text-center text-sm text-white">
                    У вас уже есть аккаунт?
                    <Link to="/" className="text-blue-800 font-medium"> Войти</Link>
                </div>
            </div>
        </div>
    );
};
