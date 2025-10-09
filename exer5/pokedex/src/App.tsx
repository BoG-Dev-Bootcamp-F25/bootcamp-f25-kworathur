import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokeSpriteViewer from './components/PokeSpriteViewer'
import PokeNameInput from './components/PokeNameInput'
import PokeTypesTags from './components/PokeTypesTags'
import PokeControls from './components/PokeControls'
import PokeStatsPicker from './components/PokeStatsPicker'
import PokeStatsViewer from './components/PokeStatsViewer'

type PokeInfo = {
    id: number
    name: string
    spriteUrl: string
    types: string[]
}

function App() {
    const [selectedStat, setSelectedStat] = useState<'Moves' | 'Info'>('Moves')
    const [pokeInfo, setPokeInfo] = useState<PokeInfo | null>(null)

    useEffect(() => {}, [])
    return (
        <>
            <div className="w-full">
                <h1 className="font-semibold">Exercise 5 - Pokedex !</h1>
                <div className="flex flex-row  max-h-4/5 mt-8 ">
                    <div className="flex-1">
                        <PokeSpriteViewer dataUrl="" />
                        <PokeNameInput name="Bulbasaur" />
                        <PokeTypesTags types={['normal']} />
                        <PokeControls onNext={() => {}} onPrev={() => {}} />
                    </div>
                    <div className="ml-8 flex-1">
                        <PokeStatsViewer title="Info" values={['transform']} />
                        <PokeStatsPicker
                            selectedStat="Moves"
                            setSelectedStat={() => {}}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
