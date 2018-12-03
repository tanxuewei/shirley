import React, { Component } from 'react';
import '../App.css';

// 只有一个render方法的叫做函数定义组件
function Square (props) {
  if (props.highlight) {
    return (
      <button className="square" onClick={props.onClick} style={{ color: 'red' }}>
        {props.value}
      </button>
    )
  } else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
}

class Board extends Component {
  renderSquare (i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={this.props.winnerLine.includes(i)}/>
    )
  }

  render () {
    var wrapper = []
    for (var i = 0; i <= 2; i++) {
      const row = []
      for (var j = 3 * i; j <= 3 * i + 2; j++) {
        row.push(this.renderSquare(j))
      }
      wrapper.push(<div className="board-row" key={i+1}>{row}</div>);
    }
    return (
      <div>{wrapper}</div>
    )
  }
}

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] }
    }
  }

  return null
}

class Game extends Component {
  constructor () {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        clickedLocation: [0, 0]
      }],
      stepNumber: 0,
      xIsNext: true,
      sort: false
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        clickedLocation: [Math.floor(i / 3) + 1, i % 3 + 1]
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: !( step % 2 )
    })
  }

  toggleSort () {
    const sort = this.state.sort
    this.setState({
      sort: !sort
    })
  }

  render () {
    const history = this.state.history
    const sort = this.state.sort
    const current = history[this.state.stepNumber]
    const winnerData = calculateWinner(current.squares)
    const winner = winnerData ? winnerData.line : null
    const winnerLine = winnerData ? winnerData.line : []
    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move + '(' + step.clickedLocation.join(', ') + ')' :
        'Game start';

      if (move == history.length - 1) {
        return (
          <li key={move}>
            <a href="#" style={{ fontWeight: 'bold' }} onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        )
      } else {
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        )
      }
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerLine={winnerLine}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}<button onClick={() => this.toggleSort()}>sort</button></div>
          {(() => {
            return !sort ? <ol>{moves}</ol> : <ol>{moves.reverse()}</ol>
          })()}
        </div>
      </div>
    )
  }
}


export default Game
