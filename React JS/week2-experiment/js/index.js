var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Question(props) {
  return React.createElement(
    "h2",
    null,
    props.dataSet.question
  );
}

function Choices(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.clickHandler(props.selectedChoice);
        } },
      props.choiceOptions
    )
  );
}

function ChoicesList(props) {
  var choicesList = [];
  for (var i = 0; i < props.dataSet.choices.length; i++) {
    choicesList.push(React.createElement(Choices, { selectedChoice: i, clickHandler: props.clickHandler, choiceOptions: props.dataSet.choices[i] }));
  }

  return React.createElement(
    "div",
    null,
    choicesList
  );
}

function QuizContainer(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Question, { dataSet: props.dataSet }),
    React.createElement(ChoicesList, { dataSet: props.dataSet, clickHandler: props.clickHandler })
  );
}

function CorrectSection(props) {
  return React.createElement(
    "h3",
    null,
    "Correct: ",
    props.correct
  );
}

function WrongSection(props) {
  return React.createElement(
    "h3",
    null,
    "Incorrect: ",
    props.wrong
  );
}

function ResultContainer(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(CorrectSection, { correct: props.correct }),
    React.createElement(WrongSection, { wrong: props.wrong })
  );
}

var QuizApp = function (_React$Component) {
  _inherits(QuizApp, _React$Component);

  function QuizApp(props) {
    _classCallCheck(this, QuizApp);

    var _this = _possibleConstructorReturn(this, (QuizApp.__proto__ || Object.getPrototypeOf(QuizApp)).call(this, props));

    var dataSet = [{
      question: "What is 8 x 1?",
      choices: ["1", "8", "12", "16"],
      correct: 1
    }, {
      question: "What is 3 x 4?",
      choices: ["1", "8", "12", "16"],
      correct: 2
    }, {
      question: "What is 5 x 5?",
      choices: ["25", "5", "125", "75"],
      correct: 0
    }, {
      question: "What is 6 x 7?",
      choices: ["123", "87", "42", "22"],
      correct: 2
    }, {
      question: "What is 8 - 1?",
      choices: ["7", "8", "14", "2"],
      correct: 0
    }, {
      question: "What is 18 / 6?",
      choices: ["12", "18", "6", "3"],
      correct: 3
    }, {
      question: "What is 63 + 37?",
      choices: ["101", "123", "42", "100"],
      correct: 3
    }, {
      question: "What is 81 + 21?",
      choices: ["102", "108", "212", "106"],
      correct: 0
    }, {
      question: "What is 53 - 50?",
      choices: ["10", "18", "3", "23"],
      correct: 2
    }, {
      question: "What is 72 / 8?",
      choices: ["8", "7", "6", "9"],
      correct: 3
    }];

    _this.state = { current: 0, dataSet: dataSet, correct: 0, wrong: 0 };
    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(QuizApp, [{
    key: "clickHandler",
    value: function clickHandler(selectedChoice) {
      console.log(this.state.current);

      if (selectedChoice == this.state.dataSet[this.state.current].correct) {
        this.setState({ correct: this.state.correct + 1 });
      } else {
        this.setState({ wrong: this.state.wrong + 1 });
      }

      if (this.state.current == 9) {
        this.setState({ current: 0 });
        this.setState({ correct: 0 });
        this.setState({ wrong: 0 });
      } else {
        this.setState({ current: this.state.current + 1 });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " Welcome to quiz app!!"
        ),
        React.createElement(QuizContainer, { clickHandler: this.clickHandler, dataSet: this.state.dataSet[this.state.current] }),
        React.createElement(ResultContainer, { correct: this.state.correct, wrong: this.state.wrong })
      );
    }
  }]);

  return QuizApp;
}(React.Component);

ReactDOM.render(React.createElement(QuizApp, null), document.getElementById('root'));