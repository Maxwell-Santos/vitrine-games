import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import games from '../games.json'
import GamesProps from "../interfaces/gamesProps"

export function Movie() {
  const [game, setGame] = useState<GamesProps>()
  const { id } = useParams()

  useMemo(() => {
    //vai retornar o primeiro objeto que corresponder a condição
    const gameFounded = games.find(game => game.id == Number(id))
    setGame(gameFounded)
  }, [id])

  useEffect(() => { document.title = game?.name || "Vitrine de Jogos" }, [])

  return (
    <>
    <BackButton />
      <div className="flex flex-col md:flex-row">

        <div className="flex-[.8]">
          <img src={game?.poster} alt={`Poster do jogo ${game?.name}`} />
        </div>

        <section className="flex-1 px-4 md:px-7 mb-5">
          <h1 className="text-center text-2xl md:text-5xl my-10">{game?.name}</h1>

          <p className="text-base md:text-xl">
            {game?.info}
          </p>

          <dl>
            <dt>Empresa Fabricante</dt>
            <dd>
              <h3 className="font-Oswald text-lg tracking-wide">{game?.company.name}</h3>
              {game?.company.description}
            </dd>

            <dt>Personagens Principais</dt>
            <dd>{game?.avatars}</dd>

            <dt>Forma de Jogar</dt>
            <dd>{game?.how_play}</dd>

            <dt>Tempo de jogo</dt>
            <dd>
              O tempo foi considerado zerando o jogo normalmente, completando missões sem speedrun ou qualquer coisa do tipo, leva em média <strong>{game?.game_time} para zerar {game?.name}</strong>.
            </dd>
          </dl>

        </section>

      </div>
    </>
  )
}