import Nav from './components/Nav';
import Main from './components/Main';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <About />
       <hr  className='w-[70%] mt-4 border-gray-500 mb-16 mx-auto'/>
     <Transformations />
      <hr  className='w-[70%] mt-4 border-gray-500 mb-16 mx-auto'/>
      <Subscriptions />
      <hr  className='w-[70%] mt-[10rem] border-gray-500 mb-16 mx-auto'/>
      <Services />
      <Footer />
    </div>
  )
}
