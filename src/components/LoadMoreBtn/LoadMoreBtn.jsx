const LoadMoreBtn = ({setPage}) => {
    return (
        <div>
            <button onClick={() => setPage((prev) => prev + 1)}></button>
        </div>
    )
}
export default LoadMoreBtn