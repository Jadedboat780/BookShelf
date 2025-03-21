import {createFileRoute} from '@tanstack/react-router'
import {Home} from "../pages/Home.tsx";

export const Route = createFileRoute('/books')({
    component: Books,
})

function Books() {
    return <Home/>
}

// import heart from "../assets/heart.svg"
// import {Link} from "@tanstack/react-router";
// <Link to="/wish_list">
//     <img src={heart} className="w-12 h-12 inline ml-2" alt="heart" />
//     </Link>

//           <Link to='/add_book'>
//                 <button className='text-9xl font-bold text-amber-800 cursor-pointer'>+</button>
//             </Link>
