
import './App.css';
import React, { useEffect } from 'react';
import  MovieProvider  from './movieProvider';

import HomeContent from './HomeContent';
import { ContryContent } from './Feature/Country/countryDetail';

import { QueryClient, QueryClientProvider } from 'react-query'
import cityApi from 'api/cityApi.ts';


const queryClient = new QueryClient()


function App() {

  useEffect(() => {
    var data = cityApi.getAll().then(data => console.log("Axios client get:", data));
    console.log('useEffect', data);
  });

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
