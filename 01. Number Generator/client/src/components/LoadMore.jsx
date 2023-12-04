const LoadMore = ({num, setNum}) => {

  const handleClick = () => {
    setNum(num => num+32)
  }

  return (
    <button onClick={handleClick} className="text-xl px-6 py-2 border-2 border-black rounded-md
    hover:bg-black hover:text-white transition-all mb-8">
        Load More
    </button>
  )
}
export default LoadMore