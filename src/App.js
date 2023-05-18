import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import 


function App() {
    const [count,setCount] = useState(0);
    return (
      <UserProvider value={{count,setCount}}>
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/product/:id' element={<Product/>}/>
              <Route path='/myFavourites' element={<Like/>}/>
          </Routes>
      </div>
      </UserProvider>
    );
}

export default App;
