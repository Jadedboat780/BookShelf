import {useState} from "react";
import {useRouter} from "@tanstack/react-router";
import {InputText} from "../components/InputText.tsx";
import {Button} from "../components/Button.tsx";
import {addBook} from "../api/book.ts";

export const AddBookForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [photoLink, setPhotoLink] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        await addBook(title, author, category, description, photoLink)
        router.history.push("/books");
    };

    return <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-white text-center">Добавить книгу</h2>
            <br/>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <InputText label="Название книги" type="text" placeholder="Rust book" value={title} setValue={setTitle}/>
                <InputText label="Категория" type="text" placeholder="Роман" value={category} setValue={setCategory}/>
                <InputText label="Автор" type="text" placeholder="Гойда" value={author} setValue={setAuthor}/>
                <InputText label="Описание" type="text" placeholder="Описание книги" value={description} setValue={setDescription}/>
                <InputText label="Ссылка на фото" type="url" placeholder="htpps://" value={photoLink} setValue={setPhotoLink}/>
                <br/>
                <Button text="Сохранить" type="submit"/>
            </form>
        </div>
    </div>
}
