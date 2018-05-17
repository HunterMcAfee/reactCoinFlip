
// Classes are smart functions.
// They are not pure.
// They change their output, based on the application state
const Coin = React.createClass(
    {
        sides: [
            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
        ],
        getInitialState: function () {
            return {
                image: this.sides[0]
            }
        },
        flipCoin: function() {
            // In here, we changes this.state.image
            // ANYTIME we change state, render will be called
            let newSide = 0;
            let randomSide = Math.round(Math.random());
            newSide = this.sides[randomSide];
            // WE NEVER EVER EVER EVER DO THIS:
            // this.state.image = newSide
            this.setState({
                image: newSide
            });
        },
        // Smart functions don't have a pure return (always return the same)
        // They have a render method.  The render method has the return statement.
        // All rules apply(jsx, single element)
        // Render is special.  Render is called when it's time to put the component in the DOM
        render: function () {
            return(
                <div>
                    <button onClick={this.flipCoin}>Click to Flip</button>
                    <img src={this.state.image} />
                </div>
            )
        }
    }
)

// Pure function, aka, dumb function
// Presentational component. It's job is to present
// some HTML... it's dumb and it's good at it's job
// Outside factors do not affect this function
// function Coin() {
//     return(
//         <h1>Sanity check</h1>
//     )
// }

ReactDOM.render(
    <Coin />,
    document.getElementById("root")
)