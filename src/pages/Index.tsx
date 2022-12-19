import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import games from '../games.json'
import MovieProps from '../interfaces/gamesProps'

export function Index() {
  
  return (
    <>
   <main
   className='w-full min-h-[calc(100vh-40px)] grid place-items-center'
   >
    <div
    className='flex w-full h-full flex-col px-4 md:flex-row md:h-[500px] min-[1500px]:h-[750px]'
    >
      {
      games.map((game:MovieProps) =>(
        <Link 
        to={`/${game.id}`}
        className="flex-1 md:hover:flex-[5] transition-all duration-1000 overflow-hidden" 
        >
          <img src={game.banner} alt={`Banner de ${game.name}`} />
        </Link>
      ))
      }
    </div>
   </main>

   <Footer />
   </>
 )
}
