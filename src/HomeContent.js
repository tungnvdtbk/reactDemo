
import MovieList from './movieList';
import { memo } from 'react';


const HomeContent = memo(() => {
  console.log("render HomeContent");
  return (
    <div className="Homecontent">
        <MovieList/>
    </div>
  );
})

export default HomeContent;
