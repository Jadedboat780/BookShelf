export const InputFile = () => {
    return <>
        <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Загрузить файл</label>
        <input
            className="block w-full text-sm  border cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
            id="file_input" type="file"/>
    </>
}