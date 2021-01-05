import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "./Components/Loader";
import store from "./Store";
import { fetchData } from "./Components/Reducer";
import { fetchFeedbackData } from "./Services/FetchData";

function AppComponent(props) {
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchFeedbackData().then(
      (data) => {
        props.fetchData(data.data);
        setLoader(false);
      },
      []
    );
  });

  if (loader) return <Loader />;
  return <Navigation />;
}

const mapStateToProps = (state) => ({
  feedbackData: state.feedbackData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: bindActionCreators(fetchData, dispatch),
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppContainer;
