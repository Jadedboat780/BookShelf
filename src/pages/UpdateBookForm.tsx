import {useState, useEffect} from "react";
import { useRouter } from "@tanstack/react-router";
import {InputText} from "../components/InputText.tsx";
import {Button} from "../components/Button.tsx";
import {get_book_by_id, updateBook} from "../api/book.ts";

export const UpdateBookForm = ({id}: {id: number}) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [photoLink, setPhotoLink] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchBooks = async () => {
            const book = await get_book_by_id(id);
            setTitle(book[0].title);
            setCategory(book[0].category);
            setAuthor(book[0].author);
            setDescription(book[0].description);
            setPhotoLink(book[0].photo_link);
        };
        fetchBooks();
    }, []);

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        await updateBook(id, title, author, category, description, photoLink)
        router.history.push("/books");
    }

    return <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-white text-center">Редактировать книгу</h2>
            <br/>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <InputText label="Название книги" type="text" placeholder="Rust book" value={title} setValue={setTitle}/>
                <InputText label="Категория" type="text" placeholder={category} value={category} setValue={setCategory}/>
                <InputText label="Автор" type="text" placeholder="Гойда" value={author} setValue={setAuthor}/>
                <InputText label="Описание" type="text" placeholder="Описание книги" value={description} setValue={setDescription}/>
                <InputText label="Ссылка на фото" type="url" placeholder="htpps://" value={photoLink} setValue={setPhotoLink}/>
                <br/>
                <Button text="Сохранить" type="submit"/>
            </form>
        </div>
    </div>
}