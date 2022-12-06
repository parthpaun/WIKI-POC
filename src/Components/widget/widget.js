import "./Widget.scss";

const Widget = ({ title, count }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{count}</span>
      </div>
    </div>
  );
};

export default Widget;
