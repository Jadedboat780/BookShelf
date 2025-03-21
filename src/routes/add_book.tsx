import {createFileRoute} from '@tanstack/react-router'
import {AddBookForm} from "../pages/AddBookForm.tsx";

export const Route = createFileRoute('/add_book')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AddBookForm/>
}
