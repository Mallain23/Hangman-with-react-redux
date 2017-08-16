import React from 'react'
import {connect} from 'react-redux'

export function WordDisplay (props) {

      let word = props.wordDisplay

      if (typeof word === 'object') {
        word = word.join(' ')
      }

      return (
          <h2>{word}</h2>
      )

}

const mapStateToProps = state => ({
  wordDisplay: state.wordDisplay
})

export default connect(mapStateToProps)(WordDisplay)
