import { useState } from "react"

export default function App() {
  //Lista de Todos
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  //Siempre que se tenga unestado con un arreglo o un objeto, tenemos que hacer un propagador, si no lo hacemos simplemente no se va a renderizar (por la ubicación de memoria)
  function addTodo() {

    //  todos.push(text)

    setTodos([...todos, text])

  }
  function removeTodo(indexToRemove){
     // todos.splice(indexToRemove,1)
      //setTodos([...todos])
      const newTodos = todos.filter((todo,i)=> i !== indexToRemove)
      setTodos(newTodos)
  }
  function onSubmit(event) {
    event.preventDefault()
    addTodo()
    setText("")
  }
  ///Los inputs deben estar ligados a un estado de REACT, deben poner el value en el estado asignado al input y deben también tener todos un onChange

  return (

    <main className="w-full min-h-screen flex flex-col">

      <form
        className="flex flex-row gap-2 justify-center p-5 "
        onSubmit={onSubmit}
      >

        <input
          name="todo"
          type="text"
          placeholder="Ingresa una tarea"
          className="p-2 rounded text-black w-full max-w-screen-sm"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />

        <button className="bg-white text-black px-3 rounded" > + Agregar</button>

      </form>

      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-3">

        {
          todos.length === 0 && <p className="text-white/50">Sin tareas pendientes 🙅‍♂️</p>
        }
        {
          todos.map((todo, i) => {
            return (

              <div key={`todo-${i}`} className="bg-white/10 rounded p-4 flex flex-row justify-between select-none">

                <span className="select-none">{todo}</span>
                <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex" onClick={() => removeTodo(i)}> x </span>

              </div>

            )
          })
        }

      </div>

    </main>

  )



}
