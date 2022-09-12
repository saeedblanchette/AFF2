import React from 'react';
import Navigation from '../../components/Layout/Navigation';
import Head from 'next/head';
import Footer from 'components/Layout/Footer';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
const Investors = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section>
        <div className="">
          Establishment of a Joint Venture with the largest poultry operator in Mali « Société Marroco-Malienne
          d’aviculture » specialized in the production of a one-day meat- type and prawn-type as well as raising meat
          type chicken and hatching hens.
        </div>
        <h2>2018</h2>
        <div className="">
          Establishment of a second Joint Venture in Mauritania in partnership with local operators « Société
          Mauritanienne de volailles », la SMV and launching of construction of an integrated poultry complex which
          includes a feed manufacturing unit, a hatchery, production of meat-type chicken and an industrial poultry
          abattoir.
        </div>
        <div>
          <div className="flex">
            <div>
              La société Mauritanienne de volaille a permis la réalisation d’un complexe avicole comportant un premier
              batiment de la pondeuse, l'extension du couvoir, le materiel de transport de l'abattoir et de l'usine
              d'aliment.
            </div>
            <div>
              <ul>
                <li>3 Fermes de Reproducteurs chair</li>
                <li>1 Couvoir chair et ponte</li>
                <li>4 Fermes de poulets et 2 de pondeuses</li>
                <li>1 Usine d’aliments composés</li>
                <li>1 Abattoir moderne de volailles</li>
              </ul>
            </div>
          </div>
          <div>
            <Skeleton containerClassName="h-90" height={600} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Investors;
