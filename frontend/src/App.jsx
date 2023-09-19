import React from "react"
import {Routes, Route} from "react-router-dom"
import createBook from "./pages/createBook"
import editBook from "./pages/editBook"
import deleteBook from "./pages/deleteBook"
import homeBook from "./pages/homeBook"
import showBook from "./pages/showBook"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<homeBook />}/>
      <Route path="/books/create" element={<createBook />}/>
      <Route path="/books/edit/:id" element={<editBook />}/>
      <Route path="/books/details/:id" element={<showBook />}/>
      <Route path="/books/delete/:id" element={<deleteBook />}/>
    </Routes>
  )
}

export default App