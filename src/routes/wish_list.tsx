import {createFileRoute} from '@tanstack/react-router'
import {WishList} from "../pages/WishList.tsx";

export const Route = createFileRoute('/wish_list')({
    component: RouteComponent,
})

function RouteComponent() {
    return <WishList/>
}
