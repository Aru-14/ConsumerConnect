import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';

function Home(){
    const navigate=useNavigate();
    

    function goToProducts(){
        navigate('/ProductList')
    }
    return(
        <>
          <h1 className="text-center text-4xl  mt-10 head"> <b >Welcome to AccessMart</b></h1>
        <div className='flex gap-4 justify-center items-center mt-10'>
        {/* <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded" onClick={goToAbout}>About</button> */}
        <button className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded' onClick={goToProducts}>Products</button>
        </div>
        <Navbar/>
        
        </>
    )
}

export default Home;