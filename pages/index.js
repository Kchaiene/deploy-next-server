import React from 'react'
import Head from 'next/head'

const Home = () => {
  console.log("Home Render", );

  const onClick = async e => {
    try {
      const res = await fetch("/api/success");
      console.log("Fetch - 1", res);
      const data = await res.json();
      console.log("Fetch - 2", data);
    } catch (e) {
      console.log("Error ==> Fetch", e.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="hero">
        <h1>GOOOOD</h1>
        <button onClick={onClick}>Fetch</button>
      </div>
    </div>
  );
};

export default Home
