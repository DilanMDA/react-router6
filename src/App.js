import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<div>Home page</div>} />
        <Route exact path='/about' element={<div>about</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
