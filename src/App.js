import {Container} from "./Components/index"
import {Header ,Footer} from "./sections/index"
import {Home ,Profile,Details,Browse,Stream} from './Pages/index'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css'
const App =()=>{
  return(
    <>
      <Router>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/browes' element={<Browse />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/details" element={<Details />} />
              <Route path="/stream" element={<Stream />} />
              
            </Routes>
          </Container>
          <Footer />
      </Router>
    </>
  )
}

export default App;