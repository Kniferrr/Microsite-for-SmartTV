import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PromoPage from "./PromoPage/PromoPage";
import NumberInputPage from "./NumberInputPage/NumberInputPage";
import FinalPage from "./FinalPage/FinalPage";
import { Provider } from "react-redux";
import store from "../store/store";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="main-сontainer">
          <HashRouter>
            <Routes>
              <Route path="/" element={<PromoPage />} />
              <Route path="/number-input" element={<NumberInputPage />} />
              <Route path="/final-page" element={<FinalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HashRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
