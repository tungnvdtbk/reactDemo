import MovieList from 'movieList';
import React from 'react';

import { memo } from 'react';


const HomeContent = memo(() => {
  console.log("render HomeContent");
  return (
    <div className="Homecontent">
        <h1>Home content testing</h1>
        <MovieList/>
    </div>
  );
})

export default HomeContent;
