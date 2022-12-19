export function BackButton() {

  return (
   <button
   onClick={() => history.back()}
   className="fixed top-3 left-3 bg-black/80 p-2 px-3 rounded-sm text-sm shadow-md hover:-translate-y-1 hover:bg-black transition-all"
   >
    Voltar
   </button>
 )
}
