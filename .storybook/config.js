import { configure, addParameters} from '@storybook/react'

// You can change the theme settings via the following file.
//import nttTheme from './theme_ntt'

// @see https://www.npmjs.com/package/@storybook/addon-viewport
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// @see https://www.npmjs.com/package/@storybook/addon-console
import { setConsoleOptions } from '@storybook/addon-console'

// automatically import all files ending in *.stories.jsx
const req = require.context('../components', true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Console settings
setConsoleOptions({
  panelExclude: [],
})

addParameters({
  options: {
    //theme: nttTheme,
  },
  a11y: {
    // ... axe options
    // element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
  backgrounds: [
    { name: 'gray', value: '#707070', default: true },
    { name: 'orange', value: '#F49B23' },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'responsive',
  },
})

configure(loadStories, module)