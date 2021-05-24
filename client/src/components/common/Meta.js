import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To AK-Ventures | Home',
  description: `AKVentures is a group of companies which deals in al over the
  United Arab Emirates and have following sister concern companies:
  Al Manzal, Chiltern travel & tours, NAM Global and Trusticon.`,
  keywords: 'real estate, import and export, tour and travel',
}

export default Meta
