class GroceryListItem extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	done: false
	  };
	}

	onListItemHover() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {'fontWeight': this.state.done ? 'bold' : 'none'};
		return <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
	};
}

var GroceryList = (props) => (
  <ul>
  {props.items.map( item => <GroceryListItem item={item} />)}
  </ul>
);
// Why don't we need to call new?

ReactDOM.render(<GroceryList items = {['pie', 'tea', 'food']}/>, document.getElementById("app"));


// var Pie = () => (
//   <li>Pie</li>
// );

// var IceCream = () => (
//   <li>Ice Cream</li>
// );
// // TODO
// var GroceryList = (props) => (
//   <ul>
// 	  <Pie />
// 	  <IceCream />
//   </ul>
// );

