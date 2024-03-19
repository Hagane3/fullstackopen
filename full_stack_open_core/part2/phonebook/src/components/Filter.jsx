export const Filter = ({value, handler}) => {
    return (
        <div>
            filter shown with: <input onChange={handler} value={value}/>
        </div>
    )
}