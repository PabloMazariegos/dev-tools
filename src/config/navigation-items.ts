export const navigationItems = [
  {
    type: 'subheader',
    title: 'Encoders and Decoders'
  },
  {
    title: 'Base64',
    props: {
      to: '/encoders-decoders/base64',
      exact: true,
      link: true
    }
  },
  {
    type: 'divider'
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
      link: true
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'subheader',
    title: 'Encryption'
  },
  {
    title: 'Bcrypt',
    value: 'bcrypt',
    props: {
      to: '/encryption/bcrypt',
      exact: true,
      link: true
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'subheader',
    title: 'Generators/Parsers'
  },
  {
    title: 'UUID',
    value: 'uuid',
    props: {
      to: '/generators-parsers/uuid',
      exact: true,
      link: true
    }
  },
  {
    title: 'Cron parser',
    value: 'cron',
    props: {
      to: '/generators-parsers/cron',
      exact: true,
      link: true
    }
  }
]
