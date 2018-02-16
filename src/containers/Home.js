import React, { Component } from "react";
import "./Home.css";
import { ProgressBar } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Kesä 2018 Goforella</h1>
          <p>Työhakemus</p>
        </div>
	<div className="skillBlock">
	 <div className="skillText">
	  <h2>Osaava, innokas, tavoitteellinen</h2>
	  <p>
	    Olen kiinnostunut eri tavoista käsitellä informaatiota ja kaikenlaisesta ongelmanratkaisusta. Tunnenkin lunnollista vetoa ohjelmointia ja kohtaan, ja pidän
	    asioiden toimintatapojen selvittämisestä. Paras tapa tähän on kokeilla ja käyttää niitä asioita, joista haluaa saada selkoa.
	    Esimerkiksi: Olin kiinnostunut internet-servereiden toiminnasta, joten ostin Raspberry PI:n ja laitoin siihen pystyyn WordPress-sivut.
	    Nyt olen jo poistanut sivut käytöstä, mutta tämä Reactilla toimiva sivu on tullut tilalle.
	  </p>
	  <p>
	    Toisaalta minua kiinnosti ohjelmointi, joten tein Codecademy.com-sivustolla kurssin Pythonista ja olen parhaillaan suorittamassa
	    Helsingin yliopiston järjestämää Java-kurssia, joka antaa opinto-oikeuden Tietojenkäsittelytieteen opintoihin Helsingin yliopistossa.
	    Palan halusta päästä oppimaan tapoja tehdä asioita tehokkaammin ja selkeämmin. Tätä sivua tehdessäni olen jo oppinut valtavasti
	    ja opin jatkuvasti uutta!
	  </p>
	 </div>
	  <div className="keyWords" >
	    <h3> Avainsanat </h3>
	    <ul>
	      <li>AWS</li>
	      <li>React</li>
	      <li>Java</li>
	      <li>Itseohjautuvuus</li>
	    </ul>
	  </div>
	  <div className="skillImage">
	  </div>
	</div>
	<div className="skillBlock">
          <div className="keyWords" >
            <h3> Avainsanat </h3>
            <ul>
              <li>Monipuolisuus</li>
              <li>Estetiikka</li>
              <li>Intohimo</li>
              <li>Design</li>
            </ul>
          </div>
	  <div className="skillText" >
      	    <h2>Tiede vai taide? Why not both!</h2>
	    <p>
	      Olen teknisten asioiden näpertelyn lisäksi aina pitänyt kauniista asioista ja niiden tekemisestä. Olen harrastanut musiikkia koko ikäni, ja ruoanlaitto on
	      ollut yksi intohimoistani ainakin kymmenen vuotta. Kun saa kohdalleen ei vain maut, vaan myös värit ja koostumuksen, on täydellinen annos valmis. Samaan tapaan
	      esimerkiksi nettisivujen käyttäjäkokemus koostuu toimintojen lisäksi ulkoasusta ja ymmärrettävyydestä.
	    </p>
	    <p>
	      Näiden asioiden suunnitteluun minua on valmistanut mm. kuvataidekoulun opinnot ja viettämäni aika Sibelius-lukion kuvataidekursseilla.
	    </p>
	  </div>
	  <div className="skillImage" id="artSkill" title="Teenlehtiä" >
	  </div>
	</div>
	<div className="skillBlock" >
	  <div className="skillText" >
  	    <h2>Kaikin puolin hyvä tyyppi</h2>
	    <p>
	      Kaiken sitoo yhteen kommunikaatio. Oopperalla työskennellessäni oli tärkeää ymmärtää mitä ohjaaja halusi saada aikaan, ja yhdessä muiden näyttelijöiden kanssa
	      toteuttaa se. Postilla toimenkuvaani voisi kutsua jokapaikanhöyläksi. Minun piti siis olla jatkuvasti selvillä missä ollaan jäljessä ja siirtyä sinne auttamaan
	      lajittelun yms. kanssa.
	    </p>
	    <p>
	      Vastuullisin tehtävä joka minulla lienee koskaan ollut, oli kun palvelin varusmiespalveluksen aikana laivastossa varusmiesjohtajana. Olin yhdessä muutaman
	      muun kanssa noin 30 hengen päivittäisistä toimista ja ryhmän toimintaan liittyvistä paperitöistä. Ottaisin mielelläni enemmänkin vastuuta tulevissa töissäni.
	      Olen kuitenkin iloinen siitä, että palveluspaikkani  organisaatiorakenne oli melko litteä verrattuna tyypilliseen inttimeininkiin.
	      Se on yksi asia mikä minua viehättää Goforessakin työpaikkana.
	    </p>
	  </div>
          <div className="keyWords" >
            <h3> Avainsanat </h3>
            <ul>
              <li>Vastuu</li>
              <li>Halu ymmärtää</li>
              <li>Yhteinen etu</li>
              <li>Yhdessä!</li>
            </ul>
          </div>
	  <div className="skillImage" id="peopleSkill" >
	  </div>
	</div>
	<div className="footer" >
	  <div className="info">
	    <div className="footerText" id="thanks">
	      <h3>Kiitos käynnistä! Otathan yhteyttä mahdollisimman pian!</h3>
	    </div>
	    <div className="footerText" id="contactInfo" >
	      <ul>
		<li>Timo Polvinen</li>
		<li><a href="linkedin.com/in/timo-polvinen" >Linkedin</a></li>
		<li><a href="github.com/emcqable" > GitHub </a></li>
		<li>timo.polvinen@gmail.com</li>
		<li>+358 50 501 4484</li>
	      </ul>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}


