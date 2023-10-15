import { useParams } from "react-router-dom";
import { useMemo } from "react";
import songsData from "../data/songs.json";
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)

  const { songsTitle } = useParams();

  const searchedSong = useMemo(() => {
    return songsData.songs.find((song) => song.tile === songsTitle);
  }, [songsTitle]);

  const { title, artist, album, year } = searchedSong;

  return (
    <>
      <div>
        <h2>Song Information</h2>
        {/* TODO: Display song details or a "Song not found!" message */}

        <div className="song-card">
          <h3>{title}</h3>
          <p>{artist}</p>
          <p>{year}</p>
          <p>{album}</p>
        </div>
      </div>
    </>
  );
}

export default SongInfo;
