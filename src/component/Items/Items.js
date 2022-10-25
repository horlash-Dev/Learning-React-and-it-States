import { useState } from "react";
import styles from "./items.module.css"
const CardItem = (props) => {
  const [_badge, setBadge] = useState(false);
  // to call & update the remove function id
  const removeIndex = () => {
    let removeId = props.keyId;
    props.removeKey(removeId);
  };
  //  badge toggle function
  const hideBadge = () => {
    setBadge((snapBadge) => !snapBadge);
  };

  return (
    <div className="col-lg-3 mb-2">
      <div
        className="main p-2 bg-light rounded-3 shadow"
        onMouseEnter={hideBadge}
        onMouseLeave={hideBadge}
      >
        <div className="row">
          <div className="col">
            <h3 className="text-uppercase fs-6">earnings</h3>
            <p className="lead fs-6">
              $<span className={styles.boxStyle}>{props.earn}k</span>
            </p>
          </div>
          <div className="col">
            <h5 className="display-6 fs-5">ratings</h5>
            <span className={`lead fs-6 ${styles.boxStyle} ${styles.alert}`}>{props.rate}</span>
            <br />
            {_badge && (
              <button
                className="btn btn-danger btn-sm p-0 px-1"
                onClick={removeIndex}
              >
                close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
