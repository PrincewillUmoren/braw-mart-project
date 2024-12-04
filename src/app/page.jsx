import MainHeader from "./components/Main";
import MartDetails from "./components/MartDetails";
import Products from "./components/Products";


export default function Home() {
  return (
    <div>
      <MainHeader/>
      <Products/>
      <MartDetails/>
    </div>
  )
}