import Header from "./containers/Header";
import BestProductList from "./containers/BestProductList";
import ProductNew from "./containers/ProductNew";
import CategoryList from "./containers/Category/CategoryList";
import Footer from "./containers/Footer/Footer";
import Instagram from "./containers/Insta/Instagram";
import RoomTourReviews from "./containers/ReviewLists/RoomTourReviewList";
import Display from "./containers/Display/Display";
import MiddleBanner from "./components/Banners/MiddleBanner";
import BottomBanner from "./components/Banners/BottomBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryList/>
      <BestProductList />
      <ProductNew />
      <MiddleBanner/>
      <RoomTourReviews/>
      <Display/>
      <BottomBanner/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
