import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }

  componentDidMount() {
    console.log(this.imageRef.current.height);
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    let imageHeight = this.imageRef.current.height;
    this.setState({ span: Math.ceil(imageHeight / 10) });
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
