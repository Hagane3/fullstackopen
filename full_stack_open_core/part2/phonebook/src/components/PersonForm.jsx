export const PersonForm = ({nameHandler, name, numberHandler, number, personHandler}) => {
    return (
        <form>
            <div>
                name: <input onChange={nameHandler} value={name}/>
            </div>
            <div>
                number: <input onChange={numberHandler} value={number}/>
            </div>
            <div>
                <button type="submit" onClick={personHandler}>add</button>
            </div>
        </form>
    )
}