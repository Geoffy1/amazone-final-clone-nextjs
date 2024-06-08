import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductFeed from '@/components/ProductFeed';
import Head from 'next/head'

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
        <Head>
            <title>Amazone G.O</title>
        </Head>
        
        <h1>Hey speedy weby!</h1>
        <Header />

        <main className='max-w-screen-2xl mx-auto' >
            <Banner />

            <ProductFeed products={products}/>

        </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }
    const products = await response.json();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
