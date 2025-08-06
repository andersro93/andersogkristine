import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            </Head>

            {/* Setting the full height with black background */}
            <div className="flex items-center justify-center min-h-screen bg-black flex-col">
                <h1 className="text-8xl font-bold font-serif text-white mb-6">Hun sa ja!</h1>
                <p className="text-xl text-white">Mer informasjon kommer snart...</p>
            </div>
        </div>
    );
}
