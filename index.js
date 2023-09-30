const Box = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const element = (
  //  Write your code here.
  <div className="box-container">
    <h1 className="heading">BOXES</h1>
    <div className="box-card">
      <Box className="box1" children="Small" />
      <Box className="box2" children="Medium" />
      <Box className="box3" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
