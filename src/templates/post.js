import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
// import find from 'lodash.find'
import Helmet from 'react-helmet'
// import Up from '../components/up'
import BgImg from '../components/Background/background'
import { TimelineMax } from 'gsap'

class PostTemplate extends Component {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  componentDidMount() {
    var animation = new TimelineMax()
    animation
      .set(this.refImage, { scale: 1.05 })

      .to(this.firstpostSubtitle, 1, {
        delay: 0.6,
        top: '-=14vh',
        opacity: '1',
        ease: Expo.easeOut,
      })
      .to(
        this.secondpostSubtitle,
        1,
        { top: '-=14vh', opacity: '1', ease: Expo.easeOut },
        '-=0.8'
      )

    this.createAnimation()

    this.scene = new Scene({
      duration: this.duration,
      triggerElement: this.wrapper,
      triggerHook: 0.55,
    })
    this.scene.indicatorName = 'Preview'
    this.scene.on('progress', this.updateScroll)

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  destroy() {
    this.scene.destroy()
  }

  componentWillUnmount() {
    this.destroy()
  }

  createAnimation() {
    if (this.animation) this.animation.kill()
    this.animation = new TimelineMax({ paused: true })

      .fromTo(
        this.subtitle,
        0.2,
        { opacity: 1, y: '0%' },
        { opacity: 0, y: '-10%', ease: Power0.easeOut }
      )
      // .to(this.refImage, 0.2, {scale: 0})
      .to(
        this.refImage,
        0.2,
        { y: '-25%', scale: 1, ease: Power0.easeOut },
        '-=0.2'
      )
    this.animDuration = this.animation.duration()
  }

  updateScroll = ({ progress }) => {
    this.animation.tweenTo(this.animDuration * progress)
  }

  duration = () => {
    return this.wrapper.getBoundingClientRect().height
  }

  render() {
    // const { alt, children, reverse, sizes } = this.props
    const {
      title,
      title2,
      slug,
      description,
      author,
      cover,
      images,
    } = this.props.data.contentfulGallery

    // const { name, categoryslug } = this.props.data.contentfulCategory

    // const postIndex = find(
    //     data.allContentfulGallery.edges,
    //     ({ node: post }) => post.id === id
    //   );
    return (
      <div>
        <Helmet>
          <title>{title} - JEAN EMMANUEL RODE PHOTOGRAPHE LILLE</title>
          <meta name='description' content={title} />
          <meta
            property='og:title'
            content={title + ' - JEAN EMMANUEL RODE PHOTOGRAPHE LILLE'}
          />
          <meta property='og:image' content={cover.sizes.src} />
          <meta property='og:image:width' content='1800' />
          <meta property='og:image:height' content='1200' />
          <meta
            property='og:url'
            content={'http://rode-island.com/' + slug + '/'}
          />
        </Helmet>

        <div className='post'>
          <div className='post-title'>
            <div className='post-title-wrapper'>
              <div className='post-title-padding'>
                <div className='post-title-style'>
                  <h1
                    ref={c => {
                      this.subtitle = c
                    }}
                  >
                    <span
                      ref={c => {
                        this.firstpostSubtitle = c
                      }}
                    >
                      {title}
                    </span>
                    <br />
                    <span
                      className='sottotitolo'
                      ref={c => {
                        this.secondpostSubtitle = c
                      }}
                    >
                      {title2}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className='post-cover'
            ref={c => {
              this.wrapper = c
            }}
          >
            <div
              ref={c => {
                this.refImage = c
              }}
            >
              <BgImg
                height={'100vh'}
                sizes={cover.sizes}
                alt={cover.title}
                title={cover.title}
                backgroundColor={'#f1f1f1'}
              />
            </div>
          </div>
          <div className='post-info'>
            <div className='post-info__left'>
              <h2 className='post-info-title'>Details</h2>
              <h3 className='post-category'>
                <Link to={'/' + author.authorSlug + '/'}>{author.name}
                  <span className='arrow-span'>
                    <svg className='arrow' width='6px' viewBox='0 0 6 10'>
                      <path d='M5.284,5.000 L1.000,9.285 L0.293,8.578 L3.870,5.000 L0.293,1.423 L1.000,0.716 L4.577,4.293 L4.577,4.293 L5.284,5.000 Z' />
                    </svg>
                  </span>
                  <span className='first-span'>

                  </span>
                  <span className='second-span'>
                    
                  </span>
                  <span className='third span'>
                    
                  </span>
                </Link>
              </h3>
              {/* {postIndex.previous && (<Link className='post-previous' to={'/' + postIndex.previous.slug + '/'}>Previous</Link>)}
                    {postIndex.next && (<Link className='post-next' to={'/' + postIndex.next.slug + '/'}>Next</Link>)} */}
            </div>
            <div className='post-info__right'>
              <div
                className='post-description'
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <ul className='post-images'>
            {images &&
              images.map((images, index) => (
                <li key={index}>
                  <Img
                    sizes={images.sizes}
                    alt={images.title}
                    title={images.title}
                    outerWrapperClassName={images.description}
                    backgroundColor={'#f1f1f1'}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      title2
      id
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      author {
        name
        authorSlug
      }
      category {
        name
        categorySlug
      }
    }
  }
`

export default PostTemplate
