type PokeControlsProps = {
    onNext: () => void
    onPrev: () => void
}

const PokeControls = ({ onNext, onPrev }: PokeControlsProps) => {
    return (
        <>
            <div className="flex flex-row">
                <button
                    onClick={() => onPrev()}
                    className="m-2 flex-1 rounded-sm bg-[#D3D3D3] p-1 font-bold"
                >
                    {'<'}
                </button>
                <button
                    onClick={() => onNext()}
                    className="m-2 flex-1 rounded-sm bg-[#D3D3D3] p-1 font-bold"
                >
                    {'>'}
                </button>
            </div>
        </>
    )
}

export default PokeControls
