import dummyData from "./api/dummy";
import GetItems from "./Items/getItems";
import Button from "./Items/Button";
import RateForm from "./form/addRate";
import { useState, Fragment } from "react";
import "./layout.css";

const Layout = () => {
  // set state for form and block widget
  const [getForm, setForm] = useState(false);
  const [getWidget, setWidget] = useState(false);

  const showWidget = () => {
    setWidget((previousWid) => {
      return !previousWid;
    });
  };

  // toggle form for adding new item
  const showForm = () => {
    setForm((previousForm) => {
      return !previousForm;
    });
  };

  //  get array items and save new update file to state
  const [getItems, setItem] = useState(dummyData);

  const store = (newrate) => {
    setItem((previousSnap) => {
      return [newrate, ...previousSnap];
    });
  };

  // filter out the removed id and update it state
  const updateItems = (id) => {
    const update = getItems.filter((item, index) => index !== id);
    setItem(update);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="card bg-dark rounded-5 p-5">
          {getWidget && (
            <Fragment>
              <div className="row my-3">
                <div className="text-center mx-auto text-white">
                  <Button
                    onClick={showForm}
                    className="btn-md btn-info py-2 px-5 rounded-1"
                  >
                    <span>Toggle rate form</span>
                  </Button>
                </div>
                <RateForm storeRate={store} formProp={getForm} />
              </div>
              {getItems.length <= 0 && (
                <p className="text-white fs-5">no items found</p>
              )}
              <GetItems items={getItems} removeId={updateItems} />
            </Fragment>
          )}

          <Button
            className="btn-sm py-2 btn-outline-light"
            onClick={showWidget}
          >
            <span>Toggle me to start React application</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Layout;
