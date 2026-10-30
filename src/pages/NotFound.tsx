import { Link } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { ArrowLeft } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="notfound-container">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-desc">
          The quiet corner you were looking for seems to have moved. Let’s guide you back to our studio.
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
