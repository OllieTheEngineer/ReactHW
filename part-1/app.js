const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedCompenent msg="My name is Ollie"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))