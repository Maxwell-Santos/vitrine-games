import { Route, Routes } from "react-router-dom"
import { Index } from "./pages/Index"
import { Movie } from "./pages/Movie"

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/:id' element={<Movie />} />
    </Routes>
  )
}