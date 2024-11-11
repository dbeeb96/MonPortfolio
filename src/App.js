import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';


function App() {
 
  return(
<div className="App">
<div>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top top-bar">
    <a className="navbar-brand" href="#"><span className="title1">Sama</span> <span className="title2">Portfolio</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link home-link" href="#home">Acueil <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">À propos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#formation">Formations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Compétence</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projets">Projets réalisés</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  {/* Home Section */}
  <section id="home" className="home">
    <div className="container text-center">
      <div id="particles-js" />
      <div className="animated-text">
        <div className="name-container">
          <h1 id="auto-writer" className="animate__animated animate__fadeInDown" />
        </div>
        <div className="profile-container">
          <p id="auto-writer-p" className="animate__animated animate__fadeInUp" style={{visibility: 'hidden', opacity: 0, animationDelay: '1s'}} />
        </div>
        {/* Social Media Icons */}
        <div className="social-icons">
        <a href="https://github.com/dbeeb96" target="_blank" title="GitHub"><i className="fab fa-github" /></a>
          <a href="https://www.sololearn.com/fr/profile/16888356" target="_blank"><i class="fas fa-chalkboard-teacher"></i></a>
          <a href="https://www.linkedin.com/in/babacar-diagne-2aa85716a" target="_blank"><i className="fab fa-linkedin" /></a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about">
    <div className="container">
      <h2>À PROPOS DE MOI</h2>
      <div className="about">
        <div className="row">
          <div className="col-md-6">
            <div className="about-desc">
              <p>« 
              Je suis Babacar Diagne, étudiant en ingénierie logicielle à l'Université 
              Numérique Cheikh Hamidou Kane (ex-UVS). Passionné par l'informatique et 
              les nouvelles technologies, je consacre chaque journée à ma machine, entre le codage,
             le design et la recherche.

            Doté d'un sens de l'organisation aiguisé, je travaille en collaboration avec mon équipe
             pour réfléchir à des projets innovants tels que la création de projets web et mobiles.
              Mon projet professionnel vise à élargir ma startup, créant ainsi un environnement 
              technologique pittoresque capable de fournir toutes les fonctionnalités nécessaires 
              pour faciliter la vie quotidienne des utilisateurs.

            Ma polyvalence, ma rigueur et mon sens de l'organisation m'ont permis d'acquérir 
            une expérience de 6 mois en tant que développeur web au sein d'une entreprise. 
            Durant cette période, j'ai travaillé sur des projets web avancés, intervenant
             de manière proactive.

            N'hésitez pas à télécharger mon CV pour obtenir plus de détails sur mon parcours,
             mon expérience professionnelle et mes compétences.

              </p>
              <a href="/cvbabacar2023.pdf" download className="download-button">
                <i className="fas fa-download" />Télécharger mon cv
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profil-pic">
              <img src="/about-me.png"
               className="img-fluid" style={{maxWidth: 800, maxHeight: 550}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Formation Section */}
  <section id="formation">
    <div className="container">
      <h2>FORMATIONS &amp;&amp; DIPLOMES</h2>
      <div className="formation-item">
        <h3>Mon parcours académique</h3>
        <p> Voici un aperçu de mon parcours éducatif :</p>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card-title">
            <div className="card border-danger mb-3" style={{maxWidth: '18rem'}}>
              <div className="card-header">Baccaleauréat</div>
              <span className="circle-icon">
                <i className="fas fa-graduation-cap" />
              </span>
              <div className="card-body text-danger">
                <h5 className="card-title text-center">2016-2017</h5>
                <br /><br />
                <h5 className="card-title text-center">Lycée de SOUM</h5>
                <p className="card-text">Baccaleauréat en Science Expérimentale.</p>
              </div>
            </div>
          </div>
  
        </div>
        <div className="col-md-3">
          <div className="card-title">
            <div className="card border-warning mb-3" style={{maxWidth: '18rem'}}>
              <div className="card-header">Licence</div>
              <span className="circle-icon">
                <i className="fas fa-graduation-cap" />
              </span>
              <div className="card-body text-warning">
                <h5 className="card-title text-center">2019-2020</h5>
                <h5 className="card-title text-center">UNCHK(Université Numérique Cheikh Hamidou Kane)</h5>
                <p className="card-text">Licence en Mahtématique Appliquée et Informatique.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-title">
            <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
              <div className="card-header">IMSAS</div>
              <span className="circle-icon">
                <i className="fas fa-graduation-cap" />
              </span>
              <div className="card-body text-success">
                <h5 className="card-title text-center">2021-2022</h5>
                <h5 className="card-title text-center">IMSAS(Instotut des Métiers et Science Appliquée au Sénégal)</h5>
                <p className="card-text">Formation en Infogaphie à L'IMSAS.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-title">
            <div className="card border-info mb-3" style={{maxWidth: '18rem'}}>
              <div className="card-header">Master (En cours)</div>
              <span className="circle-icon">
                <i className="fas fa-graduation-cap" />
              </span>
              <div className="card-body text-info">
                <h5 className="card-title text-center">2023-2024</h5>
                <h5 className="card-title text-center">UNCHK(Université Numérique Cheikh Hamidou Kane)</h5>
                <p className="card-text">Master en Ingénierie Logiciel (En cours).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add more formation items as needed */}
    </div>
  </section>
  {/* Skills Section */}
  <section id="skills">
    <div className="container">
      <h2>COMPÉTENCES</h2>
      <p>En tant qu'étudiant en ingénierie logicielle passionné, 
         je possède un ensemble diversifié de compétences qui couvrent
         l'ensemble du processus de développement logiciel. Ma solide 
         formation académique à l'Université Numérique Cheikh Hamidou Kane, 
         combinée à ma passion pour l'informatique, m'a permis d'acquérir une 
         expertise significative.</p>
      <div className="skills-list">
        <h3 className="text-center m-3">Langages &amp; Framework</h3>
        <div className="row">
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>HTML</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>100%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Srping Boot</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>75%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>javaScript</p>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '85%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>PHP</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>25%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>React JS</p>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Angular</p>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>BootStrap</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>95%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>JAVA</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        <h3 className="text-center m-3">Autres</h3>
        <div className="row">
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>SonarQube</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>50%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Jenkins</p>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Moodle</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Wordpress</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>100%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        <h3 className="text-center m-3">Design</h3>
        <div className="row">
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>PhotoShop</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>100%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
              <a href="/cvbabacar2023.pdf" download className="download-button">
                <i className="fas fa-download" />Télécharger mon cv
              </a>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Illustrator</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>75%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Adobe XD</p>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '85%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {/* Example Skill 1 */}
              <div className="mb-3">
                <p>Figma</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>55%</div>
                </div>
              </div>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  {/* Contact Section */}
  <section id="projets">
    <div className="container">
      <div className="container mt-4">
          <h2>PROJETS RÉALISÉS</h2>
          <p>Mon parcours académique et ma passion pour l'ingénierie logicielle
             ont été enrichis par des projets concrets, démontrant ma capacité 
             à appliquer mes compétences dans des environnements réels et à
              résoudre des problèmes complexes. Voici un aperçu de quelques projets significatifs :</p>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/mobile-friendly.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">SGST-PIED(Projet Academique en cours)</h5>
                <p className="card-text">SGST-PIED, est une application de gestion de suiv des taches.).</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/design-development.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">enfm</h5>
                <p className="card-text">enfm est un site web d'information pour
                  l'école nationale de formation maritime <a href="https://enfm.sn"> Vitez l'ENFM </a>.</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/design-development.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Afriquecho-magazine</h5>
                <p className="card-text">Afriquecho est une magazine d'information. pour plus
                  d'information, <a href="https://afriquechos.info/">Visitez Afriquecho</a>.</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/design-development.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Vasy</h5>
                <p className="card-text">Vasy est une plateforme de formation en ligne.
                <a href='https://vasy.Sn'>Visitez vasy</a>
                </p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/mobile-friendly.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Votel-ma</h5>
                <p className="card-text">Votel-ma est une application mobile pour des votes en ligne(En cours).</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/analytics.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">ERP-Semence</h5>
                <p className="card-text">ERP-Semence est une application de gestion des produits(En cours).</p>
              </div>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
    {/* Download Button */}
  </section>
  {/* Popup Modal */}
  <div className="modal fade" id="contactModal" tabIndex={-1} role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="contactModalLabel">Contacter moi</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <i className="fas fa-robot robot-icon" />
          <p>
          Salut, comment ça va ? Je suis Babacar. 
          Envoyez-moi un message et je vous répondrai dans les plus brefs délais.<i className="fas fa-smile-wink" /> .</p>
          {/* Add your contact form here */}
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Votre nom</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Votre Email</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre Message</label>
              <textarea className="form-control" id="message" name="message" rows={4} defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane" />Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="footer">
    <div className="container text-center">
      <p>Vous pouvez me contacter:</p>
      <p>
        <i className="fas fa-phone" /> +221 609 19 32
        <span className="mx-3">|</span>
        <i className="fas fa-envelope" /> dbeeb96@gmail.com
      </p>
      {/* Social Icons */}
      {/* Go to Top Button */}
      <button className="go-to-top-btn" onclick="goToTop()">
        <i className="fas fa-arrow-up" /> Basculer vers le haut
      </button>
      <div>
      <a href="https://github.com/dbeeb96" target="_blank" title="GitHub"><i className="fab fa-github" /></a>
          <a href="https://www.sololearn.com/fr/profile/16888356" target="_blank"><i class="fas fa-chalkboard-teacher"></i></a>
          <a href="https://www.linkedin.com/in/babacar-diagne-2aa85716a" target="_blank"><i className="fab fa-linkedin" /></a>
          {/* Add more social icons as needed */}
      </div>
    </div>

  </footer>
</div>
    </div>
  );
}

export default App;
