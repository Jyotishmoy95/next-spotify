import { useRecoilValue } from "recoil"
import { playListState } from "../atoms/playlistAtom"
import Song from "./Song"

function Songs() {

    const playlist = useRecoilValue(playListState)

    return (
        <div className="text-white">
            {
                playlist?.tracks.items.map((song, i) => (
                    <Song key={song.track.id} track={song} order={i} />
                ))
            }
        </div>
    )
}

export default Songs
