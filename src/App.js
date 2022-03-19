
import './App.css';
import  MovieProvider  from './movieProvider';

import HomeContent from './HomeContent';
import { ContryContent } from './Feature/Country/countryDetail';

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()



function App() {
  const clickPElement = () => {
    console.log("clickPElement");
  }
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <p onClick={() => clickPElement()}>
          test click hello world firstbuild
        </p>
        <ContryContent/>
        <MovieProvider>      
          <HomeContent />
        </MovieProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
