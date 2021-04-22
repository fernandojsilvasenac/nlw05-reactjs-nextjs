export default function Home(props) {
  // console.log(props.episodes);

  return (
    <div>
    <h1>Index</h1>
    {/* <p>{JSON.stringify(props.episodes)}</p> */}
  </div>
  )
}
// Esta chamada é executada toda vez que alguém acessa nossa home da aplicação, 
// mas se os nossos dados não sofrem alterações não seria interessante evitar o consumo do nosso servidor 
// entregando o conteúdo que foi montado em outro momento?

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3333/episodes");
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     },
//   };
// }

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // tempo em segundos em que a página será cacheada
  };
}
