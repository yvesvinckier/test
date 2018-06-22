import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BgImg from '../components/background'
import Helmet from 'react-helmet'
import { TimelineMax } from 'gsap'
import DrawSVGPlugin from '../vendor/DrawSVGPlugin'
import ScrollDown from '../components/Banner/ScrollDown/index'

class HomePage extends Component {
    static contextTypes = {
      scrollmagic: PropTypes.any,
    }

    componentDidMount() {
      var homeAnimation = new TimelineMax()
      homeAnimation
        .set(this.drawWhite, {rotation: 90, transformOrigin: 'center center', drawSVG: '0% 0%'})
        // .fromTo(this.drawWhite, 1, {drawSVG: '0', ease: Linear.easeNone})
        .fromTo(this.drawWhite, 2, {drawSVG: '100% 0'}, {drawSVG: '0% 0%', ease: Power4.easeInOut, delay: '1'})
        .from(this.bcgImage, 2, {autoAlpha: 0, scale: 1.05, ease: Power4.easeInOut}, '-=1')
        // .to(this.drawWhite, 1, {drawSVG: "100% 100%",
        //   ease: Power1.easeOut})
    };

  //   var blackBlock = document.getElementsByClassName('uncover__slice');
  //   var bcgImage = document.getElementsByClassName('heroImage');
  //   var homeAnimation = new TimelineMax()
  //   homeAnimation

  //   .staggerTo(blackBlock, 2, {y :"-100%", ease: Expo.easeIn}, 0.1)
  //   .from(bcgImage,2, {opacity:0, scale:1.2, ease: Expo.easeOut}, '-=0.8')
  //  var windowHeight = window.innerWidth /2;

    render() {
      const posts = this.props.data.allContentfulGallery.edges
      const page = this.props.data.contentfulHome
      const coverImage = page.cover.sizes.src

      return (

        <div>
          <Helmet>
            <title>
          JEAN EMMANUEL RODE Photographie - Photographe culinaire spectacle à
          Lille
            </title>
            <meta
              name='description'
              content='JEAN EMMANUEL RODE Photographie helps clients capture special moments in culinary photography à Lille'
            />
            <meta
              property='og:title'
              content='JEAN EMMANUEL RODE Photographie - Photographe culinaire spectacle à Lille'
            />
            <meta property='og:image' content={page.cover.sizes.src} />
            <meta property='og:image:width' content='1920' />
            <meta property='og:image:height' content='1200' />
          </Helmet>

          <div className='slider' ref={c => { this.slider = c }}>
            <div ref={c => { this.bcgImage = c }}>
              <BgImg
                className='heroImage'
                height={'100vh'}
                sizes={page.cover.sizes}
                alt={page.cover.title}
                title={page.cover.title}
              />
            </div>
            <div className='item'>
              <svg className='svg-image' xmlns='http://www.w3.org/2000/svg'>
                <image width='100%' height='100%' xlinkHref={coverImage} mask='url(#donutmask)' />
              </svg>
              <svg className='svg-defs' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <defs>
                  <mask id='donutmask'>
                    <circle id='outer' cx='50%' cy='50%' r='25%' fill='white' />
                    <circle id='inner' cx='50%' cy='50%' r='16%' />
                  </mask>
                </defs>
              </svg>
              <svg className='white-circle'>
                <circle ref={c => { this.drawWhite = c }} id='draw-white' cx='50%' cy='50%' r='20%' stroke='white' strokeWidth='150' fill='none' />
              </svg>
            </div>

            {/* <div className="uncover__slices uncover__slices--vertical">
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
            <div className="uncover__slice"></div>
        </div> */}

          </div>
          <div className='page'>
            <div
              className='quote'
              dangerouslySetInnerHTML={{
                __html: page.quote.childMarkdownRemark.html,
              }}
            />

            <div className='featured'>
              <div className='featured__newest sticky'>
                <h2>Recent Work</h2>
                <Link to={posts[0].node.slug + '/'}>
                  <Img
                    sizes={posts[0].node.cover.sizes}
                    alt={posts[0].node.cover.title}
                    title={posts[0].node.cover.title}
                    backgroundColor={'#f1f1f1'}
                  />
                  <h3>View Gallery</h3>
                </Link>
              </div>

              <ul className='featured__list'>
                {posts.slice(1).map(({ node: post }) => (
                  <li key={post.id}>
                    <Link to={post.slug + '/'}>
                      <Img
                        sizes={post.cover.sizes}
                        alt={post.cover.title}
                        title={post.cover.title}
                        backgroundColor={'#f1f1f1'}
                      />
                      <h3>View Gallery</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ScrollDown />
        </div>
      )
    }
}

export const query = graphql`
  query HomeTestQuery {
    allContentfulGallery(
      filter: { node_locale: { eq: "fr-FR" } }
      limit: 8
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          date(formatString: "M.DD.YYYY")
          cover {
            title
            sizes(maxWidth: 1920) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
    contentfulHome {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      quote {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default HomePage
