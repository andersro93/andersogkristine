import Head from 'next/head';

export default function Home() {
    const date = "26. September 2026";
    
    return (
      <div>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
          </Head>
          
          <div className="border-3 border-white h-[400px] w-[400px] mx-auto mt-20 p-10 flex flex-col items-center justify-center rounded-full darker-green">
              <h1 className="text-6xl text-white alex-brush-regular mb-6">Vi gifter oss!</h1>
              <p className="text-xl text-white alex-brush-regular">
                  Hold av lørdag <strong>{date}</strong>!
              </p>
          </div>
      </div>
    );
}
