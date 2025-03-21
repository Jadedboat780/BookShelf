import {useEffect, useState} from "react";
import {getWishList} from "../api/wishList.ts";
import {Book, get_book_by_id} from "../api/book.ts";
import {BookCard} from "../components/BookCard.tsx";

export const WishList = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const userId = Number(localStorage.getItem("userId"));

            try {
                const result = await getWishList(userId);
                const books_id = result.map((data) => data.book_id);

                // Загружаем все книги параллельно
                const booksData = await Promise.all(books_id.map(id => get_book_by_id(id)));

                // Устанавливаем state одним вызовом
                setBooks(booksData.map(book => book[0]));
            } catch (error) {
                console.error("Ошибка при загрузке списка желаемого:", error);
            }
        };

        fetchBooks();
    }, []);


    return <>
        <h1 className="text-7xl font-bold text-black text-center">Список желаемого</h1>
        <br/>
        <div className="flex gap-5 ml-10 flex-wrap">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    description={book.description}
                    author={book.author}
                    photoLink={book.photo_link}
                />
            ))}
        </div>
    </>
}