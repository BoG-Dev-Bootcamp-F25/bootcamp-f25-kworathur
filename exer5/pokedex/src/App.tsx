import { useEffect, useState } from 'react'
import './App.css'
import PokeSpriteViewer from './components/PokeSpriteViewer'
import PokeNameInput from './components/PokeNameInput'
import PokeTypesTags from './components/PokeTypesTags'
import PokeControls from './components/PokeControls'
import PokeStatsPicker from './components/PokeStatsPicker'
import PokeInfoViewer, {
    type PokeMove,
    type PokeStat,
    type PokeType,
} from './components/PokeInfoViewer'

type PokeInfo = {
    name: string
    spriteUrl: string
    types: PokeType[]
    moves: PokeMove[]
    stats: PokeStat[]
}

const URL = 'https://pokeapi.co/api/v2/pokemon'

function App() {
    const [selectedStat, setSelectedStat] = useState<'Moves' | 'Info'>('Moves')
    const [pokeId, setPokeId] = useState<number>(1)
    const [pokeInfo, setPokeInfo] = useState<PokeInfo>({
        name: '',
        spriteUrl: '',
        types: [],
        moves: [],
        stats: [],
    })
    const [errorMsg, setErrorMsg] = useState('')

    /*
This function fetches the JSON for the specified pokemon and returns it.
*/
    const getPokemonJSON = async (
        dexNumber: number
    ): Promise<PokeInfo | null> => {
        try {
            const response = await fetch(`${URL}/${dexNumber}/`) //A string template literal; basically a more readable way to put variables in a string
            const pokemonJSON = await response.json()

            // destructure the desired properties of pokemon object
            let {
                name,
                height,
                weight,
                sprites,
                types,
                moves,
                stats,
            }: {
                name: string
                sprites: any
                height: number
                weight: number
                types: PokeType[]
                moves: PokeMove[]
                stats: PokeStat[]
            } = pokemonJSON
            const spriteUrl = sprites.front_shiny
            stats.splice(0, 0, {
                stat: {
                    name: 'weight',
                },
                base_stat: weight,
                units: 'kg',
            })
            stats.splice(0, 0, {
                stat: { name: 'height' },
                base_stat: height,
                units: 'm',
            })
            setErrorMsg('')
            return { name, spriteUrl, types, moves, stats }
        } catch (e) {
            setErrorMsg((e as Error).message)
            return null
        }
    }

    useEffect(() => {
        const fetchPokemonInfo = async () => {
            const pokeInfo = await getPokemonJSON(pokeId)
            if (pokeInfo == null) {
                setPokeInfo({
                    name: '',
                    spriteUrl: '',
                    types: [],
                    moves: [],
                    stats: [],
                })
            } else {
                setPokeInfo(pokeInfo)
            }
        }
        fetchPokemonInfo()
    }, [pokeId])

    return (
        <>
            <div className="w-full">
                <h1 className="font-semibold">Exercise 5 - Pokedex !</h1>
                {errorMsg && <span className="text-red-300">{errorMsg}</span>}
                <div className="flex flex-row  max-h-4/5 mt-8 ">
                    <div className="flex-1">
                        <PokeSpriteViewer
                            dataUrl={
                                pokeInfo.spriteUrl ? pokeInfo.spriteUrl : null
                            }
                        />
                        <PokeNameInput name={pokeInfo.name} />
                        <PokeTypesTags types={pokeInfo.types} />
                        <PokeControls
                            onNext={() => {
                                setPokeId(pokeId + 1)
                            }}
                            onPrev={() => {
                                if (pokeId > 1) setPokeId(pokeId - 1)
                            }}
                        />
                    </div>
                    <div className="ml-8 flex-1">
                        <PokeInfoViewer
                            title={selectedStat}
                            values={
                                selectedStat === 'Moves'
                                    ? pokeInfo.moves
                                    : pokeInfo.stats
                            }
                        />

                        <PokeStatsPicker
                            selectedStat={selectedStat}
                            setSelectedStat={(stat) => {
                                setSelectedStat(stat)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
