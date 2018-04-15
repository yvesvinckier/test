import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const Galleries = ({ data }) => {
  const posts = data.allContentfulGallery.edges

  return (
    <div>
      <Helmet>
        <title>
          Toutes les Galeries - JEAN EMMANUEL RODE Photographe LILLE
        </title>
        <meta
          name="description"
          content="Voir toutes les galeries par JEAN EMMANUEL RODE Photographe LILLE"
        />
        <meta
          property="og:title"
          content="Toutes les Galeries - JEAN EMMANUEL RODE Photographe LILLE"
        />
        <meta property="og:image" content={posts[0].node.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:url"
          content="http://www.rode-island.com/galeries/"
        />
      </Helmet>

      <div className="category-navigation">
        <h2>Galeries</h2>
        <ul className="category-navigation__links">
          <li>
            <Link to="/galeries/" className="active">
              All
            </Link>
          </li>
          <li>
            <Link to="/culinaire-sucre/">Culinaire sucré</Link>
          </li>
          <li>
            <Link to="/culinaire-sale/">Culinaire salé</Link>
          </li>
        </ul>
      </div>

      <ul className="galleries-list">
        {posts.map(({ node: post, index }) => (
          <li key={post.id}>
            <Link to={'/' + post.slug + '/'}>
              <Img
                sizes={post.cover.sizes}
                alt={post.cover.title}
                title={post.cover.title}
                backgroundColor={'#f1f1f1'}
              />
              <h3>view gallery</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query GalleryQuery {
    allContentfulGallery(
      filter: { node_locale: { eq: "fr-FR" } }
      limit: 100
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          date
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default Galleries
