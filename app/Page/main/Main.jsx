"use client";

import { Carousel } from "react-bootstrap";
import CounterUp from "./Counter";

export default function Main() {
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
      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src="/images/featured.jpg" alt="Featured" />
                <a href="/" aria-label="Voir la propriété">
                  <img
                    src="/images/featured-icon.png"
                    alt="Icone"
                    style={{ maxWidth: "50px", padding: 0 }}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| A propos</h6>
                <h2>Tous pour la satisfaction &amp; de nos clients</h2>
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
                      Get <strong>the best villa</strong> website template in HTML,
                      CSS and Bootstrap for your business. TemplateMo provides you
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="/images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Terrain
                      <br />
                      <span>sans litige</span>
                    </h4>
                  </li>
                  <li>
                    <img src="/images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Titre foncier
                      <br />
                      <span>garanti</span>
                    </h4>
                  </li>
                  <li>
                    <img src="/images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>
                      Paiement
                      <br />
                      <span>fiable</span>
                    </h4>
                  </li>
                  <li>
                    <img src="/images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
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
      <CounterUp/>
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
                  <img src="/images/terrain-1.jpg" alt="Property 1" />
                </a>
                <span className="category">Luxury Villa</span>
                <h6>$2.264.000</h6>
                <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                <ul>
                  <li>Bedrooms: <span>8</span></li>
                  <li>Bathrooms: <span>8</span></li>
                  <li>Area: <span>545m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>6 spots</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <img src="/images/terrain-2.jpg" alt="Property 2" />
                </a>
                <span className="category">Luxury Villa</span>
                <h6>$1.180.000</h6>
                <h4><a href="property-details.html">54 Mid Street Florida, OR 27001</a></h4>
                <ul>
                  <li>Bedrooms: <span>6</span></li>
                  <li>Bathrooms: <span>5</span></li>
                  <li>Area: <span>450m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>8 spots</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <img src="/images/terrain-3.jpg" alt="Property 3" />
                </a>
                <span className="category">Luxury Villa</span>
                <h6>$1.460.000</h6>
                <h4><a href="property-details.html">26 Old Street Miami, OR 38540</a></h4>
                <ul>
                  <li>Bedrooms: <span>5</span></li>
                  <li>Bathrooms: <span>4</span></li>
                  <li>Area: <span>225m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>10 spots</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

            {/* More properties (4..6) */}
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <img src="/images/maison-1.jpg" alt="Property 4" />
                </a>
                <span className="category">Apartment</span>
                <h6>$584.500</h6>
                <h4><a href="property-details.html">12 New Street Miami, OR 12650</a></h4>
                <ul>
                  <li>Bedrooms: <span>4</span></li>
                  <li>Bathrooms: <span>3</span></li>
                  <li>Area: <span>125m2</span></li>
                  <li>Floor: <span>25th</span></li>
                  <li>Parking: <span>2 cars</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <img src="/images/maison-2.jpg" alt="Property 5" />
                </a>
                <span className="category">Penthouse</span>
                <h6>$925.600</h6>
                <h4><a href="property-details.html">34 Beach Street Miami, OR 42680</a></h4>
                <ul>
                  <li>Bedrooms: <span>4</span></li>
                  <li>Bathrooms: <span>4</span></li>
                  <li>Area: <span>180m2</span></li>
                  <li>Floor: <span>38th</span></li>
                  <li>Parking: <span>2 cars</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item">
                <a href="property-details.html">
                  <img src="/images/maison-3.jpg" alt="Property 6" />
                </a>
                <span className="category">Modern Condo</span>
                <h6>$450.000</h6>
                <h4><a href="property-details.html">22 New Street Portland, OR 16540</a></h4>
                <ul>
                  <li>Bedrooms: <span>3</span></li>
                  <li>Bathrooms: <span>2</span></li>
                  <li>Area: <span>165m2</span></li>
                  <li>Floor: <span>26th</span></li>
                  <li>Parking: <span>3 cars</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
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

              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src="/assets/images/phone-icon.png" alt="phone" style={{ maxWidth: 52 }} />
                    <h6>
                      010-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="item email">
                    <img src="/assets/images/email-icon.png" alt="email" style={{ maxWidth: 52 }} />
                    <h6>
                      info@villa.co
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="Your E-mail..." required />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" placeholder="Your Message" />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
