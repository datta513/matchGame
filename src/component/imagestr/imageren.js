import './sty.css'

const Image = props => {
  const {a, prop, thumbnailUrl, onc, name} = props
  console.log(`image ${a}`)
  const fig = () => {
    onc(a)
  }
  const {imageUrl} = prop
  return (
    <li className="style">
      <button onClick={fig}>
        <img src={thumbnailUrl} alt="thumbnail" className="imt" />
      </button>
    </li>
  )
}
export default Image
