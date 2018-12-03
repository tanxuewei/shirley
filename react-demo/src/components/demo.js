import React, { Component, PureComponent } from 'react'

class ListOfWords extends PureComponent {
  render () {
    return <div>{this.props.words.join(',')}</div>
  }
}

class WordAdder extends Component {
  constructor () {
    super()
    this.state = {
      words: ['marklar']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const words = this.state.words.slice()
    words.push('marklar')
    this.setState({words: words})
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    )
  }
}

export default WordAdder
