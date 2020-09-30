import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';


class ImageBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }
  addImage(name) {

    console.log('name', name);
    let images = [...this.state.images];
    images.push(name);
    this.setState({
      images
    });
  }
  componentDidMount() {
    let defaultImages = [{
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqOUT55qkYhpeIZPaabgyjlEpyUKfNQuVgFzyPV2xj5i79gOS",
      caption: "the moon"
    }, {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUGpDE-ujbfXaIiM4oavlihBYe04Uf-k45DTdbaPyRx_l5q6j",
      caption: "Amazing View"
    }, {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYohDrgw03vn64rjifIUeGH0fgu8cRtNB4Sr0BOVpTkQ_3ZDou",
      caption: "Mountian Tops"
    }];
    this.setState({
      images: defaultImages
    });
  }

  render() {
      let images = this.state.images.map((image, index) => {
            return <ImageItem key = {
              index
            }
            image = {
              image
            }
            />});
            return ( <
              div >
              <
              AddImage addImage = {
                this.addImage
              }
              /> <
              div > {
                images
              } < /div> <
              /div>);
            }
          }



          class AddImage extends Component {

            constructor(props) {
              super(props);
              this.state = {
                url: "hello"
              };

              this.handleInput = this.handleInput.bind(this);
            }
            handleInput(event) {
              this.setState({
                [event.target.name]: event.target.value
              });

            }
            addImage(event) {
              // prevents auto reload on submit button
              event.preventDefault();
              // captures the state locally to its state
              let image = {
                url: this.state.url,
                // caption: this.state.caption
              };
              // cals the addImage function from ImageBoard return where it is given key
              this.props.addImage(image);
              //  clears input sections once ran
              // this.setState({url:"",caption:""});
            }
            render() {

              return ( < div > < form >
                <
                input type = "text"
                name = "url"
                value = {
                  this.state.url
                }
                onChange = {
                  this.handleInput
                }
                /><button type="submit" className="btn btn-primary">Submit</button > < /form></div > )

            }

          }
          class ImageItem extends Component {

            constructor(props) {
              super(props);
              this.state = {
                images: this.props.images,
                caption: ""
              }
            }
            render() {
              return ( < div >
                <
                img src = {
                  this.props.image.url
                }
                /> <
                div > {
                  this.props.image.caption
                } < /div> <
                /div>
              );
            }
          }


          export default ImageBoard;
