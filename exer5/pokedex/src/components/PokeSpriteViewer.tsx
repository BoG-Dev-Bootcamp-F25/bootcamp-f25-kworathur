type SpriteViewerProps = {
<<<<<<< HEAD
    dataUrl: string | null
=======
    dataUrl: string
>>>>>>> 4e142c7 (feat: complete exercise 5)
}

const PokeSpriteViewer = ({ dataUrl }: SpriteViewerProps) => {
    return (
        <div className="flex justify-center min-w-72 min-h-72 w-full h-auto border-solid border-2 rounded-sm">
<<<<<<< HEAD
            {dataUrl && (
                <img
                    className="min-w-64 min-h-64 w-1/2 h-1/2"
                    src={dataUrl}
                    alt="Image of a pokemon"
                />
            )}
=======
            <img
                className="min-w-64 min-h-64 w-1/2 h-1/2"
                src={dataUrl}
                alt="Image of a pokemon"
            />
>>>>>>> 4e142c7 (feat: complete exercise 5)
        </div>
    )
}

export default PokeSpriteViewer
