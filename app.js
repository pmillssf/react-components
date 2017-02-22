
var Pie = () => (
  <li>Pie</li>
);

var IceCream = () => (
  <li>Ice Cream</li>
);
// TODO
var GroceryList = () => (
  <ul>
	  <Pie />
	  <IceCream />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));