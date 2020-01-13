import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"
import fetch from 'isomorphic-unfetch';

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={process.env.SNIPCART_API_KEY} id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>TeaHouse</h2>
          <p>An <strong>exclusive collection of teas</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  console.log('[URL]');
  console.log(process.env.SNIPCART_NEXTJS_FLOTIQ_BASE_URL+'/api/v1/content/product?hydrate=1');
  const res = await fetch(process.env.SNIPCART_NEXTJS_FLOTIQ_BASE_URL+'/api/v1/content/product?hydrate=1', {
    headers: {
      'x-auth-token': process.env.FLOTIQ_API_KEY
    }
  });
  const data = await res.json();
  
  const mapped_products = data.data.map(product => {
    const image =(product.productImage)[0];
    return { ...product, image: image };
   });

  return {
    products: mapped_products
  };
}

export default Index