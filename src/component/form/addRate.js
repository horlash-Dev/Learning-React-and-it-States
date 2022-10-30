import { useState, Fragment, useRef } from "react";

const RateForm = (props) => {
  // set state for form properties
  // method 1
  const [earnIn, setEarn] = useState("");
  //method 3 for input access only
  const rateIn = useRef("");

  // method 2 for multiple inputs
  // const [methodXtra, setMethod] = useState({
  //   earnIn: '', rateIn: ''
  // })
  const earnHandler = (event) => {
    setEarn(event.target.value);
    //  method 2 cont
    // setMethod((previousData) => {
    //   return {...previousData, earnIn: event.target.value}
    // })
  };

  //  submit form
  const rateSubmit = (e) => {
    e.preventDefault();
    let setRate = rateIn.current.value;
    const _newrate = {
      gain: earnIn,
      rate: setRate,
      id: Math.random().toString(),
    };
    props.storeRate(_newrate);
    setEarn("");
    rateIn.current.value = "";
  };
  if (props.formProp) {
    return (
      <Fragment>
        <div className="col-md-12 bg-light rounded-5 p-5 my-5">
          <form action="" onSubmit={rateSubmit} className="form-group">
            <div className="mb-2">
              <input
                type="number"
                name=""
                id=""
                required
                className="form-control"
                placeholder=""
                value={earnIn}
                onChange={earnHandler}
                aria-describedby="helpId"
              />
              <small id="helpId" className="text-muted">
                earnings
              </small>
            </div>

            <div className="mb-1">
              <input
                type="number"
                name=""
                id=""
                required
                className="form-control"
                placeholder=""
                ref={rateIn}
              />
              <small id="helpId" className="text-muted">
                ratings
              </small>
            </div>

            <div className="mb-2 text-center">
              <input
                type="submit"
                name=""
                id=""
                className="btn btn-sm btn-primary"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default RateForm;
