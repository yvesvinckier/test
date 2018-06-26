import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Banner from 'components/Banner'
import Slider from 'react-slick'



class About extends Component {
    static contextTypes = {
      scrollmagic: PropTypes.any,
    }

    render() {
      const {
        title,
        // id,
        // slug,
        aboutImages,
        bio,
        pageDivider,
        bucketList,
        slider,
      } = this.props.data.contentfulAbout
    
      const sliderSettings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipeToSlide: true,
        draggable: false,
        centerMode: true,
        centerPadding: 0,
        arrows: true,
        touchMove: true,
        dots: true,
        responsive: [{ breakpoint: 640, settings: { draggable: true, arrows: false } }],
      }

    

  return (
    <div>
      <Helmet>
        <title>Mowi Design</title>
        {/* <meta name='description' content=' ' />
        <meta property='og:title' content=' ' />
        <meta property='og:image' content={aboutImages[0].sizes.src} />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='1000' />
        <meta property='og:url' content='http://www.rode-island.com/about/' /> */}
      </Helmet>

      
        <Banner
          sizes={this.props.data.bannerImage.sizes}
        >
          
          <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 588.821 184.13" xmlSpace="preserve">
            <g>
              <path className="mwi" d="M339.708,11.221h30.047l26.405,86.32l28.591-86.684h24.039l28.59,86.684l26.405-86.32h29.319l-43.523,128.387h-24.403
                l-28.773-83.406l-28.773,83.406h-24.402L339.708,11.221z"/>
              <path className="mwi" d="M202.401,139.243h-30.047l-26.405-86.32l-28.591,86.684H93.319l-28.59-86.684l-26.405,86.32H9.004L52.527,10.857h24.403
                l28.773,83.406l28.773-83.406h24.402L202.401,139.243z"/>
              <path className="mwi" d="M545.118,11.221h28.045v127.476h-28.045V11.221z"/>
            </g>
            <path className="st0" d="M277.371,20.412c29.178,0,52.831,23.653,52.831,52.831s-23.653,52.831-52.831,52.831h68.168"/>
            <path className="st0" d="M277.371,20.412c-29.178,0-52.831,23.653-52.831,52.831s23.653,52.831,52.831,52.831h-68.17"/>
            <g>
              <path className="st1" d="M481.66,168.236v-14.655h2.705v14.545c0,6.066,2.85,8.844,7.82,8.844c5.007,0,7.857-2.777,7.857-8.844v-14.545
                h2.631v14.655c0,7.345-3.947,11.146-10.488,11.146S481.66,175.581,481.66,168.236z"/>
              <path className="st1" d="M532.2,153.581v25.582h-2.229l-16.445-20.757v20.757h-2.705v-25.582h2.229l16.481,20.758v-20.758H532.2z"/>
              <path className="st1" d="M540.53,153.581h2.705v25.582h-2.705V153.581z"/>
              <path className="st1" d="M559.495,167.139l-5.226,5.299v6.724h-2.705v-25.582h2.705v15.458l15.02-15.458h3.106l-11.073,11.585
                l11.841,13.997h-3.216L559.495,167.139z"/>
            </g>
          </svg>
              <h1>Découvrez le plaisir et les bienfaits</h1>
              <h2>d'un saumon unique élevé avec soin et respect</h2>
              <div className= "home-scroll-invite">
                <div className= 'v-line'></div>
                <span className= 'home-scroll-invite__label'>Scroll</span>
              </div>
        </Banner>
      <div className='grid grid--container one'>
        <div className='cell cell--half slider--about'>
            <Img sizes={this.props.data.heroImage.sizes} />
        </div>
        <div className='cell cell--half bucket-list'>
          <svg version="1.1" id="Wave" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111.5 65.75" xmlSpace="preserve">
            <path className="stWave" d="M5.415,54.488c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,42.93c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,31.372c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,19.814c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,8.256c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
          </svg>
          <h3>L'élevage</h3>
          <h2>Unique</h2>
          <h4>Parce que nous élevons <br />nos saumons avec soin</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
          <div className="link link--line-to-left">
          <div className="field">NOTRE PROCESS D’élevage</div>
          </div>
        </div>
      </div>
      <div className='grid grid--container two'>
        <div className='cell cell--half slider--about'>
            <Img sizes={this.props.data.heroImage2.sizes} />
        </div>
        <div className='cell cell--half bucket-list v2'>
          <svg version="1.1" id="Wave" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111.5 65.75" xmlSpace="preserve">
            <path className="stWave" d="M5.415,54.488c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,42.93c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,31.372c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,19.814c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,8.256c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
          </svg>
          <h3>L'élevage</h3>
          <h2>Unique</h2>
          <h4>Parce que nous élevons <br />nos saumons avec soin</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
          <div className="link link--line-to-left">
          <div className="field">NOTRE PROCESS D’élevage</div>
          </div>
        </div>
      </div>
      <Banner sizes={this.props.data.pageDivider.sizes} >
        <div className='wwf'>
          <svg version="1.1" id="Wave" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111.5 65.75" xmlSpace="preserve">
            <path className="stWave" d="M5.415,54.488c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,42.93c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,31.372c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,19.814c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
            <path className="stWave" d="M5.415,8.256c5.423,0,8.167,1.097,10.819,2.159c2.408,0.965,4.684,1.875,9.341,1.875
              c4.658,0,6.934-0.91,9.343-1.875c2.654-1.061,5.397-2.159,10.823-2.159s8.169,1.097,10.823,2.159
              c2.409,0.965,4.686,1.875,9.345,1.875s6.937-0.91,9.347-1.875c2.654-1.061,5.397-2.159,10.824-2.159
              c5.425,0,8.169,1.097,10.823,2.159c2.411,0.965,4.688,1.875,9.347,1.875"/>
          </svg>
          <h3>ENGAGEMENT</h3>
          <h2>RESPECT</h2>
          <h4>L'impact sur l'environnement <br />est une préoccupation majeure</h4>
          <div className= "p_wwf">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </div>
          <div className="link link--line-to-left2">
            <div className="field">NOTRE PROCESS D’élevage</div>
          </div>
        </div>
        </Banner>
      

    </div>
  )
}
}


export const query = graphql`
  query AboutQuery {
    bannerImage: imageSharp(id: { regex: "/banners/lachlan-gowen-615212-unsplash.jpg/" }) {
      sizes(
        quality: 100
        maxWidth: 1920
      ) {
        ...GatsbyImageSharpSizes
      }
    }
    pageDivider: imageSharp(id: { regex: "/banners/torbjorn-sandbakk-621176-unsplash.jpg/" }) {
      sizes(
        quality: 100
        maxWidth: 1920
      ) {
        ...GatsbyImageSharpSizes
      }
    }
    
    heroImage: imageSharp(id: { regex: "/banners/toa-heftiba-270814-unsplash.jpg/" }) {
      sizes(
        quality: 100
        maxWidth: 1920
      ) {
        ...GatsbyImageSharpSizes
      }
    }
    heroImage2: imageSharp(id: { regex: "/banners/caroline-attwood-301746-unsplash.jpg/" }) {
      sizes(
        quality: 100
        maxWidth: 1920
      ) {
        ...GatsbyImageSharpSizes
      }
    }
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
        sizes(maxWidth: 1800) {
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

export default About
