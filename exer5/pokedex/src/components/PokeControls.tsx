type PokeControlsProps = {
    onNext: () => void
    onPrev: () => void
}

const PokeControls = ({ onNext, onPrev }: PokeControlsProps) => {
    return (
        <>
            <div className="flex flex-row">
                <div className="m-2 flex-1 rounded-sm bg-[#D3D3D3] p-1 font-bold">
                    {'<'}
                </div>
                <div className="m-2 flex-1 rounded-sm bg-[#D3D3D3] p-1 font-bold">
                    {'>'}
                </div>
            </div>
        </>
    )
}

export default PokeControls
