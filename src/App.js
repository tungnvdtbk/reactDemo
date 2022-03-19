import logo from './logo.svg';
import './App.css';
import { MovieProvider } from './movieProvider';
import MovieList from './movieList';
import HomeContent from './HomeContent';
import { ContryContent } from './Feature/Country/countryDetail';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()



function App() {
  const clickPElement = () => {
    console.log("clickPElement");
  }
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <p onClick={() => clickPElement()}>
          test click
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
