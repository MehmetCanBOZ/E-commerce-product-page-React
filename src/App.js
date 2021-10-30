import './App.scss';
import Header from './components/Header/Header';
import Slider from 'components/Slider/Slider';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import {CartContexProvider} from './context/useCartContext';
import {ThemeContext, useContext} from './context/useThemeContext';
import ModalProduct from 'components/ModalProduct/ModalProduct';
function App() {
  const {theme,sideBarTheme} = useContext(ThemeContext);
  return (
      <CartContexProvider>
        <div className={`App ${theme || sideBarTheme ? "light-background" : "" }`}>
          <Header/>
          {theme && <ModalProduct/>}
          <div className="detail">
          <Slider/>
          <ProductDetail/>
          </div>
        </div>
     </CartContexProvider>
  );
}

export default App;
