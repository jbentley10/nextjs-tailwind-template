/**
 * BuildSoundtrack.jsx
 */
import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

// Local components
import Layout from '../components/Layout'

const {{name}} = ({ somProp }) => (
  <Layout className={`{{className}}`}>
    <p>{headerTitle}</p>
    <style jsx>{`
      .{{className}} {

      }
    `}</style>
  </Layout>
)

/**
 * getInitialProps
 * @description Similar to componentDidMount and where API data fetches should happen.
 *
 */
{{name}}.getInitialProps = async function({ query }) {
  console.log(query)
  // const results = await fetch('http://localhost:' + (process.env.NODE_ENV == 'production' ? 8081 : 3000) + '/api/buildSoundtrack?lang='+query.id)
  // const data = await results.json()
  // console.log(data)

  // The component props.
  return {
    someProp: 'Override the default.'
  }
};

{{name}}.propTypes = {
  someProp: PropTypes.string,
};

{{name}}.defaultProps = {
  someProp: 'Default prop',
};

export default {{name}}
