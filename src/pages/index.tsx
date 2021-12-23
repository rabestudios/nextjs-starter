import type { NextPage } from 'next';
import SEO from '../components/shared/SEO';
import Footer from '../components/shared/Footer';
import Body from '../components/shared/Body';
import HomePage from '../modules/Home';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <SEO title="NextJS Starter" description="Starter kit for NextJS" />
      <Body>
        <HomePage />
      </Body>
      <Footer />
    </div>
  );
};

export default Home;
