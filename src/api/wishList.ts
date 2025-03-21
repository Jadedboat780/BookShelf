import Database from '@tauri-apps/plugin-sql';

type GetBooksId = {
    book_id: number
}
export const addWishList = async (userId: number, bookId: number): Promise<void> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    await db.execute("INSERT INTO wishlist(user_id, book_id) VALUES ($1, $2)", [userId, bookId]);
}

export const getWishList = async (userId: number): Promise<GetBooksId[]> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    return await db.select<GetBooksId[]>("SELECT book_id FROM wishlist WHERE user_id = $1", [userId]);

}