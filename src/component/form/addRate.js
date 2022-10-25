import { useState } from "react";

const RateForm = (props) => {
  // set state for form properties

  const [earnIn, setEarn] = useState("");
  const [rateIn, setRate] = useState("");

  // method 2
  // const [methodXtra, setMethod] = useState({
  //   earnIn: '', rateIn: ''
  // })
  const earnHandler = (event) => {
    setEarn(event.target.value);
    //  method 3
    // setMethod((previousData) => {
    //   return {...previousData, earnIn: event.target.value}
    // })
  };

  const rateHandler = (event) => {
    setRate(event.target.value);
    // method 3
    // setMethod((previousData) => {
    //   return {...previousData, rateIn: event.target.value}
    // })
  };

  //  submit form
  const rateSubmit = (e) => {
    e.preventDefault();
    const _newrate = {
      gain: earnIn,
      rate: rateIn,
      id: Math.random().toString(),
    };
    props.storeRate(_newrate);
    setEarn("");
    setRate("");
  };
  if (props.formProp) {
    return (
      <div>
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
                value={rateIn}
                onChange={rateHandler}
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
      </div>
    );
  }
};

export default RateForm;
