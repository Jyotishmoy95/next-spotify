import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen w-full">
            <img src="https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg" className="w-1/3" alt="spotify" />
            {
                Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="bg-[#18D860] text-white p-5 rounded-full" onClick={ () => signIn(provider.id, { callbackUrl: '/' })}>
                            Login with {provider.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}
