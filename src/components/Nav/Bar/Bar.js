import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Hamburger from '../Hamburger'
import Headroom from 'react-headroom'
// import Link from 'components/Link'
import Link from 'gatsby-link'
// import blackCircle from '../../../images/blackCircle.svg'

// import styles from './styles.module.scss'
import './headroom.scss'

export default class Bar extends PureComponent {
  static propTypes = {
    opened: PropTypes.bool,
    toggle: PropTypes.func,
  }

  settings = {
    disableInlineStyles: true,
  }

  render() {
    const { toggle, opened } = this.props
    return (
      <Headroom {...this.settings}>
        <div className='header__container'>
          <Link to='/'>
            <svg className='blackcircle' x='0px' y='0px' viewBox='0 0 45 45'>
              <circle className='path' cx='22.5' cy='22.5' r='18.5' />
            </svg>
            <span>
              Jean-Emmanuel Rode <br />— Photographe
            </span>
          </Link>

          <div>
            <Hamburger opened={opened} onClick={toggle} />
          </div>
        </div>
      </Headroom>
    )
  }
}
