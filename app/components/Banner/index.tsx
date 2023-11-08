import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useState } from "react";
import "../../globals.css"

const Banner = () => {
  const [more, setMore] = useState(false);
  const [msg, setMsg] = useState("Voir Plus");

  const fMore = () => {
    !more ? setMsg("Voir moins") : setMsg("Voir plus");
    more ? setMore(false) : setMore(true);
  };

  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          {/* Left Side */}
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Aseesim centrale
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {/* Conditional rendering based on the 'more' state */}
              {!more && (
                <p className="text-justify">
                  <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                    Chers étudiants, stagiaires, et élèves ivoiriens du Maroc,
                  </p>
                  <p className="parag text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                    Nous sommes ravis de vous accueillir au sein de l'ASEESIM,
                    une association étudiante dynamique et engagée, créée dans
                    le but de rassembler et de soutenir la communauté
                    estudiantine ivoirienne résidant au Maroc. Notre association
                    vise à offrir un espace d'échange, d'entraide, et de
                    convivialité pour tous ceux qui poursuivent leurs études ou
                    effectuent des stages dans ce magnifique pays qu'est le
                    Maroc.
                  </p>
                </p>
              )}

              {more && (
                <div className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                  <p>
                    <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                      Chers étudiants, stagiaires, et élèves ivoiriens du Maroc,
                    </p>
                    <p className="parag">
                      Nous sommes ravis de vous accueillir au sein de l'ASEESIM,
                      une association étudiante dynamique et engagée, créée dans
                      le but de rassembler et de soutenir la communauté
                      estudiantine ivoirienne résidant au Maroc. Notre
                      association vise à offrir un espace d'échange, d'entraide,
                      et de convivialité pour tous ceux qui poursuivent leurs
                      études ou effectuent des stages dans ce magnifique pays
                      qu'est le Maroc.
                    </p>
                  </p>
                  <br/>
                  <br/>
                  <h1 className="text-center obj">Nos objectifs </h1>
                  <div className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                    <p className="parag">
                    <strong>Faciliter l'intégration :</strong> Nous comprenons
                    que le passage dans un pays étranger peut être une étape
                    délicate. C'est pourquoi nous sommes là pour vous
                    accompagner dans votre intégration au Maroc et faciliter
                    votre adaptation à la vie étudiante marocaine.
                    </p>
                    <br />
                    <p className="parag">
                    <strong>Favoriser les échanges culturels :</strong> Nous
                    croyons que la diversité culturelle est une richesse.
                    L'ASEESIM organise des événements et des activités
                    culturelles qui permettent de partager nos traditions, notre
                    histoire et nos coutumes avec nos camarades marocains et
                    d'autres nationalités.
                    </p>
                  </div>
                </div>
              )}
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                {/* Uncomment the button below to add a link */}
                {/* <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href='#cook-section'>Lets cook</Link></button> */}
                <button
                  className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink"
                  onClick={fMore}
                >
                  {msg}
                </button>
              </div>
            </Fade>
          </div>

          {/* Right Side */}
          <div className="col-span-6 flex justify-center relative" style={{maxHeight:'600px'}}>
              <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
                <Image
                  src={"/images/Banner/cooperation.png"}
                  alt="drapeaux civ maroc"
                  width={68}
                  height={68}
                />
                <p className="text-lg font-normal">
                  Coopération <br /> Côte d'Ivoire Maroc.
                </p>
              </div>
              <Image
                src="/images/Banner/civ.jpg"
                alt="drapeaux civ"
                width={1000}
                height={405}
                className="drap-img"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
