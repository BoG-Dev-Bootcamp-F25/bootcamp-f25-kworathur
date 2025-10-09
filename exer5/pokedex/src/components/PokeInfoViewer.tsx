export type PokeMove = {
    move: { name: string }
}

export type PokeType = {
    type: { name: string }
}

export type PokeStat = {
    stat: { name: string }
    base_stat?: number
}

type PokeInfoViewerProps = {
    title: 'Moves' | 'Info'
    values: Array<PokeMove | PokeStat>
}

const PokeInfoViewer = ({ title, values }: PokeInfoViewerProps) => {
    return (
        <>
            <div>
                <h3 className="mt-2 font-bold">{title}</h3>
                <div className="mt-2 min-w-64 min-h-72 h-100 overflow-auto w-full bg-[#D3D3D3]">
                    {title === 'Moves'
                        ? values.map((v, i) => {
                              return (
                                  <div key={i}>{(v as PokeMove).move.name}</div>
                              )
                          })
                        : values.map((v, i) => {
                              return (
                                  <div key={i}>
                                      {(v as PokeStat).stat.name}{' '}
                                      {(v as PokeStat).base_stat}
                                  </div>
                              )
                          })}
                </div>
            </div>
        </>
    )
}

export default PokeInfoViewer
