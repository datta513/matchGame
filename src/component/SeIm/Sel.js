import {Component} from 'react'
import Tablist from '../Check/Check'
import Image from '../imagestr/imageren'
import './Sel.css'

let tem = ''

export default class Semi extends Component {
  state = {curid: ''}

  change = id => {
    this.setState(prev => ({curid: id}))
  }

  render() {
    const {curid} = this.state
    const {a, onc, pr, currimg, imagl} = this.props
    tem = currimg
    console.log(currimg)
    const re = curid !== '' ? curid : a[0].tabId
    const reni = imagl.filter(each => each.category === re)
    console.log(re)
    console.log(`CURRENTIMF ${currimg}`)
    const trc = () => {
      onc()
    }
    const randin = () => {
      const k = Math.floor(Math.random() * imagl.length)
      return k
    }
    const check = id7 => {
      if (id7 === currimg) {
        console.log('entered')
        const t = randin()
        console.log(`random int ${t}`)
        onc(true, t)
      }
    }

    return (
      <div className="hit">
        <div className="tablist">
          {a.map(each => (
            <Tablist
              key={each.tabId}
              a={each}
              isactive={each.tabId === re}
              onc={this.change}
            />
          ))}
        </div>
        <ul className="ulsty">
          {reni.map(each => (
            <Image
              a={each.id}
              thumbnailUrl={each.imageUrl}
              prop={each}
              key={each.id}
              name={curid}
              onc={check}
            />
          ))}
        </ul>
      </div>
    )
  }
}
