import './App.css'

function App() {

  return (
    <>
      <h1>build and deploy with github action on push</h1>
      <p>{import.meta.env.VITE_PAGE_TITLE}</p>

      <h2>API KEY</h2>
      <p>{import.meta.env.VITE_API_KEY}</p>

      <h2>FIREBASE KEY</h2>
      <p>{import.meta.env.VITE_FIREBASE_KEY}</p>

    </>
  )
}

export default App
