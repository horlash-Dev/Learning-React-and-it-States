import CardItem from "./Items";

const GetItems = (props) => {
  // final call to update the remove id via parent
  const getRKey = (id) => {
    props.removeId(id);
  };
  return (
    <div className="row align-items-center mb-5">
      {props.items.length > 0 &&
        props.items.map((item, index) => (
          <CardItem
            earn={item.gain}
            rate={item.rate}
            key={item.id}
            keyId={index}
            removeKey={getRKey}
          />
        ))}
    </div>
  );
};

export default GetItems;
