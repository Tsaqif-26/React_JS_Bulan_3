import './App.css'
import ToggleFunction from './components/Toggle'
import { useFetch } from './components/UseFetch'
import { useForm } from './components/UseForm'
import { useCounterToggle } from './components/UseHook'
import { useLocalStorage } from './components/UseLocalStorage'

function App() {

    const [theme, setTheme] = useLocalStorage("theme", "light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");


    const {values, errors, handleChange, handleSubmit} = useForm({
      name: "",
      email: ""
    })

  const {count, increment, decrement, on, toggle} = useCounterToggle()
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>


  return (
   <>
    <ToggleFunction/>

    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Custom Hook: useFetch</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>

    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Hooks Composition</h2>

      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> <hr />

      <h3>Status: {on ? "On" : "Off"}</h3>
      <button onClick={toggle}>Toggle</button>
    </div>

    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Custom Hook Untuk Form Handling</h2>

      <input
        name="name"
        placeholder="Nama"
        value={values.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <button type="submit">Kirim</button>
    </form>

    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "50vh",
        borderRadius: "8px",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h2>Custom Hook: useLocalStorage</h2>
      <p>Tema saat ini: {theme}</p>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
   </>
  )
}

export default App
