"use client";

import { Carousel } from "react-bootstrap";
import CounterUp from "./Counter";
import Image from "next/image";
import Service from "@/app/components/Services";
import { useEffect } from "react";

import AOS from "aos"
import "aos/dist/aos.css"
export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Carousel className="main-banner">

        {/* SLIDE 1 */}
        <Carousel.Item>
          <div className="banner-slide banner-1"></div>

          <Carousel.Caption className="banner-caption">
            <h2>
              Votre futur
              <br />
              chez-vous commence ici
            </h2>
            <span className="category">
              Des maisons modernes et sécurisées, <em>oû que vous soyez dans le monde</em>
            </span>
          </Carousel.Caption>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div className="banner-slide banner-2"></div>

          <Carousel.Caption className="banner-caption">
            <h2>
              Confort et élégance
              <br />
              à chaque détail
            </h2>
            <span className="category">
              Des constructions qui allient, <em>design comtemporain et durabilité</em>
            </span>
          </Carousel.Caption>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div className="banner-slide banner-3"></div>

          <Carousel.Caption className="banner-caption">
            <h2>
              Investissez!
              <br />
              Dans votre avenir, chez vous
            </h2>
            <span className="category">
              Des projets immobiliers, <em>fiable, pensés pour la diaspora.</em>
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* FEATURED */}
      <div className="featured section" id="featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image" data-aos="fade-right" data-aos-delay="200">
                <Image src="/images/about.jpg" width={320} height={530} alt="About" className="w-100 object-fit-cover rounded-3" />
                <a href="/" aria-label="Voir la propriété">
                  <Image
                    src="/images/featured-icon.png"
                    alt="Icone"
                    height={50}
                    width={50}
                    style={{ maxWidth: "50px", padding: 0 }}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="400">
              <div className="section-heading">
                <h6>| A propos</h6>
                <h4>Tous pour la satisfaction &amp; de nos clients</h4>
              </div>

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Pourquoi choisir Sokow Lafia ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Nous sommes une <strong>entreprise immobilière</strong> spécialisée dans la vente de
                      <strong>terrains</strong>, la <strong>construction</strong>, le
                      <strong>suivi immobilier et l’architecture</strong>,
                      dédiée principalement à la <strong>diaspora</strong> souhaitant investir en toute
                      sécurité dans son pays d’origine.<br />

                      Notre mission est d’offrir à nos clients une tranquillité
                      d’esprit totale, en prenant en charge chaque étape de leur
                      projet immobilier : de l’acquisition du terrain jusqu’à la
                      remise finale du bien. Grâce à une équipe qualifiée, un processus
                      transparent et un suivi rigoureux à distance, nous permettons à nos
                      clients vivant à l’étranger de construire et d’investir en toute confiance.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-table" data-aos="fade-left" data-aos-delay="600">
                <ul>
                  <li>
                    <Image src="/images/info-icon-01.png" width={42} height={42} alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Terrain
                      <br />
                      <span>sans litige</span>
                    </h4>
                  </li>
                  <li>
                    <Image src="/images/info-icon-02.png" width={42} height={42} alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      TF
                      <br />
                      <span>garanti</span>
                    </h4>
                  </li>
                  <li>
                    <Image src="/images/info-icon-03.png" width={42} height={42} alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Paiement
                      <br />
                      <span>fiable</span>
                    </h4>
                  </li>
                  <li>
                    <Image src="/images/info-icon-04.png" width={42} height={42} alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Sécurité
                      <br />
                      <span>24/7</span>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**SERVICE SECTION */}
      <Service />
      {/* VIDEO SECTION */}
      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video</h6>
                <h2>Voyez par vous meme notre travail</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/P_9FUuiU248"
                  title="From Empty Yard to Modern Homes: Full Build Timelapse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COUNTERUP */}
      <CounterUp />
      {/* PROPERTIES */}
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Nos propositions</h6>
                <h2>Nous vous proposons les meilleurs terrains et maisons</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/** Repeated property items */}
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/terrain-1.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 1" />
                </a>
                <span className="category">Parcelle</span>
                <h6>2.264.000 FCFA</h6>
                <h4><a href="property-details.html">Kalaban Coura</a></h4>
                <ul>
                  <li>Superficie: <span>650m2</span></li>
                  <li>Accéssibilité: <span>très bonne</span></li>
                  <li>Terrain: <span>colline</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/terrain-2.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 2" />
                </a>
                <span className="category">Parcelle</span>
                <h6>1.180.000 FCFA</h6>
                <h4><a href="property-details.html">Kati fouga</a></h4>
                <ul>
                  <li>Superficie: <span>230m2</span></li>
                  <li>Accéssibilité: <span>bonne</span></li>
                  <li>Terrain: <span>plat</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/terrain-3.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 3" />
                </a>
                <span className="category">Parcelle</span>
                <h6>1.460.000 FCFA</h6>
                <h4><a href="property-details.html">Kabala - N'Golobougou</a></h4>
                <ul>
                  <li>Superficie: <span>350m2</span></li>
                  <li>Accéssibilité: <span>moyenne</span></li>
                  <li>Terrain: <span>plat</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

            {/* More properties (4..6) */}
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/maison-1.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 4" />
                </a>
                <span className="category">Duplex R+1 Modern</span>
                <h6>80M FCFA</h6>
                <h4><a href="property-details.html">Golf</a></h4>
                <ul>
                  <li>Chambre: <span>6</span></li>
                  <li>Toilette: <span>4</span></li>
                  <li>Superficie: <span>125m2</span></li>
                  <li>Annexe: <span>oui</span></li>
                  <li>Parking: <span>2 voitures</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/maison-2.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 5" />
                </a>
                <span className="category">Villa</span>
                <h6>925M FCFA</h6>
                <h4><a href="property-details.html">Attbougou - 1008</a></h4>
                <ul>
                  <li>Chambre: <span>12</span></li>
                  <li>Toilette: <span>6</span></li>
                  <li>Superficie: <span>725m2</span></li>
                  <li>Annexe: <span>oui</span></li>
                  <li>Parking: <span>3 voitures</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <Image src="/images/maison-3.jpg" width={150} height={100} className={"w-100 h-100 object-fit-cover"} alt="Property 6" />
                </a>
                <span className="category">Duplex Modern</span>
                <h6>450M FCFA</h6>
                <h4><a href="property-details.html">ACI 2000</a></h4>
                <ul>
                  <li>Chambre: <span>4</span></li>
                  <li>Toilette: <span>4</span></li>
                  <li>Superficie: <span>95m2</span></li>
                  <li>Annexe: <span>non</span></li>
                  <li>Parking: <span>1 voitures</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visiter</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact section">
        <div className="container">
          <div className="row g-2">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contacter Nous</h6>
                <h2>En un clic contactez nos agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: "10px", boxShadow: "0px 0px 15px rgba(0,0,0,0.15)" }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-lg-5 mt-2 mt-lg-0">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Nom complet</label>
                      <input type="text" name="name" id="name" placeholder="Votre nom..." autoComplete="on" required />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder="Votre E-mail..." required />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" placeholder="Votre Message" />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Envoyer Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-2 mt-lg-0">
            <div className="col-lg-6">
              <div className="item phone">
                <Image src="/images/phone-icon.png" width={42} height={42} alt="phone" />
                <h6>
                  010-020-0340
                  <br />
                  <span>Numéro de téléphone</span>
                </h6>
              </div>
            </div>

            <div className="col-lg-6 mt-2 mt-lg-0">
              <div className="item email">
                <Image src="/images/email-icon.png" alt="email" width={42} height={42} />
                <h6>
                  so@site.com
                  <br />
                  <span>Business Email</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
