const App = () => {
    return(
        <div>
            <Tweet
               username="@MzOllieBoop"
               name="Ollie"
               date="10/13/2022"
               msg="Learning React is Fun!"
               />
                <Tweet
               username="@BadGalRih"
               name="RihRih"
               date="02/18/2022"
               msg="Buy Fenty everything!"
               />
                <Tweet
               username="@RegineaCarter"
               name="Ms.Carter"
               date="11/29/2022"
               msg="Vlogging is fun!!"
               />
        </div>
        
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))