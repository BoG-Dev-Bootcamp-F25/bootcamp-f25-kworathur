import { typeColors } from '../data/typeColors'
import type { PokeType } from './PokeInfoViewer'

type PokeTypesTagsProps = {
    types: PokeType[]
}

const PokeTypesTags = ({ types }: PokeTypesTagsProps) => {
    return (
        <div>
            <h3 className="text-left mt-2 font-bold">Types:</h3>
            <div className="mt-2 flex flex-row">
                {types.map((t, i) => {
                    const bgColor = typeColors.get(t.type.name)
                    return (
                        <div
                            key={i}
                            style={{ backgroundColor: bgColor }}
                            className={`m-2 border-solid border-2 p-1 rounded-md`}
                        >
                            {t.type.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokeTypesTags
