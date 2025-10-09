import { typeColors } from '../data/typeColors'

type PokeTypesTagsProps = {
    types: string[]
}

const PokeTypesTags = ({ types }: PokeTypesTagsProps) => {
    //     Normal Type:
    // Fire Type: EE8130
    // Water Type: 6390F0
    // Electric Type: F7D02C
    // Grass Type: 7AC74C
    // Ice Type: 96D9D6
    // Fighting Type: C22E28
    // Poison Type: A33EA1
    // Ground Type: E2BF65
    // Flying Type: A98FF3
    // Psychic Type: F95587
    // Bug Type: A6B91A
    // Rock Type: B6A136
    // Ghost Type: 735797
    // Dragon Type: 6F35FC
    // Dark Type: 705746
    // Steel Type: B7B7CE
    // Fairy Type: D685AD

    return (
        <div>
            <h3 className="text-left mt-2 font-bold">Types:</h3>
            <div className="mt-2 flex flex-row">
                {types.map((t, i) => {
                    const bgColor = typeColors.get(t)
                    return (
                        <div
                            key={i}
                            style={{ backgroundColor: bgColor }}
                            className={`m-2 border-solid border-2 p-1 rounded-md`}
                        >
                            {t}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokeTypesTags
