import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  if (Object.keys(data).length !== 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Bruksendring</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Vil du endre et rom i boligen din eller endre hva du bruker det til? Svar på spørsmålene i denne veiviseren for å finne ut om du må sende
          byggesøknad til kommunen. Denne veiviseren gjelder når du vil gjøre om på ett enkelt rom uten å flytte
          vegger eller dører.
        </Primitives.Paragraphs.Lead>
        <Primitives.Heading.H2>
          Før du begynner
        </Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Finn ut hva som er godkjent bruk av rommet du vil endre på i dag.<br />
          Usikker? Be byggesakskontoret i kommunen din om godkjente plantegninger og snitt-tegninger av boligen din. Det er gratis.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Veiviseren tar 2-25 minutter, avhengig av rommet du vil endre. Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere. Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Har du funnet ut det du trenger?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren - du får hjelp til hvert spørsmål underveis.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
