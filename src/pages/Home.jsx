import { Link } from "react-router-dom";
import { useRef } from "react";
import songsData from "../data/songs.json";

function Home() {
  const songs = useRef(songsData.songs);

  return (
    <>
      <div className="home-wrapper">
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <div className="songs-wrapper">
          {songs.current.map((obj) => (
            <Link to={`/song/${obj.title.replaceAll(" ", "-")}`} key={obj.rank}>
              <div className="song-box">
                <h3>{obj.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
