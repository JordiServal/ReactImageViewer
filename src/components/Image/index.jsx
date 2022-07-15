
export default Image = ({ src, alt='', className='' }) => {
  const click = () => {
    console.log('clicked')
  }
  return <img src={src} alt={alt} className={className} onClick={click} />
}