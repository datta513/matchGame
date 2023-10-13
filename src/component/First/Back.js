import {Component} from 'react'
import Semi from '../SeIm/Sel'
import Wincard from '../wincard/Wincard'
import './Back.css'

export default class Back extends Component {
  state = {pres: 0, start: false, id: '', ptime: 60, prevc: 0}

  componentDidMount() {
    this.id = setInterval(this.update, 1000)
  }

  restart = () => {
    this.setState(prev => ({
      pres: 0,
      start: false,
      id: '',
      ptime: 60,
      prevc: 0,
    }))
    this.componentDidMount()
  }

  change = (cond, t) => {
    console.log(` int receieved ${t}`)
    if (cond) {
      this.setState(prev => ({
        pres: prev.pres + 1,
        prevc: t,
      }))
    }
  }

  update = () => {
    const {ptime} = this.state
    if (ptime !== 0) this.setState(prev => ({ptime: prev.ptime - 1}))
    else {
      clearInterval(this.id)
      this.setState(() => ({
        start: true,
      }))
    }
  }

  render() {
    const {tabs, images} = this.props
    const {pres, start, ptime, prevc} = this.state
    console.log(`present details ${pres}, ${start}, ${ptime}`)
    console.log(`presenr count ${prevc}`)
    const l1 = images[prevc].id
    console.log(`current imge ${l1}`)
    const chagere = () => {}

    return (
      <div className="main1">
        <ul className="navty">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
              alt="website logo"
              height="50"
            />
          </li>
          <li>
            <div className="jut">
              <p>
                Score:<span className="tes">{pres}</span>
              </p>
              <div className="jut">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                  alt="timer"
                  height="20"
                />
                <p className="tes">{ptime} sec</p>
              </div>
            </div>
          </li>
        </ul>
        {start ? (
          <Wincard pres={pres} ont={this.restart} />
        ) : (
          <div>
            <div className="fle">
              <img src={images[prevc].imageUrl} alt="match" />
            </div>
            <ul className="fle">
              <Semi onc={this.change} a={tabs} currimg={l1} imagl={images} />
            </ul>
          </div>
        )}
      </div>
    )
  }
}
