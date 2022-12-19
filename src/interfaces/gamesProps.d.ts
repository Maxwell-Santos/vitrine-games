export default interface GamesProps{
  id: number,
  name: string,
  info: string,
  
  banner: string,
  poster: string,

  company: {
    name: string,
    description: string
  },
  avatars: string,
  how_play: string,
  game_time: number,
}