import { FC, useState } from 'react';
import { MoreVertical, Edit, Trash, BookHeart } from 'lucide-react';

type Props = {
    title: string;
    author: string;
    description: string;
    photoLink: string;
    onUpdate?: () => void;
    onDelete?: () => void;
    onAddToWishlist?: () => void;
};

export const BookCard: FC<Props> = ({ title, author, description, photoLink, onUpdate, onDelete, onAddToWishlist }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative flex flex-col items-center border rounded-lg shadow-sm md:flex-row bg-gray-800 md:max-w-xl md:w-110 h-64 overflow-hidden">
            <img className="object-cover w-full h-40 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
                 src={photoLink} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-white">{title}</h5>
                <span className="text-sm text-white">{author}</span>
                <p className="mb-3 font-normal text-gray-400 line-clamp-3">{description}</p>
            </div>

            <div className="absolute top-2 right-2">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    <MoreVertical className="cursor-pointer" size={20} />
                </button>

                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-46 bg-gray-700 rounded-lg shadow-lg z-10">
                        <button className="flex items-center px-4 py-2 text-white hover:bg-gray-600 w-full cursor-pointer"
                        onClick={onUpdate}>
                            <Edit size={16} className="mr-2" /> Редактировать
                        </button>
                        <button
                            className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-600 w-full cursor-pointer"
                            onClick={onDelete}
                        >
                            <Trash size={16} className="mr-2" /> Удалить
                        </button>
                        <button
                            className="flex items-center px-4 py-2 text-green-500 hover:bg-gray-600 w-full cursor-pointer"
                            onClick={onAddToWishlist}
                        >
                            <BookHeart size={16} className="mr-2" /> В желаемое
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
