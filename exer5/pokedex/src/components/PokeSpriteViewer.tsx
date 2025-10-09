type SpriteViewerProps = {
    dataUrl: string | null
}

const PokeSpriteViewer = ({ dataUrl }: SpriteViewerProps) => {
    return (
        <div className="flex justify-center min-w-72 min-h-72 w-full h-auto border-solid border-2 rounded-sm">
            {dataUrl && (
                <img
                    className="min-w-64 min-h-64 w-1/2 h-1/2"
                    src={dataUrl}
                    alt="Image of a pokemon"
                />
            )}
        </div>
    )
}

export default PokeSpriteViewer
