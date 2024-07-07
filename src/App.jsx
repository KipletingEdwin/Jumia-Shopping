import './App.module.css'
import Navbar from './components/Navbar/Navbar'
import styles from './App.module.css'
import Search from './components/Search/Search'

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Search />
    </div>
  )
}

export default App
