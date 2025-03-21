import {createFileRoute} from '@tanstack/react-router'
import {Register} from "../pages/Auth/Register.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return <Register/>
}