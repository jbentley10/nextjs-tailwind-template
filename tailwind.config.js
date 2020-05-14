// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    fontFamily: {
      display: 'Catamaran', 
      sans: ['Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': '0',

      'md': '768px',

      'lg': '990px',

      'xl': '1200px',
    },
    extend: {
      colors: {
        /* NTT Brand Colors */
        // Primary colors
        'nttblue': '#0072bc',
        'nttsilver': '#c8c8c8',
        'nttorange': '#db3d23',
        // Natural palette
        'nttcalmblue': '#bad2ed',
        'nttcalmteal': '#c7e8e6',
        'nttcalmorange': '#fcd4c9',
        'nttcalmgreen': '#9adcc6',
        'nttcyan': '#0fc8f2',
        'nttteal': '#2cd5b6',
        'nttdarkblue': '#001973',
        'nttgreen': '#008770',
        'good': '#1dbd45',
        'warning': '#ffbd53',
        'error': '#db3d23',
        'information': '#0fc8f2',
        // Text
        'dark': '#AEB2BB',
        'green': '#4CAF50',
        'form-text': '#AEB2BB',
        // Containers
        'top-row-background': '#3E4048',
        'edit-background': '#2e3036',
        'standard-border': '#3A3C44',
        'container-background': '#303138',
        'black-background': '#333',
        // Borders
        'dark-gray-border': '#353537',
        // Buttons
        'primary-button-background': '#72BF44',
        'primary-button-background-hover': '#90EE90',
        'secondary-button-background': '#72BF44',
        'secondary-button-background-hover': 'rgba(121,207,90,0.15)',
        'secondary-button-border': '#72BF44'
      },
      borderRadius: {
        'button-radius': '15px'
      },
      width: {
        '49': '49%',
        '8': '8%',
        '3': '3%'
      },
      padding: {
        'button-padding': '20px 30px'
      },
      height: {
        '68': '17vh',
        '128': '32vh',
        '260': '65vh',
        '340': '85vh',
      },
      minHeight: {
        '1/20': '5%',
        '1/10': '10%',
        '1/8': '12.5%',
        'screen-half': '50vh',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
      },
      zIndex: {
        'cover-all': '100',
        'navigation': '80',
        'body-content': '50'
      }
    }
  },
  variants: {
    textColor: ['hover'],
    backgroundColor: ['hover'],
    boxShadow: ['hover'],
  },
  plugins: [],
}