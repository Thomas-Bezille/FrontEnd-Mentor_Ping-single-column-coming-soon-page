import "./App.css";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-dashboard.png";
import SubscribeForm from "./components/SubscribeForm.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <main className="page">
      <img className="logo" src={logo} alt="Ping" width="86" height="26" />

      <h1 className="headline">
        We are launching <strong>soon!</strong>
      </h1>
      <p className="tagline">Subscribe and get notified</p>

      <SubscribeForm />

      <img
        className="illustration"
        src={illustration}
        alt="Illustration of a dashboard interface"
      />

      <footer className="footer">
        <SocialLinks />
        <p className="copyright">
          Challenge by&nbsp;
          <a href="https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da">
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a href="https://github.com/Thomas-Bezille/FrontEnd-Mentor_Ping-single-column-coming-soon-page">
            Thomas Bezille
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;
