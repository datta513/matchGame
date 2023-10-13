import './syr.css'

const Tablist = props => {
  const {a, isactive, onc} = props

  const {tabId, displayText} = a
  const change = () => {
    onc(tabId)
  }
  console.log('entered tablist')
  console.log(isactive)
  const sty = isactive ? 'styi' : ''
  console.log(sty)
  return (
    <li>
      <button className={sty} onClick={change}>
        <p> {displayText}</p>
      </button>
    </li>
  )
}

export default Tablist
