import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  const arrayWithData = Object.keys(data);

  // close / hide intro page if user has begun schema journey
  // TODO: a better approach might be to exclude the $computed prop if
  // it’s values is non-existent, in losen.
  if (
    arrayWithData.length !== 0 &&
    !(arrayWithData.length === 1 && !arrayWithData[0] !== '$computed')
  ) {
    close();
  }

  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Bruksendring</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Vil du endre hva du bruker et rom i boligen din til? Finn ut om du må sende byggesøknad
          til kommunen, eller om du kan slippe å søke. Du får også vite hvilke byggeregler du må
          følge.<br />
          <br />Veiviseren gjelder for deg som ønsker å endre på ett enkelt rom uten å flytte vegger
          eller dører.
        </Primitives.Paragraphs.Lead>
        <section>
          <div>
            <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
            <Primitives.Paragraphs.P>
              Før du tar veiviseren bør du kontakte kommunen og få tak i siste godkjente plantegning
              av boligen din. Plantegningen viser hva du har lov å bruke rommene i boligen din til.
              Du vil få bruk for denne informasjonen i veiviseren.
            </Primitives.Paragraphs.P>
            <br />
            <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
            <Primitives.Paragraphs.P>
              Det er du som er ansvarlig for at alle lover og regler blir fulgt når du bygger. Er
              det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere.
              Nettleseren husker hvor du var.
            </Primitives.Paragraphs.P>
          </div>
        </section>

        <br />
        <Primitives.Heading.H2>Har du funnet ut det du trenger?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren! Du får hjelp til hvert spørsmål underveis.
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
