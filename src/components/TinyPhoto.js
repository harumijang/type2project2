//                                        | here you can grab the variable

export const FunctionalComponent = ({ photo }) => {
  const [isVisible, setVisible] = React.useState(false);
  function handleClick() {
    setVisible((v) => !v);
  }

  return;
  <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
    <img id="article-photo" src={this.props.photo}></img>;
  </div>;
};
