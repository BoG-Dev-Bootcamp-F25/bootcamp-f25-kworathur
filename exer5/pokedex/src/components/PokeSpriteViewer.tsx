type SpriteViewerProps = {
<<<<<<< HEAD
<<<<<<< HEAD
    dataUrl: string | null
=======
    dataUrl: string
>>>>>>> 4e142c7 (feat: complete exercise 5)
=======
    dataUrl: string | null
>>>>>>> 3612c58 (feat: record exer5 demo video)
}

const PokeSpriteViewer = ({ dataUrl }: SpriteViewerProps) => {
    return (
        <div className="flex justify-center min-w-72 min-h-72 w-full h-auto border-solid border-2 rounded-sm">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3612c58 (feat: record exer5 demo video)
            {dataUrl && (
                <img
                    className="min-w-64 min-h-64 w-1/2 h-1/2"
                    src={dataUrl}
                    alt="Image of a pokemon"
                />
            )}
<<<<<<< HEAD
=======
            <img
                className="min-w-64 min-h-64 w-1/2 h-1/2"
                src={dataUrl}
                alt="Image of a pokemon"
            />
>>>>>>> 4e142c7 (feat: complete exercise 5)
=======
>>>>>>> 3612c58 (feat: record exer5 demo video)
        </div>
    )
}

export default PokeSpriteViewer
