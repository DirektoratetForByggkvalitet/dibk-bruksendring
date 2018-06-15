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
          Vil du endre hva du bruker et rom i boligen din til?  Svar på spørsmålene i denne veiviseren for å finne ut om du må sende byggesøknad til kommunen. Du får også vite hvilke regler du må følge.<br />Veiviseren gjelder for deg som ønsker å endre på ett enkelt rom uten å flytte vegger eller dører.
        </Primitives.Paragraphs.Lead>
        <Primitives.Heading.H2>
          Før du begynner
        </Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Før du tar veiviseren bør du sjekke om det finnes begresninger for hva du kan gjøre med boligen din. Dette kan du finne informasjon om i kommunale dokumenter som reguleringsplan, kommuneplanens arealdel eller situasjonskart.<br />Eksempler på slike begrensninger er:
          <ul>
            <li>flom- og skredsområde</li>
            <li>avstand til kraftlinjer</li>
            <li>fredet eller vernestatus</li>
          </ul>
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere. Nettleseren husker hvor du var.
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
