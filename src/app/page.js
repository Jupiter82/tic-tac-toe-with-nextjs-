
//declare variable PRODUCTS
import MyButton from "@/components/MyButton"
import { Profile } from "@/components/Profile";
import Link from "next/link";
const PRODUCTS = [
  //array
  //object
  //key or property : value
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
// let content;

// if (isLoggedIn) {
//   content = <AdminPanel/>;
// } else {
//   content = <LoginForm/>
// }


export default function Home() {
  const listItems = PRODUCTS.map((PRODUCTS, i) => (
    <li key={i} style={{ color: PRODUCTS.isFruit ? "red" : "green"}}>
      {PRODUCTS.title}
    </li>
  ));

  return (
    <>
      <h1>Welcome to my app</h1>
      <Link href="/counterCountTogether">Go to another page</Link>
      <Link href="/ticTacToe">Play Tic-Tac-Toe</Link>
      
      <br></br>
      <br></br>
      <MyButton />
      <h3>Fruit vs Vegetable</h3>
      <p><span style={{color:"green"}}>green vegetable </span><span style={{color:"red"}}>red fruit </span></p>
      <ul>{listItems}</ul>
      <Profile/>
    </>
  );
}
