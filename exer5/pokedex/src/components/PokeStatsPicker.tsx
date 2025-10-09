type PokeStatsPickerProps = {
    selectedStat: 'Info' | 'Moves'
    setSelectedStat: (stat: 'Info' | 'Moves') => void
}

const PokeStatsPicker = ({
    selectedStat,
    setSelectedStat,
}: PokeStatsPickerProps) => {
    return (
        <div className="mt-4 flex flex-row">
            <button
                onClick={() => setSelectedStat('Info')}
                style={
                    selectedStat === 'Info'
                        ? { backgroundColor: '#0fff93ff' }
                        : { backgroundColor: '#D3D3D3' }
                }
                className="m-2 flex-1 rounded-sm  p-1 font-bold"
            >
                Info
            </button>
            <button
                onClick={() => setSelectedStat('Moves')}
                style={
                    selectedStat === 'Moves'
                        ? { backgroundColor: '#0fff93ff' }
                        : { backgroundColor: '#D3D3D3' }
                }
                className="m-2 flex-1 rounded-sm  p-1 font-bold"
            >
                Moves
            </button>
        </div>
    )
}

export default PokeStatsPicker
