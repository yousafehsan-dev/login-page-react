
import './App.css';
import Navbar from './components/Navbar';
import Contant from './components/Contant';
import Contactfom from './components/contantfom/Contactfom';

function App() {
  return (
   <div>
         <Navbar/>
        <main className='main-container'> 
           <Contant/>
           <Contactfom/> 
        </main>
         
   </div>
  );
}

export default App;
