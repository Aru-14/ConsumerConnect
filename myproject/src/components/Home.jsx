// import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import ProductList from './ProductList';
function Home(){
    
    return(
        <><Navbar/>
          <h1 className="text-center text-4xl  mt-30 head text-purple-700 italic text-shadow-lg"> <b >Welcome to ConsumerConnect</b></h1>
        <div className='flex gap-4 justify-center items-center mt-10'>
      
        </div>
        
        <ProductList/>
        </>
    )
}

export default Home;