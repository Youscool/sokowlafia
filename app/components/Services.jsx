export default function Service() {
    return<section className="container py-5" id="services">
 <div className="section-heading text-center">
                <h6>| Nos Services</h6>
                <h4>Des solutions immobilières clés en main pour la diaspora</h4>
              </div>
  <div className="row g-4">
    {[
      {
        title: "Vente de terrains",
        desc: "Terrains sécurisés avec documents légaux et emplacement stratégique.",
        img: "/images/service-terrain.jpg",
      },
      {
        title: "Construction",
        desc: "Réalisation de maisons et bâtiments modernes clés en main.",
        img: "/images/service-construction.jpeg",
      },
      {
        title: "Suivi immobilier",
        desc: "Suivi de chantier à distance avec rapports, photos et vidéos.",
        img: "/images/service-suivi.jpg",
      },
      {
        title: "Architecture",
        desc: "Conception de plans modernes adaptés à vos besoins.",
        img: "/images/service-architecture.jpg",
      },
    ].map((service, index) => (
      <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={`${index}00`}>
        <div
          className="position-relative text-white rounded overflow-hidden"
          style={{
            height: "300px",
            backgroundImage: `url(${service.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div className="position-relative h-100 d-flex flex-column justify-content-center text-center p-3">
            <h5 className="fw-bold text-color">{service.title}</h5>
            <p className="small mb-0 text-white">{service.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

}