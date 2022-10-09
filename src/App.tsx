import "styles/app.scss";
import "styles/global.scss";
import "styles/responsive.scss";
import "react-datepicker/dist/react-datepicker.css";

import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "pages";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
