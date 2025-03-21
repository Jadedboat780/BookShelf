import Database from '@tauri-apps/plugin-sql';

export type Book = {
    id: number,
    title: string,
    author: string,
    category: string,
    publication_year: number,
    description: string,
    photo_link: string
}


export const get_books = async (): Promise<Book[]> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    return await db.select<Book[]>("SELECT * FROM Books");
}

export const get_book_by_id = async (id: number): Promise<Book[]> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    return await db.select<Book[]>("SELECT * FROM Books WHERE id = $1", [id]);
}

export const addBook = async (
    title: string,
    author: string,
    category: string,
    description: string,
    photoLink: string,
): Promise<void> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    const userId = localStorage.getItem("userId");

    await db.execute(
        "INSERT INTO Books (user_id, title, author, category, description, photo_link) VALUES ($1, $2, $3, $4, $5, $6)",
        [Number(userId), title, author, category, description, photoLink]
    )
}

export const updateBook = async (
    id: number,
    title: string,
    author: string,
    category: string,
    description: string,
    photoLink: string,
) => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    await db.execute(
        "UPDATE Books SET title = $1, author = $2, category = $3, description = $4, photo_link = $5 WHERE id = $6",
        [title, author, category, description, photoLink, id]
        )
}

export const deleteBook = async (id: number): Promise<void> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    await db.execute("DELETE FROM Books WHERE id = $1", [id])
}