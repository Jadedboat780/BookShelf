import {createRootRoute, Link, Outlet} from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <div>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">Auth</Link>{' '}
                <Link to="/books" className="[&.active]:font-bold">Books</Link>
                <Link to="/add_book" className="[&.active]:font-bold">Add book</Link>
                <Link to="/update_book/$bookId" params={{ bookId: "1" }} className="[&.active]:font-bold">Update book</Link>
                <Link to="/wish_list" className="[&.active]:font-bold">Wish list</Link>
            </div>

            <Outlet/>
        </div>
    ),
})