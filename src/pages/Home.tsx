import {Link, useRouter} from '@tanstack/react-router'
import {BookCard} from "../components/BookCard.tsx";
import {AddBook} from "../components/AddBook.tsx";
import {Book, deleteBook, get_books} from "../api/book.ts";
import {useEffect, useState} from "react";
import {addWishList} from "../api/wishList.ts";

export const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchBooks = async () => {
            const b = await get_books();
            setBooks(b);
        };
        fetchBooks();
    }, []);

    const handleUpdate = (id: number) => {
        router.history.push(`/update_book/${id}`);
    };

    const handleDelete = async (id: number) => {
        await deleteBook(id);
        setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
    };

    const handleAddToWishlist = async (bookId: number) => {
        const userId = Number(localStorage.getItem("userId"));
        await addWishList(userId, bookId)
    }

    return (
        <>
            <h1 className="text-7xl font-bold text-black text-center">Библиотека</h1>
            <br/>
            <div className="flex gap-5 ml-10 flex-wrap">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        description={book.description}
                        author={book.author}
                        photoLink={book.photo_link}
                        onUpdate={() => handleUpdate(book.id)}
                        onDelete={() => handleDelete(book.id)}
                        onAddToWishlist={() => handleAddToWishlist(book.id)}
                    />
                ))}
                <Link to='/add_book'>
                    <AddBook/>
                </Link>
            </div>
        </>
    );
};
