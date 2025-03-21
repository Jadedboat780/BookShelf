import { createFileRoute } from '@tanstack/react-router'
import {Login} from "../pages/Auth/Login.tsx";

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
