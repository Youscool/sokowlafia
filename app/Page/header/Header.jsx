export default function Header() {
    return<>
    <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <ul class="info">
            <li><i class="fa fa-envelope"></i> info@company.com</li>
            <li><i class="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4">
          <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
     <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="/" className="logo">
                        <h1>Villa</h1>
                    </a>
                  
                    <ul className="nav">
                      <li><a href="/" className="active">Home</a></li>
                      <li><a href="#">Properties</a></li>
                      <li><a href="#">Property Details</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
    </>
}