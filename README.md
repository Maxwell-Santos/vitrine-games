# Vitrine de Jogos

[![Gif Projeto](./public/gif.gif)](./public/gif.gif)


## Tecnologias
- React
- React-router-dom
- TailwindCSS
- Typescript

## Como funciona?

Esse projeto foi inspirado em uma atividade que fiz no curso, da tech4me do projeto Galileo, a proposta era simples, fazer uma vitrine de jogos com html e css, e quando clicasse no jogo, abriria outra página com mais informações.

Porém, o resultado ficou tão legal e bonito, que refiz o projeto com React (e senti na pele como é mais rápido o uso de componentes), e salvei como meu portfólio. 

A construção foi simples, o site está basicamente consumindo um arquivo json, que criei fazendo pesquisas sobre alguns dos jogos que mais gosto.

```json
[
    {
    "id": 2,
    "name":"God of War Ragnarok",
    "info": "God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Foi lançado em 9 de novembro de 2022 para PlayStation 4 e PlayStation 5. É o nono título da série God of War, o nono em ordem cronológica, e a sequência de God of War.",

    "banner": "https://images.alphacoders.com/117/1173124.jpg",
    "poster":"https://m.media-amazon.com/images/I/81I-Kiv9n8L.jpg",

    "company": {
      "name": "Santa Monica Studio",
      "description": " Santa Monica Studio é uma desenvolvedora norte-americana de jogos eletrônicos sediada em Los Angeles, Califórnia. O estúdio foi fundado em 1999 por Allan Becker e estava originalmente localizado em Santa Mônica, Califórnia, até se mudar para Playa Vista em 2014."
    },
    "avatars": "  Kratos, Atreus, Thor, Odin, Mimir, Freya, Brok, Sindri",
    "how_play": "Destrua tudo o que puder no cenário; Melhore as habilidades de Atreus; Entenda como funcionam os atributos de Kratos; Pratique o desapego e venda itens de nível ; Fique de olho no bestiário; Teste runas diferentes para conhecer ou; Saiba utilizar o machado de Kratos; Use o cenário a seu favor; Complete as missões secundárias",
    "game_time": 25
  }
  //outros jogos 
]
```
O estilo foi feito com o Tailwind, que é a tecnologia de estilização que mais estou usando ultimamente. É extramente produtivo, e como eu penso várias coisas ao mesmo tempo, consigo fazer várias coisas e desfazer rapidamente.

A barra de scroll eu estilizei o webkit e uma arquivo css comum.

### Como foi funciona o efeito na tela inicial?

Bom, para fazer o efeito eu usei os conceitos do flexbox, mas implementado com Tailwind. 

```tsx

 <div //limpei um pouco do estilos para focar apenas na animação quando passar o mouse
    className='flex w-full h-full'
    > 
      {//games é o meu json com os dados dos jogos
      games.map((game:MovieProps) => (
        //componente react-router-dom para navegar entre páginas
        <Link
        to={`/${game.id}`}
        className="flex-1 hover:flex-[5]" 
        >
          <img src={game.banner} alt={`Banner de ${game.name}`} />
        </Link>
      ))
      }
    </div>
```

Escolhi usar o <code>useMemo</code> ao invés do <code>useEffect</code>, por conta de ele "persistir", alguma função caso o a variável no seu array de dependências não mude, nesse caso o id do filme.

Ou seja, se não mudar o id e a pessoa abrir o filme duas vezes seguidas, ele vai persistir aqueles dados, não vai procurar de novo o jogo no json sempre que recarregar a tela mesmo que sejam os mesmos dados. Isso foi pensando em economizar processamento do navegador.

```tsx
//Tela dinâmica com react e react-router-dom
export function MoviePage() {
  const [game, setGame] = useState<GamesProps>()
  const { id } = useParams() //desestruturando o parâmetro id da url

  useMemo(() => {
    //vai retornar o primeiro objeto que corresponder a condição
    const gameFounded = games.find(game => game.id == Number(id))
    setGame(gameFounded)
  }, [id])

  return (
    //html da página
  )
}
```