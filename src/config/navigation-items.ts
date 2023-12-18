export const navigationItems = [
  {
    type: 'subheader',
    title: 'Encoders and Decoders'
  },
  {
    title: 'Base64',
    props: {
      to: '/encoders-decoders/base64',
      exact: true
    }
  },
  {
    type: 'subheader',
    title: 'Converters'
  },
  {
    title: 'Camelize and decamelize',
    props: {
      to: '/converters/camelize-decamelize',
      exact: true,
    }
  },
  {
    type: 'subheader',
    title: 'Encryption'
  },
  {
    title: 'Bcrypt',
    props: {
      to: '/encryption/bcrypt',
      exact: true,
    }
  },
  {
    type: 'subheader',
    title: 'Generators/Parsers'
  },
  {
    title: 'UUID',
    props: {
      to: '/generators-parsers/uuid',
      exact: true,
    }
  },
  {
    title: 'Cron parser',
    props: {
      to: '/generators-parsers/cron',
      exact: true,
    }
  }
]
