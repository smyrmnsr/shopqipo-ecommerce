import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (

    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
      {/* <CookieConsent
            debug={true}
            location="top"
            style={{ background: '#000', textAlign: 'left'}}
            buttonStyle={{ color: '#000', background: '#fff', fontSize: '14px'}}
            buttonText={'I understand'}
            expires={1}
      >
        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
        We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. 
        You consent to our cookies if you continue to use our website.
      </CookieConsent>  */}
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
