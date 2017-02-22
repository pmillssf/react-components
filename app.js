
var GroceryList = (props) => (
  <ul>
  {props.items.map( item => <GroceryListItem item={item} />)}
  </ul>
);
var GroceryListItem = (props) => (
  <li>{props.item}</li>
);
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