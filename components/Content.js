import { ChevronDownIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { shuffle } from "lodash"
import { useRecoilState, useRecoilValue } from "recoil"
import { playListIdState, playListState } from '../atoms/playlistAtom'
import useSpotify from "../hooks/useSpotify"
import Songs from "./Songs"

const colors = [
    'from-indigo-500',
    'from-purple-500',
    'from-pink-500',
    'from-red-500',
    'from-orange-500',
    'from-yellow-500',
    'from-green-500',
    'from-teal-500',
    'from-blue-500',
]

function Content() {

    const { data:session } = useSession()
    const [color, setColor] = useState(null)
    const playListId = useRecoilValue(playListIdState)
    const [playList, setPlayList] = useRecoilState(playListState)
    const spotifyApi = useSpotify()

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playListId])

    useEffect(() => {
        spotifyApi.getPlaylist(playListId).then(data => {
            setPlayList(data.body)
        }).catch(err => {
            console.log(err)
        })
    }, [spotifyApi, playListId])

    return (
        <div className="flex-grow text-white">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                    <img src={session?.user.image} alt="" className="rounded-full w-10 h-10" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </header>
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
                <img className="w-44 h-44 shadow-2xl" src={playList?.images?.[0]?.url} alt="" />
                <div>
                    <p>PLAYLIST</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playList?.name}</h1>
                </div>
            </section>

            <div>
                <Songs />
            </div>
        </div>
    )
}

export default Content
