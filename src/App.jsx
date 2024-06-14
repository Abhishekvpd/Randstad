import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { CardList, Dashboard } from "./pages"
import Layout from "./Layout/Layout"
import SearchContextProvider from "./components/context/searchContext/SearchContextProvider"

const App = () => {
  return (
    <SearchContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="/album/:id" element={<CardList />}></Route>
          </Route>
        </Routes>
      </Router>
    </SearchContextProvider>
  )
}

export default App