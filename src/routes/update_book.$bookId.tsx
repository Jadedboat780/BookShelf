import {createFileRoute, useParams} from '@tanstack/react-router'
import {UpdateBookForm} from "../pages/UpdateBookForm.tsx";

export const Route = createFileRoute('/update_book/$bookId')({
    component: RouteComponent,
})

function RouteComponent() {
    const { bookId } = useParams({ from: Route.id });
    return <UpdateBookForm id={Number(bookId)} />;
}