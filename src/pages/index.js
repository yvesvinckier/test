import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Banner from 'components/Banner'

class IndexPage extends Component {
    static contextTypes = {
      scrollmagic: PropTypes.any,
    }
    componentDidMount() {
      var homeAnim = new TimelineMax()
      homeAnim
        .set(this.container, {autoAlpha: 0})
        .set(this.omega1, {x: -0.5})
        .set(this.omega2, {x: 0.5})
        .from(this.heroView, 2, {autoAlpha: 0, scale: 1.2, ease: Power4.easeInOut, delay: '0.1'})
        .fromTo(this.omega1, 2, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut, delay: '-0.8'})
        .fromTo(this.omega2, 2, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut}, '-=2')
        .from([this.letterI, this.letterM, this.letterW], 2, {autoAlpha: 0, ease: Power4.easeInOut}, '-=2')
        .from(this.allletter, 1, {y: '100%', autoAlpha: 0, ease: Power4.easeInOut}, '-=1')
        .to(this.logoSVG, 1, {scale: 0.7, y: '-=150%', ease: Power4.easeInOut}, '-=0.5')
        .fromTo(this.title1, 1, {autoAlpha: 0, y: 0, ease: Power4.easeInOut}, {autoAlpha: 1, y: '-100px', ease: Power4.easeInOut}, '-=0.8')
        .fromTo(this.title2, 1, {autoAlpha: 0, y: 0, ease: Power4.easeInOut}, {autoAlpha: 1, y: '-100px', ease: Power4.easeInOut}, '-=1')
        .from(this.scrollLine, 1, {y: '200px', ease: Power4.easeInOut}, '-=0.8')
        .set(this.container, {autoAlpha: 1})
      this.createScrollingAnimation()

      this.scene = new Scene({
        duration: this.duration,
        triggerElement: this.container,
        triggerHook: 0.5,
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

    createScrollingAnimation() {
      if (this.animation) this.animation.kill()
      this.animation = new TimelineMax({ paused: true })
        .fromTo(this.wave1, 0.5, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut})
        .fromTo(this.wave2, 0.5, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut}, '-=0.4')
        .fromTo(this.wave3, 0.5, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut}, '-=0.4')
        .fromTo(this.wave4, 0.5, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut}, '-=0.4')
        .fromTo(this.wave5, 0.5, {drawSVG: '0 0'}, {drawSVG: '0 100%', ease: Power4.easeInOut}, '-=0.4')
        .from(this.catElevage, 0.5, {autoAlpha: 0, y: '40px'}, '-=0.5')
        .from(this.keyWordUnique, 0.5, {autoAlpha: 0, y: '40px'}, '-=0.5')
        .from(this.titleElevage, 0.5, {autoAlpha: 0, y: '40px'}, '-=0.5')
        .from(this.paragraphElevage, 0.5, {autoAlpha: 0, y: '40px'}, '-=0.5')
        .from(this.linkElevage, 0.5, {autoAlpha: 0, x: '40px'}, '-=0.8')
        .from(this.imgElevage, 2, {autoAlpha: 0, x: '-100px', ease: Power4.easeInOut}, '-=1.8')

      this.animDuration = this.animation.duration()
    }

    updateScroll = ({ progress }) => {
      this.animation.tweenTo(this.animDuration * progress)
    }
    startAnimation = ({ enter }) => {
      this.paragraphAnimation.tweenTo(this.enter)
    }
    duration = () => {
      return this.wrapper.getBoundingClientRect().height * 0.5
    }

    render() {
      const {
        title,
        // id,
        // slug,
        aboutImages,
        pageDivider,
      } = this.props.data.contentfulAbout
      return (
        <div>
          <Helmet>
            <title>Mowi Design</title>
          </Helmet>

          <div ref={c => { this.heroView = c }}>
            <Banner
              sizes={pageDivider.sizes}
            >
              <Link to='/'>
                <svg ref={c => { this.logoSVG = c }} version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 588.821 184.13' xmlSpace='preserve'>
                  <g>
                    <path className='mwi' ref={c => { this.letterM = c }} d='M339.708,11.221h30.047l26.405,86.32l28.591-86.684h24.039l28.59,86.684l26.405-86.32h29.319l-43.523,128.387h-24.403
                        l-28.773-83.406l-28.773,83.406h-24.402L339.708,11.221z'
                    />
                    <path className='mwi' ref={c => { this.letterW = c }} d='M202.401,139.243h-30.047l-26.405-86.32l-28.591,86.684H93.319l-28.59-86.684l-26.405,86.32H9.004L52.527,10.857h24.403
                        l28.773,83.406l28.773-83.406h24.402L202.401,139.243z'
                    />
                    <path className='mwi' ref={c => { this.letterI = c }} d='M545.118,11.221h28.045v127.476h-28.045V11.221z' />
                  </g>
                  <path className='st0' ref={c => { this.omega1 = c }} d='M277.371,20.412c29.178,0,52.831,23.653,52.831,52.831s-23.653,52.831-52.831,52.831h68.168' />
                  <path className='st0' ref={c => { this.omega2 = c }} d='M277.371,20.412c-29.178,0-52.831,23.653-52.831,52.831s23.653,52.831,52.831,52.831h-68.17' />
                  <g ref={c => { this.allletter = c }}>
                    <path className='st1' ref={c => { this.letterU = c }} d='M481.66,168.236v-14.655h2.705v14.545c0,6.066,2.85,8.844,7.82,8.844c5.007,0,7.857-2.777,7.857-8.844v-14.545
                        h2.631v14.655c0,7.345-3.947,11.146-10.488,11.146S481.66,175.581,481.66,168.236z'
                    />
                    <path className='st1' ref={c => { this.letterN = c }} d='M532.2,153.581v25.582h-2.229l-16.445-20.757v20.757h-2.705v-25.582h2.229l16.481,20.758v-20.758H532.2z' />
                    <path className='st1' ref={c => { this.letterI2 = c }} d='M540.53,153.581h2.705v25.582h-2.705V153.581z' />
                    <path className='st1' ref={c => { this.letterK = c }} d='M559.495,167.139l-5.226,5.299v6.724h-2.705v-25.582h2.705v15.458l15.02-15.458h3.106l-11.073,11.585
                        l11.841,13.997h-3.216L559.495,167.139z'
                    />
                  </g>
                </svg>
              </Link>
              <h1 ref={c => { this.title1 = c }}>Découvrez le plaisir et les bienfaits</h1>
              <h2 ref={c => { this.title2 = c }}>d'un saumon unique élevé avec soin et respect</h2>
              <div className='home-scroll-invite' ref={c => { this.scrollLine = c }}>
                <div className='v-line' />
                <span className='home-scroll-invite__label'>Scroll</span>
              </div>
            </Banner>
          </div>
          <div className='grid grid--container one' ref={c => { this.container = c }}>
            <div className='cell cell--half slider--about' ref={c => { this.imgElevage = c }}>
              <div className='black'>
                <Img sizes={aboutImages[5].sizes} />
              </div>
            </div>
            <div className='cell cell--half bucket-list'>
            <Link to='/'>
              <svg version='1.1' id='Wave' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 111.5 65.75' xmlSpace='preserve'>
                <path className='stWave' ref={c => { this.wave5 = c }} d='M5.415,54.488c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
                  c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
                  c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
                  c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875'
                />
                <path className='stWave' ref={c => { this.wave4 = c }} d='M5.415,42.93c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
                  c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
                  c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
                  c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875'
                />
                <path className='stWave' ref={c => { this.wave3 = c }} d='M5.415,31.372c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
                  c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
                  c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
                  c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875'
                />
                <path className='stWave' ref={c => { this.wave2 = c }} d='M5.415,19.814c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
                  c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
                  c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
                  c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875'
                />
                <path className='stWave' ref={c => { this.wave1 = c }} d='M5.415,8.256c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
                  c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
                  c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
                  c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875'
                />
              </svg>
              <h3 ref={c => { this.catElevage = c }}>L'élevage</h3>
              <h2 ref={c => { this.keyWordUnique = c }}>Unique</h2>
              <h4 ref={c => { this.titleElevage = c }}>Parce que nous élevons <br />nos saumons avec soin</h4>
              <p ref={c => { this.paragraphElevage = c }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
              <div ref={c => { this.linkElevage = c }} className='link link--line-to-left'>
                <div className='field'>Notre process d’élevage</div>
              </div>
              </Link>
            </div>
          </div>
          <div className='grid grid--container two'>
            <div className='cell cell--half slider--about'>
              <Img sizes={aboutImages[4].sizes} />
            </div>
            <div className='cell cell--half bucket-list v2'>
              <svg version='1.1' id='Healthy' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 72 63' xmlSpace='preserve'>
                <path className='SVGHealthy' d='M44.409,56.707c-2.335,1.941-3.849,3.079-3.849,3.079s-29.518-21.69-29.518-37.193c0-15.502,17.984-26.124,29.461-16.27l0,0c13.014-9.667,28.911,0.768,28.911,16.27c0,9.328-10.447,20.897-18.769,28.632'
                />
                <polyline className='SVGHealthy' points='2.588,35.21 26.426,35.21 33.292,19.249 42.457,38.682 45.947,23.5 62.16,23.53 ' />
              </svg>
              <h3>bien-être</h3>
              <h2>healthy</h2>
              <h4 className='rightText'>les Saumons Mowi <br />un bienfait <br />pour notre organisme</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <div className='link link--line-to-left3'>
                <div className='field'>Les bienfaits du saumon</div>
              </div>
            </div>
          </div>
          <div className='grid grid--container one'>
            <div className='cell cell--half slider--about'>
              <div className='black'>
                <Img sizes={aboutImages[3].sizes} />
              </div>
            </div>
            <div className='cell cell--half bucket-list'>
              <svg version='1.1' id='Toque' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 69 73' xmlSpace='preserve'>
                <path className='stWave' d='M34.4,1.8c-9,0-16.6,5.8-19.3,13.9c-7.4,2-12.8,8.7-12.8,16.6c0,8.1,5.7,14.9,13.3,16.7v20.9 c0,0.4,0.4,0.8,0.8,0.8h36c0.4,0,0.8-0.4,0.8-0.8V49.1c7.6-1.8,13.3-8.6,13.3-16.7c0-8-5.5-14.7-12.8-16.6 C50.9,7.7,43.3,1.8,34.4,1.8z'
                />
                <line className='stWave' x1='44.274' y1='26.557' x2='44.274' y2='47.5'/>
                <line className='stWave' x1='34.365' y1='16.183' x2='34.365' y2='47.5'/>
                <line className='stWave' x1='24.456' y1='26.557' x2='24.456' y2='47.5'/>
                <line className='stWave' x1='15.575' y1='63.395' x2='53.155' y2='63.395'/>
              </svg>
              <h3>INSPIRATION DU MOMENT</h3>
              <h2>DÉGUSTATIONS </h2>
              <h4>DES INSPIRATIONS <br /> À DÉGUSTER TOUTE L’ANNÉE</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
              <div className='link link--line-to-left'>
                <div className='field'>Nos recettes du moment</div>
              </div>
            </div>
          </div>
          <Banner sizes={aboutImages[6].sizes} >
            <div className='wwf'>
              <svg version='1.1' id='Drop' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 48 66' xmlSpace='preserve'>
                <path className='stDrop' d='M42.535,31.633L42.535,31.633L23.782,1.792L5.028,31.633l0,0c-1.53,2.914-2.258,6.225-2.258,9.745c0,11.604,9.407,21.011,21.011,21.011c11.604,0,21.011-9.407,21.011-21.011C44.793,37.858,44.065,34.547,42.535,31.633z'
                />
                <line className='stDrop' x1='23.782' y1='1.792' x2='23.782' y2='62.369' />
                <line className='stDrop' x1='16.205' y1='23.275' x2='22.995' y2='30.066' />
                <line className='stDrop' x1='16.205' y1='31.748' x2='22.995' y2='38.538' />
                <line className='stDrop' x1='16.205' y1='40.221' x2='22.995' y2='47.011' />
                <line className='stDrop' x1='16.205' y1='48.693' x2='22.995' y2='55.484' />
                <path className='stDrop' d='M33.654,53.756c-0.45,0.359-0.92,0.694-1.409,1.003c-0.559,0.354-1.141,0.673-1.745,0.956'
                />
                <path className='stDrop' d='M34.988,30.151c2.868,2.868,4.642,6.83,4.642,11.206c0,3.023-0.846,5.848-2.315,8.252'
                />
              </svg>
              <h3>ENGAGEMENT</h3>
              <h2 className='titleRespect'>RESPECT</h2>
              <h4>L'impact sur l'environnement <br />est une préoccupation majeure</h4>
              <div className='p_wwf'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </div>
              <div className='link link--line-to-left2'>
                <div className='field'>Notre engagement pour l'environnement</div>
              </div>
            </div>
          </Banner>
        </div>
      )
    }
}

export const query = graphql`
  query HomeQuery {
    contentfulAbout {
      title
      slug
      id
      aboutImages {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
      pageDivider {
        title
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bucketList {
        childMarkdownRemark {
          html
        }
      }
      slider {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`

export default IndexPage
