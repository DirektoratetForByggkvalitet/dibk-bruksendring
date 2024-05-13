import { WizardDefinition } from 'losen';

const schema: WizardDefinition = {
  meta: {
    title: 'Bruksendring',
    name: 'bruksendring',
  },
  computed: {
    multiUnitHouse: {
      type: 'or',
      clauses: [
        {
          field: 'houseType',
          operator: 'eq',
          value: 'leilighet',
        },
        {
          field: 'houseType',
          operator: 'eq',
          value: 'multibolig',
        },
        {
          type: 'and',
          clauses: [
            {
              field: 'houseType',
              operator: 'eq',
              value: 'enebolig',
            },
            {
              field: 'multiEnebolig',
              operator: 'eq',
              value: 'yes',
            },
          ],
        },
      ],
    },
    mainToSecondary: {
      type: 'and',
      clauses: [
        {
          field: 'roomNow',
          operator: 'eq',
          value: 'main',
        },
        {
          field: 'roomChange',
          operator: 'eq',
          value: 'secondary',
        },
      ],
    },
    secondaryToSecondary: {
      type: 'and',
      clauses: [
        {
          field: 'roomNow',
          operator: 'eq',
          value: 'secondary',
        },
        {
          field: 'roomChange',
          operator: 'eq',
          value: 'secondary',
        },
      ],
    },
  },
  schema: [
    {
      id: 'start',
      type: 'Page',
      heading: 'Boligen din',
      children: [
        {
          id: 'houseTypeGroup',
          type: 'Group',
          heading: 'Hva slags bolig skal du endre rom i?',
          children: [
            {
              id: 'houseType',
              property: 'houseType',
              type: 'Radio',
              heading: 'Jeg skal gjøre om rom i:',
              options: [
                {
                  id: 'houseType.enebolig',
                  type: 'Answer',
                  heading: 'Enebolig',
                  value: 'enebolig',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/enebolig.png',
                    alt: 'Enebolig',
                  },
                },
                {
                  id: 'houseType.multibolig',
                  type: 'Answer',
                  heading:
                    'Rekkehus, tomannsbolig, firemannsbolig eller flermannsbolig',
                  value: 'multibolig',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/multibolig.png',
                    alt: 'Rekkehus, tomannsbolig, firemannsbolig eller flermannsbolig',
                  },
                },
                {
                  id: 'houseType.leilighet',
                  type: 'Answer',
                  heading: 'Leilighet',
                  value: 'leilighet',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/leilighet.png',
                    alt: 'Leilighet',
                  },
                },
                {
                  id: 'houseType.garasje',
                  type: 'Answer',
                  heading: 'Frittliggende garasje',
                  value: 'garasje',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/garasje.png',
                    alt: 'Frittliggende garasje',
                  },
                },
                {
                  id: 'houseType.bod',
                  type: 'Answer',
                  heading: 'Frittliggende bod eller lekestue',
                  value: 'bod',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/bod.png',
                    alt: 'Frittliggende bod eller lekestue',
                  },
                },
              ],
            },
            {
              id: 'garageResult',
              type: 'Result',
              show: {
                field: 'houseType',
                operator: 'eq',
                value: 'garasje',
              },
              heading: {
                complete: 'Frittliggende garasje',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og det er feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<h4>Skal du gjøre om garasjen slik at noen kan bo eller sove der?</h4><p>Da må du søke om endringen. Ta kontakt med kommunen din for å finne ut hva du skal søke om og hvordan du gjør det.</p><h4>Skal du gjøre om garasjen til bod?</h4><p>Hvis du kun gjør innvendige endringer i garasjen trenger du ikke å søke, og du kan ta i bruk garasjen din som bod med en gang.</p><h4>Skal du gjøre andre endringer?</h4><p>Ta kontakt med kommunen din for å finne ut om du må søke.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
            {
              id: 'boothResult',
              type: 'Result',
              show: {
                field: 'houseType',
                operator: 'eq',
                value: 'bod',
              },
              heading: {
                complete: 'Frittliggende bod eller lekestue',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og det er feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<h4>Skal du gjøre om bygningen slik at noen kan bo eller sove der?</h4><p>Da må du søke om endringen. Ta kontakt med kommunen din for å finne ut hva du skal søke om og hvordan du gjør det.</p><h4>Skal du gjøre om bygningen fra lekestue til bod eller omvendt?</h4><p>Hvis du kun gjør innvendige endringer trenger du ikke å søke, og du kan ta i bruk lekestuen som bod eller omvendt med én gang.</p><h4>Skal du gjøre om boden eller lekestuen til noe annet?</h4><p>Ta kontakt med kommunen din for å finne ut om du må søke.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
            {
              id: 'multiEnebolig',
              property: 'multiEnebolig',
              type: 'Radio',
              show: {
                field: 'houseType',
                operator: 'eq',
                value: 'enebolig',
              },
              heading: 'Er det flere boenheter i huset ditt?',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/1c.png',
                alt: 'Bilde av flere boenheter',
              },
              text: '<p>Huset kan for eksempel ha flere boenheter hvis det har en hybel eller utleiedel. Er du usikker må du sjekke med kommunen din.</p>',
              options: [
                {
                  id: 'multiEnebolig.yes',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'yes',
                },
                {
                  id: 'multiEnebolig.no',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'no',
                },
              ],
            },
            {
              id: 'hvilkenBoenhet',
              property: 'hvilkenBoenhet',
              type: 'Radio',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'enebolig',
                  },
                  {
                    field: 'multiEnebolig',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
              heading: 'Hvilken boenhet skal du gjøre noe med?',
              options: [
                {
                  id: 'hvilkenBoenhet.own',
                  type: 'Answer',
                  heading: 'Kun den delen jeg selv bor i',
                  value: 'own',
                },
                {
                  id: 'hvilkenBoenhet.other',
                  type: 'Answer',
                  heading: 'Kun utleiedelen eller hybelen',
                  value: 'other',
                },
                {
                  id: 'hvilkenBoenhet.both',
                  type: 'Answer',
                  heading: 'Både delen jeg bor i og utleiedel/hybel',
                  value: 'both',
                },
              ],
            },
            {
              id: 'hvilkenBoenhetBothResult',
              type: 'Result',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'hvilkenBoenhet',
                    operator: 'eq',
                    value: 'both',
                  },
                  {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'enebolig',
                  },
                  {
                    field: '$computed.multiUnitHouse',
                    operator: 'eq',
                    value: true,
                  },
                ],
              },
              heading: {
                complete: 'Du må søke og bruke fagpersoner',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<p>Det er søknadspliktig å bygge det du ønsker, og du må bruke fagpersoner i hele byggeprosessen.</p><p>I små byggeprosjekter kan du ofte bruke en byggmester til å gjøre alt. Han/hun blir da ansvarlig for å:</p><ol><li>å sende inn byggesøknaden for deg (ansvarlig søker), </li><li>å planlegge prosjektet ditt (ansvarlig prosjekterende) og</li><li>å bygge (ansvarlig utførende).</li></ol><p>Vi anbefaler å bruke foretak med sentral godkjenning. <a href=\'https://sgregister.dibk.no/\'>En oversikt over disse finner du her</a>. For hjelp til søknadsprosessen, kan du bruke vår veiledning <a href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“.</a></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
            {
              id: 'hvilkenBoenhetInfoBoth',
              heading:
                'Du har valgt å gjøre endringer i både din del av boligen og i utleiedel.',
              type: 'Error',
              show: {
                field: 'hvilkenBoenhet',
                operator: 'eq',
                value: 'both',
              },
              children: [
                {
                  id: 'hvilkenBoenhetInfoBoth.msg',
                  type: 'Text',
                  warning: true,
                  text: 'Veiviseren dekker dessverre ikke når du vil gjøre endringer i både din del av boligen og i utleiedel. ',
                },
              ],
            },
            {
              id: 'hvilkenBoenhetInfoOther',
              type: 'Text',
              text: 'På resten av spørsmålene skal du svare med utgangspunkt i utleiedelen/hybelen og ikke resten av boligen.',
              show: {
                field: 'hvilkenBoenhet',
                operator: 'eq',
                value: 'other',
              },
            },
            {
              id: 'hvilkenBoenhetInfoOwn',
              type: 'Text',
              text: 'På resten av spørsmålene må du svare med utgangspunkt i den delen du selv bor i, og ikke resten av boligen (hybel/utleiedel).',
              show: {
                field: 'hvilkenBoenhet',
                operator: 'eq',
                value: 'own',
              },
            },
          ],
        },
        {
          id: 'commonArea',
          property: 'commonArea',
          type: 'Radio',
          show: {
            field: '$computed.multiUnitHouse',
            operator: 'eq',
            value: true,
          },
          heading: 'Kommer endringene til å påvirke fellesareal?',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/fellesareal.png',
            alt: 'Hus',
          },
          text: 'Dette gjelder for eksempel om du vil endre en kjellerbod eller loftsbod i fellesarealet, eller vil gjøre andre endringer som kan påvirke fellesareal som for eksempel trapp eller gang.',
          options: [
            {
              id: 'commonArea.yes',
              type: 'Answer',
              heading: 'Ja, det blir endringer i fellesareal.',
              value: 'yes',
            },
            {
              id: 'commonArea.no',
              type: 'Answer',
              heading: 'Nei, det blir kun endringer inne i boenheten min.',
              value: 'no',
            },
          ],
        },
        {
          id: 'changesToCommonArea',
          type: 'Result',
          show: {
            type: 'and',
            clauses: [
              {
                field: '$computed.multiUnitHouse',
                operator: 'eq',
                value: true,
              },
              {
                field: 'commonArea',
                operator: 'eq',
                value: 'yes',
              },
            ],
          },
          heading: {
            complete: 'Du vil gjøre en endring i fellesarealet',
            incomplete: 'Du har ikke svart på alle spørsmålene',
            incompleteWithError:
              'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
            completeWithError: 'Du har feil i svarene dine',
          },
          lead: {
            complete:
              '<p>Om du vil endre noe som påvirker fellesarealet, må du snakke med borettslaget/sameiet ditt for å finne ut hva du kan gjøre. Tillater borettslaget/sameiet deg å gjøre endringer, må du undersøke med kommunen om det du skal gjøre er søknadspliktig.<p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
            incomplete:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            incompleteWithError:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            completeWithError:
              '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
          },
        },
      ],
    },
    {
      id: 'page2',
      type: 'Page',
      heading: 'Rommet ditt',
      children: [
        {
          id: 'roomHeight',
          property: 'roomHeight',
          type: 'Radio',
          heading: 'Er rommet du vil endre på 2 meter eller høyere?',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/minst2meter.png',
            alt: 'Hus med hybel',
          },
          options: [
            {
              id: 'roomHeight.yes',
              type: 'Answer',
              heading: 'Ja, rommet er 2 meter eller høyere',
              value: 'yes',
            },
            {
              id: 'roomHeight.no',
              type: 'Answer',
              heading: 'Nei, rommet er lavere enn 2 meter',
              value: 'no',
            },
          ],
        },
        {
          id: 'roomHeightLessThan2',
          type: 'Result',
          show: {
            field: 'roomHeight',
            operator: 'eq',
            value: 'no',
          },
          heading: {
            complete: 'Du må søke og bruke fagpersoner',
            incomplete: 'Du har ikke svart på alle spørsmålene',
            incompleteWithError:
              'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
            completeWithError: 'Du har feil i svarene dine',
          },
          lead: {
            complete:
              '<p>Det er søknadspliktig å bygge det du ønsker, og du må bruke fagpersoner i hele byggeprosessen.</p><p>I små byggeprosjekter kan du ofte bruke en byggmester til å gjøre alt. Han/hun blir da ansvarlig for å:</p><ol><li>å sende inn byggesøknaden for deg (ansvarlig søker), </li><li>å planlegge prosjektet ditt (ansvarlig prosjekterende) og</li><li>å bygge (ansvarlig utførende).</li></ol><p>Vi anbefaler å bruke foretak med sentral godkjenning. <a href=\'https://sgregister.dibk.no/\'>En oversikt over disse finner du her.</a> For hjelp til søknadsprosessen, kan du bruke vår veiledning <a href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“.</a></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',

            incomplete:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            incompleteWithError:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            completeWithError:
              '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
          },
        },
        {
          id: 'roomNowGroup',
          type: 'Group',
          heading: 'Hoveddel og tilleggsdel',
          text: '<p>Rom er enten godkjent som hoveddel eller tilleggsdel. Hoveddel er rom du har lov til å bo og sove i. Tilleggsdel er stort sett rom for oppbevaring. Usikker på hva rommet er godkjent som i dag? Spør kommunen om de har en godkjent plantegning av boligen din.</p>',
          show: {
            field: 'roomHeight',
            operator: 'eq',
            value: 'yes',
          },
          children: [
            {
              id: 'roomNow',
              property: 'roomNow',
              type: 'Radio',
              heading: 'Hva er rommet ditt nå?',
              options: [
                {
                  id: 'roomNow.main',
                  type: 'Answer',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/hoveddel.png',
                    alt: 'Hoveddel',
                  },
                  heading: 'Hoveddel',
                  text: 'Oppholdsrom, stue, soverom, kjøkken, entré, bad, vaskerom, badstue, hobbyrom, arbeidsrom, hjemmekontor, isolert vinterhage eller gang mellom rom som er hoveddel.',
                  value: 'main',
                },
                {
                  id: 'roomNow.secondary',
                  type: 'Answer',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/tilleggsdel.png',
                    alt: 'Tilleggsdel',
                  },
                  heading: 'Tilleggsdel',
                  text: 'Bod, oppbevaringsrom, teknisk rom eller er en gang mellom rom som kun er tilleggsdel.',
                  value: 'secondary',
                },
              ],
            },
            {
              id: 'roomChange',
              property: 'roomChange',
              type: 'Radio',
              heading: 'Hva vil du endre rommet til?',
              options: [
                {
                  id: 'roomChange.main',
                  type: 'Answer',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/hoveddel.png',
                    alt: 'Hoveddel',
                  },
                  heading: 'Hoveddel',
                  text: 'Oppholdsrom, stue, soverom, kjøkken, entré, bad, vaskerom, badstue, hobbyrom, arbeidsrom, hjemmekontor, isolert vinterhage eller gang mellom rom som er hoveddel.',
                  value: 'main',
                },
                {
                  id: 'roomChange.secondary',
                  type: 'Answer',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/tilleggsdel.png',
                    alt: 'Tilleggsdel',
                  },
                  heading: 'Tilleggsdel',
                  text: 'Bod, oppbevaringsrom, teknisk rom eller er en gang mellom rom som kun er tilleggsdel.',
                  value: 'secondary',
                },
              ],
            },
            {
              id: 'mainToSecondary',
              type: 'Result',
              heading: {
                complete: 'Fra hoveddel til tilleggsdel',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<p>Du har svart at rommet er godkjent som hoveddel, og at det nye rommet skal være tilleggsdel. Beholder du rommet som det er, står du fritt til å bruke for eksempel et soverom eller en stue til bod/oppbevaring uten å søke.</p><h4>Du kan gjøre mindre endringer på rommet uten å søke, som å:</h4><ul><li>pusse opp vegger, tak og gulv i rommet</li><li>bytte interiør og fast møblering</li></ul><h4>Ønsker du få rommet godkjent som tilleggsdel?</h4><p>Da må du søke kommunen.</p><h4>Vil du gjøre andre endringer på rommet?</h4><p>Da må du sjekke med kommunen om du må søke. For eksempel må du alltid søke hvis du skal endre på brannskiller eller legge nye rør eller luftekanaler.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
              show: {
                field: '$computed.mainToSecondary',
                operator: 'eq',
                value: true,
              },
            },
            {
              id: 'secondaryToSecondary',
              type: 'Result',
              heading: {
                complete: 'Fra tilleggsdel til tilleggsdel',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<p>Du har svart at rommet er godkjent som tilleggsdel, og at du ønsker å bruke det som tilleggsdel. Beholder du rommet som det er, står du fritt til å ta i bruk for eksempel en bod som et teknisk rom uten å søke.</p><h4>Du kan gjøre mindre endringer på rommet uten å søke, som å:</h4><ul><li>pusse opp vegger, tak og gulv i rommet</li><li>bytte interiør og fast møblering</li></ul><h4>Vil du gjøre andre endringer på rommet?</h4>Da må du sjekke med kommunen om du må søke. For eksempel må du alltid søke hvis du skal endre på brannskiller eller legge nye rør- eller luftekanaler.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
              show: {
                field: '$computed.secondaryToSecondary',
                operator: 'eq',
                value: true,
              },
            },
          ],
        },
        {
          id: 'roomAccessAfterChange',
          property: 'roomAccessAfterChange',
          type: 'Radio',
          heading:
            'Hvordan kommer du deg til rommet både før og etter endringen?',
          text: '<p>Veiviseren dekker bare rom som har samme plassering på vegger og dører før og etter endringen.</p>',
          options: [
            {
              id: 'roomAccessAfterChange.inside',
              type: 'Answer',
              heading:
                'Jeg kommer meg til rommet innvendig fra resten av boligen min.',
              value: 'inside',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/3c.png',
                alt: 'Rom med inngangsdør innenfra',
              },
            },
            {
              id: 'roomAccessAfterChange.commonAreaOrOutside',
              type: 'Answer',
              heading:
                'Jeg kan KUN komme til rommet fra fellesareal eller inngangsdør utenfra.',
              value: 'outside',
              show: {
                field: '$computed.multiUnitHouse',
                operator: 'eq',
                value: true,
              },
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/3b.png',
                alt: 'Rom med inngangsdør utenfra',
              },
            },
            {
              id: 'roomAccessAfterChange.outside',
              type: 'Answer',
              heading: 'Jeg kan kun komme til rommet fra inngangsdør utenfra.',
              value: 'outside',
              show: {
                field: '$computed.multiUnitHouse',
                operator: 'eq',
                value: false,
              },
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/3b.png',
                alt: 'Rom med inngangsdør utenfra',
              },
            },
          ],
        },
        {
          id: 'roomAcceptedAsMainPartResult',
          type: 'Result',
          show: {
            type: 'and',
            clauses: [
              {
                field: 'roomNow',
                operator: 'eq',
                value: 'main',
              },
              {
                field: 'roomAccessAfterChange',
                operator: 'eq',
                value: 'inside',
              },
            ],
          },
          heading: {
            complete: 'Fra hoveddel til hoveddel',
            incomplete: 'Du har ikke svart på alle spørsmålene',
            incompleteWithError:
              'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
            completeWithError: 'Du har feil i svarene dine',
          },
          lead: {
            complete:
              '<p>Det å endre et rom fra hoveddel til hoveddel kan utløse nye tekniske krav til for eksempel dagslys eller rømning. Dette kan være tilfelle hvis du for eksempel har en eldre bolig og skal gjøre om et vaskerom til soverom, kjøkken eller bad. Det kan i tillegg være søknadspliktig å gjøre disse endringene.</p><p>Noen fysiske endringer kan i seg selv medføre søknadsplikt, for eksempel å sette inn nye vinduer.</p><p>Er du usikker kan kommunen hjelpe deg med å vurdere om det du vil gjøre er søknadspliktig.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
            incomplete:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            incompleteWithError:
              '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
            completeWithError:
              '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
          },
        },
        {
          type: 'Branch',
          id: 'roomAcceptedAsSecondaryPart',
          branches: [
            {
              test: {
                field: 'roomAccessAfterChange',
                operator: 'eq',
                value: 'outside',
              },
              children: [
                {
                  id: 'toiletGroup',
                  type: 'Group',
                  heading: 'Toalett og håndvask',
                  children: [
                    {
                      id: 'toiletDetachedHouse',
                      property: 'toiletDetachedHouse',
                      type: 'Radio',
                      heading:
                        'Blir det toalett og vask i den delen av boligen hvor rommet du skal endre på ligger?',
                      options: [
                        {
                          id: 'toiletDetachedHouse.yes',
                          type: 'Answer',
                          heading: 'Ja',
                          value: 'yes',
                        },
                        {
                          id: 'toiletDetachedHouse.no',
                          type: 'Answer',
                          heading: 'Nei',
                          value: 'no',
                        },
                      ],
                    },
                    {
                      id: 'toiletsEntireMainPartResult',
                      type: 'Result',
                      heading: {
                        complete:
                          'Du må søke og det kan hende du får en ny boenhet',
                        incomplete: 'Du har ikke svart på alle spørsmålene',
                        incompleteWithError:
                          'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                        completeWithError: 'Du har feil i svarene dine',
                      },
                      lead: {
                        complete:
                          '<p>Dine svar viser at du må søke. Det kan også hende får en ny boenhet. Dette skyldes at du får en adskilt del av boligen med bad og toalett.</p><p><b>Er du usikker på om du får en ny boenhet?</b><br>Da anbefaler vi deg å be om en forhåndskonferanse med kommunen din. Dette er et møte hvor du kan legge fram planene dine og finne ut hva du må søke om.</p><p><b>Får du en ny boenhet?</b><br>Da må du bruke fagpersoner i hele byggeprosessen. I små byggeprosjekter kan du ofte bruke en byggmester til å gjøre alt. Han/hun blir da ansvarlig for å:<ul><li>å sende inn byggesøknaden for deg (ansvarlig søker).</li><li>å planlegge prosjektet ditt (ansvarlig prosjekterende)</li><li>å bygge (ansvarlig utførende)</li></ul></p><p>Vi anbefaler å bruke foretak med sentral godkjenning. <a href=\'https://sgregister.dibk.no/\'>En oversikt over disse finner du her.</a> For hjelp til søknadsprosessen, kan du bruke vår veiledning <a href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“.</a></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                        incomplete:
                          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        incompleteWithError:
                          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        completeWithError:
                          '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                      },
                      show: {
                        field: 'toiletDetachedHouse',
                        operator: 'eq',
                        value: 'yes',
                      },
                    },
                    {
                      id: 'roomAcceptedAsMainPartResult2',
                      type: 'Result',
                      heading: {
                        complete: 'Fra hoveddel til hoveddel',
                        incomplete: 'Du har ikke svart på alle spørsmålene',
                        incompleteWithError:
                          'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                        completeWithError: 'Du har feil i svarene dine',
                      },
                      lead: {
                        complete:
                          '<p>Det å endre et rom fra hoveddel til hoveddel kan utløse nye tekniske krav til for eksempel dagslys eller rømning. Dette kan være tilfelle hvis du for eksempel har en eldre bolig og skal gjøre om et vaskerom til soverom, kjøkken eller bad. Det kan i tillegg være søknadspliktig å gjøre disse endringene.</p><p>Noen fysiske endringer kan i seg selv medføre søknadsplikt, for eksempel å sette inn nye vinduer.</p><p>Er du usikker kan kommunen hjelpe deg med å vurdere om det du vil gjøre er søknadspliktig.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                        incomplete:
                          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        incompleteWithError:
                          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        completeWithError:
                          '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                      },

                      show: {
                        type: 'and',
                        clauses: [
                          {
                            field: 'toiletDetachedHouse',
                            operator: 'eq',
                            value: 'no',
                          },
                          {
                            field: 'roomNow',
                            operator: 'eq',
                            value: 'main',
                          },
                          {
                            field: 'roomChange',
                            operator: 'eq',
                            value: 'main',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'overUnderNextTooHovedRoom',
          property: 'overUnderNextTooHovedRoom',
          type: 'Radio',
          heading:
            'Ligger rommet du vil endre på over, under eller vegg-i-vegg med et rom som allerede er hoveddel?',
          text: '<p>Rommene må ligge i din egen bolig og være godkjente til bruk som hoveddel. Hoveddel er for eksempel rom du kan bo og sove i. Tilleggsdel er rom for oppbevaring.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/10a.png',
            alt: 'Rom',
          },
          options: [
            {
              id: 'overUnderNextTooHovedRoom.yes',
              type: 'Answer',
              heading:
                'Ja, rommet ligger over, under eller vegg-i-vegg med et rom som er hoveddel',
              value: 'yes',
            },
            {
              id: 'overUnderNextTooHovedRoom.no',
              type: 'Answer',
              heading: 'Nei, rommet grenser kun mot tilleggsdel eller nabo',
              value: 'no',
            },
          ],
          show: {
            type: 'and',
            clauses: [
              {
                field: 'roomNow',
                operator: 'eq',
                value: 'secondary',
              },
              {
                type: 'or',
                clauses: [
                  {
                    field: 'roomAccessAfterChange',
                    operator: 'eq',
                    value: 'inside',
                  },
                  {
                    field: 'toiletDetachedHouse',
                    operator: 'eq',
                    value: 'no',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 'overNextTooHovedRoomBranch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'overUnderNextTooHovedRoom',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'overUnderNextTooHovedRoomResult',
                  type: 'Result',
                  heading: 'Du må søke!',
                  lead: '<p>Dine svar viser at du må søke. Du kan se hva du har svart nederst på denne siden.</p><p>Før du søker må du sjekke at rommet kan oppfylle alle relevante teknisk krav i byggteknisk forskrift (TEK17). Hvilke krav som er relevante kommer an på hva du skal bruke rommet til. Eksempler på krav du må følge er:<ul><li>Romhøyde på minst 220 cm fra gulv til tak</li><li>Krav til rømningsveier</li><li>Krav til isolasjon av rommet</li><li>Krav til ventilasjon</li><li>Krav til dagslys og utsyn</li><li>Krav til at både gulv, vegger og tak tåler endringene du planlegger</li></ul></p><p>Er du usikker på hvilke krav du må følge? Da kan det være lurt å bruke en fagperson som for eksempel en byggmester. Det er spesielt viktig hvis du vil gjøre endringer på loftet.</p> <p><b>Hvordan søker jeg?</b><br>Du kan bruke søknadsskjemaet “Søknad om bruksendring“ som du finner på siden <a href="https://dibk.no/bygge-selv/soknadsskjema-for-mindre-byggeprosjekter-pa-boligeiendom/">“Søknadsskjemaer for mindre byggeprosjekter på boligeiendom“</a>. For hjelp til søknadsprosessen, kan du bruke vår veiledning <a href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“.</a>. </p><p><b>Hvilke andre krav kan gjelde?</b><ul><li>Skal du ha innlagt vann? Da gjelder egne krav om fuktsikring, og vi anbefaler bruk av rørlegger</li><li>Skal du ha ny skorstein eller nytt ildsted? Da gjelder egne krav om sikkerhet og ventilasjon, og vi anbefaler bruk av kvalifisert installatør.</li><li>Det kan finnes begrensninger på hva du kan gjøre på eiendommen i kommunale planer, for eksempel på grunn av flom- og skredfare. Det er viktig å sette seg inn i planene før du søker.</li></ul></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page3',
      type: 'Page',
      heading: 'Du må søke',
      lead: '<p>Du må søke kommunen når du vil endre et rom fra tilleggsdel til hoveddel. Dette kalles en bruksendring.</p><p>Når du bruksendrer må du følge dagens byggeregler. For eldre boliger gjelder færre og enklere krav enn for nyere boliger.</p><p>Fortsett veiviseren for å finne ut om det gjelder deg!</p>',
      show: {
        type: 'or',
        clauses: [
          {
            type: 'and',
            clauses: [
              {
                field: 'roomNow',
                operator: 'eq',
                value: 'secondary',
              },
              {
                type: 'or',
                clauses: [
                  {
                    field: 'roomAccessAfterChange',
                    operator: 'eq',
                    value: 'inside',
                  },
                  {
                    field: 'toiletDetachedHouse',
                    operator: 'eq',
                    value: 'no',
                  },
                ],
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'toiletDetachedHouse',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
        ],
      },
      children: [
        {
          id: 'buildApplicationYear',
          property: 'buildApplicationYear',
          type: 'Radio',
          heading:
            'Er det søkt om å bygge boligen din 1. juli 2011 eller senere?',
          text: '<p>Søknadstidspunktet bestemmer hvilket regelverk som gjelder for boligen din. Er du i tvil kan du sjekke med kommunen</p>',
          options: [
            {
              id: 'buildApplicationYearAfter',
              type: 'Answer',
              heading: 'Ja',
              value: 'after',
            },
            {
              id: 'buildApplicationYearBefore',
              type: 'Answer',
              heading: 'Nei',
              value: 'before',
            },
          ],
        },
        {
          id: 'mainReconstructionYear',
          property: 'mainReconstructionYear',
          type: 'Radio',
          heading:
            'Er det søkt om hovedombygging av boligen din 1. juli. 2011 eller senere?',
          text: '<p>Er du i tvil om boligen har hatt en hovedombygging, må du sjekke med kommunen.</p>',
          show: {
            field: 'buildApplicationYear',
            operator: 'eq',
            value: 'before',
          },
          options: [
            {
              id: 'mainReconstructionYear.yes',
              type: 'Answer',
              heading: 'Ja',
              value: 'yes',
            },
            {
              id: 'mainReconstructionYear.no',
              type: 'Answer',
              heading: 'Nei',
              value: 'no',
            },
          ],
        },
        {
          id: 'divisionOrMerger',
          property: 'divisionOrMerger',
          type: 'Radio',
          show: {
            field: 'mainReconstructionYear',
            operator: 'eq',
            value: 'no',
          },
          heading:
            'Er det søkt om en oppdeling eller sammenslåing av boligen din 1. juli 2011 eller senere?',
          text: '<p>Er du i tvil om boligen din har blitt oppdelt eller sammenslått, må du sjekke med kommunen.</p>',
          options: [
            {
              id: 'divisionOrMerger.yes',
              type: 'Answer',
              heading: 'Ja',
              value: 'yes',
            },
            {
              id: 'divisionOrMerger.no',
              type: 'Answer',
              heading: 'Nei',
              value: 'no',
            },
          ],
        },
        {
          id: 'overUnderNextTooHovedRoomResultBranch',
          type: 'Branch',
          branches: [
            {
              test: {
                type: 'or',
                clauses: [
                  {
                    field: 'buildApplicationYear',
                    operator: 'eq',
                    value: 'after',
                  },
                  {
                    field: 'mainReconstructionYear',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'divisionOrMerger',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
              children: [
                {
                  type: 'Reference',
                  nodeId: 'overUnderNextTooHovedRoomResult',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page4',
      type: 'Page',
      heading: 'Tekniske krav',
      lead: '<p>Dine svar viser at boligen din er bygget etter eldre regelverk. Da gjelder færre og enklere tekniske krav enn for nyere boliger. Fortsett veiviseren for å finne ut det er mulig å oppfylle de vanligste tekniske kravene som gjelder rom i eldre boliger.</p>',
      show: {
        type: 'and',
        clauses: [
          {
            field: 'buildApplicationYear',
            operator: 'eq',
            value: 'before',
          },
          {
            field: 'mainReconstructionYear',
            operator: 'eq',
            value: 'no',
          },
          {
            field: 'divisionOrMerger',
            operator: 'eq',
            value: 'no',
          },
        ],
      },
      children: [
        {
          id: 'alreadyApprovedMainPartGroup',
          type: 'Group',
          children: [
            {
              id: 'alreadyApprovedMainPart',
              property: 'alreadyApprovedMainPart',
              type: 'Radio',
              heading:
                'Er det godkjent hoveddel i etasjen rommet ligger i fra før?',
              text: 'En bruksendring kan utløse nye krav til konstruksjonssikkerhet og brannsikring for hele bygget. Usikker på om det godkjent hoveddel i etasjen? Spør kommunen om de har en godkjent plantegning av boligen din.',
              options: [
                {
                  id: 'alreadyApprovedMainPart.yes',
                  type: 'Answer',
                  heading:
                    'Ja, i etasjen finnes det fra før enten godkjent oppholdsrom, stue, soverom, kjøkken, entré, bad, vaskerom, badstue, hobbyrom, arbeidsrom, hjemmekontor, isolert vinterhage eller gang mellom rom som er hoveddel.',
                  value: 'yes',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/12.png',
                    alt: 'Rom',
                  },
                },
                {
                  id: 'alreadyApprovedMainPart.no',
                  type: 'Answer',
                  heading:
                    'Nei, i etasjen finnes det fra før kun rom godkjent som enten bod, oppbevaringsrom, teknisk rom eller er en gang mellom rom som kun er tilleggsdel.',
                  value: 'no',
                  image: {
                    url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/13.png',
                    alt: 'Rom',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'basementOrAtticGroup',
          type: 'Group',
          show: {
            field: 'alreadyApprovedMainPart',
            operator: 'eq',
            value: 'no',
          },
          children: [
            {
              id: 'basementOrAttic',
              property: 'basementOrAttic',
              type: 'Radio',
              heading:
                'Ligger rommet du skal endre, i en kjeller eller på et loft?',
              text: '<p>Dette kan påvirke konstruksjonssikkerhet, brannsikring og rømingsveier.</p>',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/13a.png',
                alt: 'Loft eller kjeller illustrert',
              },
              options: [
                {
                  id: 'basementOrAttic.basement',
                  type: 'Answer',
                  heading:
                    'Ja, i en kjeller eller underetasje (helt eller delvis under bakkenivå)',
                  value: 'basement',
                },
                {
                  id: 'basementOrAttic.attic',
                  type: 'Answer',
                  heading: 'Ja, på et loft',
                  value: 'attic',
                },
                {
                  id: 'basementOrAttic.no',
                  type: 'Answer',
                  heading: 'Nei, ingen av delene',
                  value: 'no',
                },
              ],
            },
            {
              id: 'noAtticResult',
              type: 'Result',
              show: {
                field: 'basementOrAttic',
                operator: 'eq',
                value: 'no',
              },
              heading: {
                complete: 'Veiviseren dekker dessverre ikke ditt tilfelle',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError:
                  'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
                completeWithError: 'Du har feil i svarene dine',
              },
              lead: {
                complete:
                  '<p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
            {
              id: 'atticLoadError',
              type: 'Error',
              heading:
                'Sjekk om gulv, vegger og tak på loftet tåler endringene',
              show: {
                field: 'basementOrAttic',
                operator: 'eq',
                value: 'attic',
              },
              children: [
                {
                  id: 'atticLoadError.msg',
                  type: 'Text',
                  warning: true,
                  text: 'Sjekk om gulv, vegger og tak på loftet tåler endringene. Det er lurt å bruke en fagperson, for eksempel en byggmester eller takstmann. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                },
              ],
            },
          ],
        },
        {
          id: 'safetyAndEnvironment',
          type: 'Branch',
          branches: [
            {
              test: {
                type: 'or',
                clauses: [
                  {
                    field: 'toiletDetachedHouse',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'basementOrAttic',
                    operator: 'eq',
                    value: 'basement',
                  },
                  {
                    field: 'basementOrAttic',
                    operator: 'eq',
                    value: 'attic',
                  },
                ],
              },
              children: [
                {
                  id: 'numberOfLevelsGroup',
                  type: 'Group',
                  heading: 'Etasjer i bygningen',
                  children: [
                    {
                      id: 'numberOfLevels',
                      property: 'numberOfLevels',
                      type: 'Radio',
                      show: {
                        field: 'alreadyApprovedMainPart',
                        operator: 'eq',
                        value: 'no',
                      },
                      heading:
                        'Inkludert eventuelle kjellere og loft, hvor mange etasjer har hele bygningen du bor i?',
                      options: [
                        {
                          id: 'numberOfLevels.2',
                          type: 'Answer',
                          heading: '2',
                          value: '2',
                        },
                        {
                          id: 'numberOfLevels.3',
                          type: 'Answer',
                          heading: '3',
                          value: '3',
                        },
                        {
                          id: 'numberOfLevels.4',
                          type: 'Answer',
                          heading: '4',
                          value: '4',
                        },
                        {
                          id: 'numberOfLevels.5',
                          type: 'Answer',
                          heading: '5 eller flere',
                          value: '5',
                        },
                      ],
                    },
                    {
                      id: 'fireSafetyError',
                      type: 'Error',
                      heading:
                        'Sjekk om bruksendringen utløser nye krav til brannsikring',
                      show: {
                        field: 'numberOfLevels',
                        operator: 'gte',
                        value: '5',
                      },
                      children: [
                        {
                          type: 'Text',
                          id: 'fireSafetyErrorText',
                          warning: true,
                          text: 'Etasjeantallet gjør at du må undersøke om bruksendringen utløser nye krav til brannsikring for hele bygget. Ta kontakt med byggmester eller takstmann. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                        },
                      ],
                    },
                    {
                      type: 'Branch',
                      id: 'numberOfLevelsBranch',
                      branches: [
                        {
                          test: {
                            type: 'and',
                            clauses: [
                              {
                                field: '$computed.multiUnitHouse',
                                operator: 'eq',
                                value: true,
                              },
                              {
                                field: 'numberOfLevels',
                                operator: 'eq',
                                value: '3',
                              },
                            ],
                          },
                          children: [
                            {
                              id: 'escapeAtGroundFloor',
                              property: 'escapeAtGroundFloor',
                              type: 'Radio',
                              heading:
                                'Har alle boenhetene i bygningen utgangsdør som går rett ut på bakken?',
                              text: '<p>Alle boenhetene i hele bygget må ha en egen utgang rett ut på bakken fra hver boenhet. Er det trapp ned til terrenget fra utgangen, kan det være maksimalt halvannen meter fra dørstokken og ned til bakken.</p>',
                              options: [
                                {
                                  id: 'escapeAtGroundFloorYes',
                                  type: 'Answer',
                                  heading: 'Ja',
                                  value: 'yes',
                                },
                                {
                                  id: 'escapeAtGroundFloorNo',
                                  type: 'Answer',
                                  heading: 'Nei',
                                  value: 'no',
                                },
                              ],
                            },
                            {
                              id: 'temporaryIdForFloorMessage',
                              type: 'Text',
                              text: 'Siden du ikke mer enn tre etasjer og alle boenheter har utgang til terreng er krav til brannsikkerhet oppfylt.',
                              show: {
                                field: 'escapeAtGroundFloor',
                                operator: 'eq',
                                value: 'yes',
                              },
                            },
                            {
                              id: 'fireSafetyReconsidered',
                              heading:
                                'Sjekk om bruksendringen utløser nye krav til brannsikring',
                              type: 'Error',
                              show: {
                                field: 'escapeAtGroundFloor',
                                operator: 'eq',
                                value: 'no',
                              },
                              children: [
                                {
                                  id: 'fireSafetyReconsideredText',
                                  text: 'Du må undersøke om bruksendringen utløser nye krav til brannsikring for hele bygget. Ta kontakt med byggmester eller takstmann. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                                  type: 'Text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'extraFloorWarning',
                      heading:
                        'Sjekk om bruksendringen utløser nye krav til brannsikring',
                      type: 'Error',
                      show: {
                        field: 'numberOfLevels',
                        operator: 'eq',
                        value: '4',
                      },
                      children: [
                        {
                          id: 'extraFloorWarningText',
                          type: 'Text',
                          text: 'Etasjeantallet gjør at du må undersøke om bruksendringen utløser nye krav til brannsikring for hele bygget. Ta kontakt med byggmester eller takstmann. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'canInstallWindow',
          type: 'Group',
          heading: 'Vindu på rommet',
          text: '<p>For å sjekke om rommet du skal endre oppfyller krav til lys, luft og rømning, vil vi nå stille deg noen spørsmål om vindu.</p>',
          children: [
            {
              id: 'canInstallWindowRadio',
              property: 'canInstallWindowRadio',
              type: 'Radio',
              heading:
                'Har du eller skal du sette inn et vindu mot friluft som kan åpnes?',
              options: [
                {
                  id: 'canInstallWindowRadio.yes',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'yes',
                },
                {
                  id: 'canInstallWindowRadio.no',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'no',
                },
              ],
            },
            {
              id: 'noWindowError',
              heading: 'Vinduet oppfyller ikke kravene til lys og rømning',
              type: 'Error',
              show: {
                field: 'canInstallWindowRadio',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'noWindowError.text',
                  type: 'Text',
                  text: 'Skal du bruksendre til kjøkken, stue eller soverom må du ha vindu. Skal du bruksendre til noe annet, kan du kontakte byggmester eller arkitekt for å finne ut om du kan oppfylle kravene til lys, luft og rømning uten vindu.',
                },
              ],
            },
            {
              type: 'Branch',
              id: 'canInstallWindowBranch',
              branches: [
                {
                  test: {
                    field: 'canInstallWindowRadio',
                    operator: 'eq',
                    value: 'yes',
                  },
                  children: [
                    {
                      id: 'noWindowErrorText',
                      type: 'Text',
                      text: '<p>Et godkjent rømningsvindu må ha en total lengde og bredde på minst 150 cm. Vinduet må i tillegg være minst 50 cm bredt og minst 60 cm høyt. Mål på innsiden av innerkarmen på vinduet.</p><p>Vinduet må kunne åpnes helt opp. Har du midthengslet vindu? Da må vinduet ha en åpning du kan komme deg ut av, som oppfyller målene over.</p>',
                    },
                    {
                      id: 'imageDimensions',
                      type: 'Image',
                      image: {
                        url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/14b.png',
                        alt: 'Dimensjoner på vinduer',
                      },
                    },
                    {
                      id: 'bigWindow',
                      property: 'bigWindow',
                      type: 'Radio',
                      heading: 'Blir åpningen på vinduet stor nok?',
                      options: [
                        {
                          id: 'bigWindow.yes',
                          type: 'Answer',
                          heading: 'Ja, åpningen er eller blir stor nok',
                          value: 'yes',
                        },
                        {
                          id: 'bigWindow.no',
                          type: 'Answer',
                          heading: 'Nei',
                          value: 'no',
                        },
                      ],
                    },
                    {
                      id: 'bigWindowError',
                      heading:
                        'Vinduet oppfyller ikke kravene til lys og rømning',
                      type: 'Error',
                      show: {
                        field: 'bigWindow',
                        operator: 'eq',
                        value: 'no',
                      },
                      children: [
                        {
                          id: 'bigWindowError.msg',
                          type: 'Text',
                          text: 'Hvis rommet ikke har et stort nok vindu kan ikke veilederen ta stilling til om krav til lys og rømning er oppfylt. Kravene kan være oppfylt på annet vis, men dette må du undersøke selv. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                        },
                      ],
                    },
                    {
                      id: 'escapeUnkownFloor',
                      property: 'escapeUnkownFloor',
                      type: 'Radio',
                      heading:
                        'Er det enkelt å komme seg ut av vindu og til bakken?',
                      text: '<p>Det må være:</p><ul><li>maksimalt 1 meter fra gulv til underside av vinduskarm</li><li>maksimalt 5 meter fra utsiden av vinduet og ned til bakken</li><li>lett å komme seg ut av kjellervindu til bakkenivå selv om det er mye snø</li></ul><p>Pass også på at det ikke er andre hindringer for å komme seg ut av vindu og i trygghet.</p>',
                      show: {
                        type: 'and',
                        clauses: [
                          {
                            field: 'bigWindow',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'alreadyApprovedMainPart',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      options: [
                        {
                          id: 'escapeUnkownFloorYes',
                          type: 'Answer',
                          heading: 'Ja',
                          value: 'yes',
                        },
                        {
                          id: 'escapeUnkownFloorNo',
                          type: 'Answer',
                          heading: 'Nei',
                          value: 'no',
                        },
                      ],
                    },
                    {
                      id: 'maxOneMeterToWindowWarning',
                      heading: 'Vinduet oppfyller ikke kravene til rømning',
                      type: 'Error',
                      show: {
                        field: 'escapeUnkownFloor',
                        operator: 'eq',
                        value: 'no',
                      },
                      children: [
                        {
                          id: 'maxOneMeterToWindowWarning.text',
                          type: 'Text',
                          text: 'Vinduet oppfyller ikke kravene til rømning. Det kan hende rømning er ivaretatt på annen måte, men det må du undersøke med en fagperson. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                        },
                      ],
                    },
                    {
                      type: 'Branch',
                      id: 'escapeUnkownFloorBranch',
                      branches: [
                        {
                          test: {
                            field: 'canInstallWindowRadio',
                            operator: 'eq',
                            value: 'yes',
                          },
                          children: [
                            {
                              id: 'ventilation',
                              property: 'ventilation',
                              type: 'Radio',
                              heading:
                                'Har du eller skal du sette inn en lufteventil, i tillegg til vindu?',
                              options: [
                                {
                                  id: 'ventilation.yes',
                                  type: 'Answer',
                                  heading: 'Ja, det blir lufteventil på rommet',
                                  value: 'yes',
                                },
                                {
                                  id: 'ventilation.no',
                                  type: 'Answer',
                                  heading: 'Nei',
                                  value: 'no',
                                },
                              ],
                            },
                            {
                              id: 'ventilationError',
                              heading: 'Rommet er for dårlig ventilert',
                              type: 'Error',
                              show: {
                                field: 'ventilation',
                                operator: 'eq',
                                value: 'no',
                              },
                              children: [
                                {
                                  id: 'ventilationError.msg',
                                  type: 'Text',
                                  text: 'Rommet må ha tilførsel av luft utenfra i tillegg til vindu. Lufteventil er enkleste måte å løse dette på. Du kan fortsette veiviseren for å se om det er andre hindringer.',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'warmRoomGroup',
          type: 'Group',
          heading: 'Isolasjon og temperatur',
          children: [
            {
              id: 'noWindowErrorText',
              type: 'Image',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/21a.png',
                alt: 'Hus med gradestokk på 19 grader',
              },
            },
            {
              id: 'warmRoom',
              property: 'warmRoom',
              type: 'Radio',
              heading:
                'Vil rommet kunne holde minst 19 grader gjennom vinteren?',
              text: '<p>Rommet må kunne holde minst 19 grader gjennom vinteren med den oppvarmingen du planlegger.</p>',
              options: [
                {
                  id: 'warmRoomYes',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'yes',
                },
                {
                  id: 'warmRoomNo',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'no',
                },
              ],
            },
            {
              id: 'warmRoomError',
              heading: 'Rommet er for kaldt',
              type: 'Error',
              show: {
                field: 'warmRoom',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'warmRoomError.msg',
                  type: 'Text',
                  warning: true,
                  text: 'Du må isolere rommet slik at det kan holde høy nok innetemperatur gjennom vinteren.',
                },
              ],
            },
          ],
        },
        {
          id: 'radonGroup',
          type: 'Group',
          heading: 'Radonnivået i boligen',
          children: [
            {
              id: 'husMedRadonImage',
              type: 'Image',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bruksendring/20b.png',
                alt: 'Hus med radioaktivitetssymbol',
              },
            },
            {
              id: 'measureRadon',
              property: 'measureRadon',
              type: 'Radio',
              heading: 'Har du målt radon-nivået i boligen din?',
              options: [
                {
                  id: 'measureRadon.yes',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'yes',
                },
                {
                  id: 'measureRadon.no',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'no',
                },
              ],
            },
            {
              id: 'mesuredRadonText',
              type: 'Text',
              text: 'Høye radon-nivåer er helseskadelig, så det kan være lurt å måle radon-nivået. Det er krav å måle radon i bolig som leies ut, men ikke i en bolig du bor i selv.',
              show: {
                field: 'measureRadon',
                operator: 'eq',
                value: 'no',
              },
            },
            {
              id: 'radonMeasureBranch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'measureRadon',
                    operator: 'eq',
                    value: 'yes',
                  },
                  children: [
                    {
                      id: 'radonLevel',
                      property: 'radonLevel',
                      type: 'Radio',
                      heading: 'Hva var radonnivået i boligen din?',
                      options: [
                        {
                          id: 'radonLevel.100',
                          type: 'Answer',
                          heading: '',
                          text: 'Under 100 Bq/m<sup>3</sup>',
                          value: '100',
                        },
                        {
                          id: 'radonLevel.200',
                          type: 'Answer',
                          heading: '',
                          text: '100-200 Bq/m<sup>3</sup>',
                          value: '200',
                        },
                        {
                          id: 'radonLevel.201',
                          type: 'Answer',
                          heading: '',
                          text: 'Over 200 Bq/m<sup>3</sup>',
                          value: '201',
                        },
                      ],
                    },
                    {
                      id: 'radonInfo201',
                      heading: 'Radon-nivået er for høyt',
                      type: 'Error',
                      show: {
                        field: 'radonLevel',
                        operator: 'eq',
                        value: '201',
                      },
                      children: [
                        {
                          id: 'radonError.msg',
                          type: 'Text',
                          warning: true,
                          text: 'Du kan ikke bruksendre rommet før du har fått redusert radon-nivået i boligen din. Nivået må være under 200 Bq/m3, men det er anbefalt å redusere det til under 100 Bq/m3. Vær klar over at en bruksendring i kjeller  kan øke radon-nivået ytterligere.',
                        },
                      ],
                    },
                    {
                      id: 'radonInfo200',
                      type: 'Text',
                      text: 'Radon-nivået er ikke ulovlig høyt. Du bør vurdere å gjøre noe for å redusere radon-nivået, særlig hvis du skal endre rom i kjeller.',
                      show: {
                        field: 'radonLevel',
                        operator: 'eq',
                        value: '200',
                      },
                    },
                    {
                      id: 'radonInfo100',
                      type: 'Text',
                      text: 'Radon-nivå under 100 Bq/m3 anses som trygt.',
                      show: {
                        field: 'radonLevel',
                        operator: 'eq',
                        value: '100',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hooray-but',
      type: 'Result',
      heading: {
        complete: 'Takk for at du brukte veiviseren!',
        incomplete: 'Du har ikke svart på alle spørsmålene',
        incompleteWithError:
          'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
        completeWithError: 'Du har feil i svarene dine',
      },
      lead: {
        complete:
          '<p>Noe kan komme i veien for å endre rommet slik du ønsker. Du kan se hva dette gjelder i svarene dine nederst på denne siden.</p><p><b>Hva gjør jeg nå?</b><br>Vi anbefaler at du kontakter en fagperson, for eksempel en byggmester. Vedkommende kan finne ut om det likevel er mulig å gjennomføre planene dine</p><p><b>Hvilke krav har veiviseren sjekket?</b><br>Veiviseren har sjekket om rommet oppfyller de vanligste tekniske kravene som gjelder stue og soverom i eldre boliger. Det kan gjelde flere eller færre krav for andre typer rom.</p><p><b>Hvilke andre krav kan gjelde?</b><br><ul><li>Skal du ha innlagt vann? Da gjelder egne krav om fuktsikring, og vi anbefaler bruk av rørlegger</li><li>Skal du ha ny skorstein eller nytt ildsted? Da gjelder egne krav om sikkerhet og ventilasjon, og vi anbefaler bruk av kvalifisert installatør.</li><li>Det kan finnes begrensninger på hva du kan gjøre på eiendommen i kommunale planer, f eks på grunn av flom- og skredfare. Det er viktig å sette seg inn i planene før du søker.</li></ul></p>',
        incomplete:
          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incompleteWithError:
          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        completeWithError:
          '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
      },
      show: {
        type: 'or',
        clauses: [
          {
            type: 'and',
            clauses: [
              {
                field: 'hvilkenBoenhet',
                operator: 'eq',
                value: 'both',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'basementOrAttic',
                operator: 'eq',
                value: 'attic',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'numberOfLevels',
                operator: 'gte',
                value: '5',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'escapeAtGroundFloor',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'numberOfLevels',
                operator: 'eq',
                value: '4',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'canInstallWindowRadio',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'bigWindow',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'escapeUnkownFloor',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'ventilation',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'warmRoom',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          {
            type: 'and',
            clauses: [
              {
                field: 'radonLevel',
                operator: 'eq',
                value: '201',
              },
            ],
          },
        ],
      },
    },
    {
      id: 'hoorays',
      type: 'Result',
      heading: {
        complete: 'Rommet ditt kan bruksendres!',
        incomplete: 'Du har ikke svart på alle spørsmålene',
        incompleteWithError:
          'Du har ikke svart på alle spørsmålene og har feil i svarene dine',
        completeWithError: 'Du har feil i svarene dine',
      },
      lead: {
        complete:
          '<p>Svarene dine viser at det er mulig å bruksendre rommet, og at rommet kan oppfylle de vanligste tekniske kravene som gjelder rom i eldre boliger.  Du kan se hva du har svart nederst på denne siden.</p><p><b>Hva gjør jeg nå?</b><ul><li>Du må søke kommunen og få tillatelse før du starter arbeidene</li><li>Du har lov å gjøre arbeidene selv</li><li>Du kan bruke en fagperson, for eksempel en byggmester, hvis du er usikker på hvordan å gjøre endringene</li><li>Det er ditt ansvar at alle relevante tekniske krav blir fulgt for både rommet og boligen</li></ul></p><p><b>Hvordan søker jeg?</b><br>Du kan bruke søknadsskjemaet “Søknad om bruksendring“ som du finner på siden <a href="https://dibk.no/bygge-selv/soknadsskjema-for-mindre-byggeprosjekter-pa-boligeiendom/">“Søknadsskjemaer for mindre byggeprosjekter på boligeiendom“</a>. For hjelp til søknadsprosessen, kan du bruke vår veiledning <a href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.</p><p><b>Hvilke andre krav kan gjelde?</b><ul><li>Skal du ha innlagt vann? Da gjelder egne krav om fuktsikring, og vi anbefaler bruk av rørlegger</li><li>Skal du ha ny skorstein eller nytt ildsted? Da gjelder egne krav om sikkerhet og ventilasjon, og vi anbefaler bruk av kvalifisert installatør.</li><li>Det kan finnes begrensninger på hva du kan gjøre på eiendommen i kommunale planer, for eksempel på grunn av flom- og skredfare. Det er viktig å sette seg inn i planene før du søker.</li></ul></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
        incomplete:
          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incompleteWithError:
          '<p>Vi kan derfor ikke gi deg et resultat ennå. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        completeWithError:
          '<p>Du har svart feil på noen spørsmål. Du kan se hvilke spørsmål du har svart feil på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
      },
      exporter: 'dataExport',
    },
  ],
};

export default schema;