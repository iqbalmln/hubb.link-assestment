import Head from 'next/head'

export default function Home(props) {
  const {products, links} = props
  return (
    <div className="w-full h-full bg-yellow-hubb p-5 md:hidden">
      <Head>
        <title>Hubb Assignment</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <main className="flex flex-col gap-8">
        <header className="flex flex-col justify-center items-center">
          <div>
            <img src="/Profile Picture.jpg" alt="" className="w-28 h-28 rounded-full"/>
          </div>
          <div className="flex items-center justify-center">
            <i className="bx bxl-instagram"></i>
            <span>@hubb.link</span>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => {
            return (
              <div key={product.id} className="bg-white p-2 flex flex-col gap-2 items-start rounded-md">
                <img src={product.product_img} alt="" className="w-full h-44"/>
                <div>
                  <p className="text-xs">{product.product_title}</p>
                  <p className="text-base font-semibold">{product.product_price}</p>
                </div>
                <a href={product.product_url} target="_blank" className="px-5 py-1 bg-yellow-hubb text-xs rounded-lg">Lihat Produk</a>
              </div>
            )
          })}
        </div>
          {links.map(link => {
            return (
              <footer key={link.id} className="flex flex-col gap-2 text-center">
                <a href={link.product_url} target="_blank" className="bg-white py-5 rounded-md">{link.link_title}</a>
              </footer>
            )
          })}
      </main>

      
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://hubb-server.herokuapp.com/test-product');
  const link = await fetch('https://hubb-server.herokuapp.com/test-link');
  const products = await res.json();
  const links = await link.json();
  return {
    props: {
      products,
      links
    }
  }
}