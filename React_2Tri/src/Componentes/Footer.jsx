import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="flex bg-black text-white p-4 mb-4 text-lg justify-center">
        <h1 className="pe-5 text-corVerde">
          <Link to="/">Filminhos </Link>
        </h1>
      </footer>
    </>
  );
}


export default Footer;
