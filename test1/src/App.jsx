import "./App.css";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";

function App() {
  const isLoggedIn = false;
  let component = "";
  if (isLoggedIn) {
    component = <AdminPanel />;
  } else {
    component = <LoginForm />;
  }

  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Banana", id: 4 },
  ];
  const listItems = products.map((product) => {
    return <li key={product.id}>{product.title}</li>;
  });

  return (
    <div>
      <h1>{component}</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
