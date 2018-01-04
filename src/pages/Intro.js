import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Primitives } from "losen";
import { IntroMain } from "../primitives/IntroMain";

function Intro({ close, data }) {
  if (Object.keys(data).length !== 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Bruksendring!</Primitives.Heading.H1>
        <Primitives.Heading.H2>
          Skal du gjøre om et rom i boligen din?
        </Primitives.Heading.H2>
        <p>
          Vil du endre et rom i boligen din eller endre hva du bruker det til?
          Svar på spørsmålene i denne veiviseren for å finne ut om du må sende
          byggesøknad til kommunen.
        </p>
        <p>
          Veiviseren gjelder når du vil gjøre om på ett enkelt rom uten å flytte
          vegger eller dører.
        </p>
        <Primitives.Heading.H2>
          Hva må jeg gjøre før jeg tar veiviseren?
        </Primitives.Heading.H2>
        <p>Finn ut hva som er godkjent bruk av rommet du vil endre på i dag.</p>
        <p>
          Usikker? Be byggesakskontoret i kommunen din om godkjente
          plantegninger og snitt-tegninger av boligen din. Det er gratis.
        </p>
        <p>
          Du vil bruke 2-25 minutter på veiviseren, avhengig av rommet du vil
          endre.
        </p>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default connect(state => ({ data: state["@WIZARD_STATE"] }))(Intro);
