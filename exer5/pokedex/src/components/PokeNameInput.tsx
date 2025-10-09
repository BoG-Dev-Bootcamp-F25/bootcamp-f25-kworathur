type PokeNameInputProps = {
    name: string;
}


const PokeNameInput = ({name}: PokeNameInputProps) => {
    return ( <>
        <div className='mt-2 border-solid border-2 rounded-sm bg-gray w-full p-4 bg-[#D3D3D3]'>
            {name}
        </div>
    </> );
}
 
export default PokeNameInput;