import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 使用函数定义组件
function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends Component {
  renderSquare (i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>
    );
  }

  render () {
    let wrapper = []
    for (let i = 0; i < 3; i++) {
      let row = []
      for (let j = 3 * i; j < 3 * i + 3; j++) {
        row.push(this.renderSquare(j));
      }
      wrapper.push(<div className="board-row" key={i}>{row}</div>)
    }
    return (
      <div>
        {wrapper}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        clickedLocation: [0, 0]
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares,
        clickedLocation: [Math.floor(i / 3) + 1, i % 3 + 1],
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const clickedLocation = step.clickedLocation;
      const desc = move ?
        'Move #' + move + '(' + clickedLocation[0] + ',' + clickedLocation[1] + ')' :
        'Game start';

      if (move == this.state.stepNumber) {
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}><strong>{desc}</strong></a>
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

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        </div>
      </div>
    );
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
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

export default App;
