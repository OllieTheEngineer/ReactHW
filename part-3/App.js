const App = () => {
    return (
        <div>
            <Person
            name="Lisa"
            age={8}
            hobbies={["reading", "saxophone", "eating vegetables"]}
            />
            <Person
            name="Bart"
            age={10}
            hobbies={["skateboarding", "making prank calls"]}
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))