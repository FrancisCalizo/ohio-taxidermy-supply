import Head from 'next/head';

export default function Home() {
  console.log('hello world');
  return (
    <div>
      <Head>
        <title>Influencer</title>
        <meta name="description" content="Influencer Mockup App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
}
