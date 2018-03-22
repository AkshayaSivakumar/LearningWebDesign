var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        this.props.details
      );
    }
  }]);

  return Details;
}(React.Component);

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'button',
        { style: { color: this.props.active ? 'red' : 'blue' }, onClick: function onClick() {
            _this3.props.clickHandler(_this3.props.id, _this3.props.name);
          } },
        this.props.name
      );
    }
  }]);

  return Button;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.state = { activeArray: [0, 0, 0, 0], details: "" };
    _this4.clickHandler = _this4.clickHandler.bind(_this4);
    return _this4;
  }

  _createClass(App, [{
    key: 'clickHandler',
    value: function clickHandler(id, details) {
      var arr = [0, 0, 0, 0];
      arr[id] = 1;
      this.setState({ activeArray: arr, details: details });
      console.log(id, details);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Button, { id: 0, active: this.state.activeArray[0], clickHandler: this.clickHandler, name: 'One' }),
        React.createElement(Button, { id: 1, active: this.state.activeArray[1], clickHandler: this.clickHandler, name: 'Two' }),
        React.createElement(Button, { id: 2, active: this.state.activeArray[2], clickHandler: this.clickHandler, name: 'Three' }),
        React.createElement(Button, { id: 3, active: this.state.activeArray[3], clickHandler: this.clickHandler, name: 'Four' }),
        React.createElement(Details, { details: this.state.details })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));