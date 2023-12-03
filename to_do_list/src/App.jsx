import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem"

function App() {

const [state,setstate]=useState([
  {id: nanoid(8),content: "item 1"},
  {id: nanoid(8),content: "item 2"},
  {id: nanoid(8),content: "item 3"},
])
//ajouder des todo

const [todo,settodo]=useState("")

//si g rin ds la todo et je valide , c false parskon ve pa la montre
const [valid,setvalid]=useState(false)

//console.log(state);
function deleteTodo(id){
  setstate(state.filter(todo=>todo.id!==id))
}

function handleSubmit(e){
  //pr ke sa fai la peoula
  e.preventDefault()

  if(todo==="")
  {
    setvalid(true)
    return
  }
  //cre un nouvo tablo pr le nouvo todo kon ajout
  setstate([...state,{id:nanoid(),content: todo}])
  settodo("")//pr effacer skil yave ds le blan pr ecrir
  setvalid(false)
}


  return (
   <div className="h-screen ">
      <div className="max-w-41 mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">la to do list</h1>
          <form onSubmit={handleSubmit} className="mb-10">
            <label htmlFor="todo-item"
            className="text-slate-50">
              Ajouter une chose a faire</label>
            <input 
            //pr ajouter un to doo
            value={todo}
            onChange={e=>settodo(e.target.value)}
            //juske la
            type="text" 
            className="mt-1 block w-full rounded"/>
           {valid &&(
            <p className="text-red-400"> Ajouter d'abord du contenu</p>
           )}
           <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w[115px]">Ajouter</button>
          </form>
          <ul>
            {/* //if true ca va fair skil ya ecri */}
            {state.length===0 && (
            <li className="text-slate-50 text-md">
              Pas d'items a afficher...</li>)}
            {state.length>0 &&
            state.map(item =>(
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
            ))}
          </ul>
      </div>
   </div>
  )
}

export default App
