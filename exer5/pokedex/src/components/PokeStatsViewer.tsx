type PokeStatsViewerProps = {
    title: string
    values: string[]
}

const PokeStatsViewer = ({ title, values }: PokeStatsViewerProps) => {
    return (
        <>
            <div>
                <h3 className="mt-2 font-bold">{title}</h3>
                <div className="mt-2 min-w-64 min-h-72 h-3/4 w-full bg-[#D3D3D3]">
                    {values.map((v, i) => {
                        return <div key={i}>{v}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default PokeStatsViewer
