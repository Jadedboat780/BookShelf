import Database from '@tauri-apps/plugin-sql';

type GetId = {
    id: number
}

export const checkUser = async (login: string, password: string): Promise<GetId[]> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    return await db.select<GetId[]>("SELECT id FROM Users WHERE login = $1 AND password = $2", [login, password])
}

export const createUser = async (login: string, email: string, password: string): Promise<GetId[]> => {
    const db = await Database.load('postgres://postgres:postgres@localhost:5433/test_db');
    await db.execute("INSERT INTO Users(login, password, email) VALUES ($1, $2, $3) RETURNING id", [login, password, email])
    return await db.select<GetId[]>("SELECT id FROM Users WHERE login = $1", [login])
}

