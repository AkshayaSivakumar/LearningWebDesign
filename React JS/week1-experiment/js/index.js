var selectedOptions = ['All', 'Cars', 'Trucks', 'Convertibles'];
var tableHeader = ['Year', 'Model', 'Buy', 'Price'];
var tableData = [{
  title: 'Cars',
  value: [{ year: "2013", model: "A", price: 32000 }, { year: "2011", model: "B", price: 4400 }, { year: "2016", model: "B", price: 15500 }]
}, {
  title: 'Trucks',
  value: [{ year: "2014", model: "D", price: 18000 }, { year: "2013", model: "E", price: 5200 }]
}, {
  title: 'Convertibles',
  value: [{ year: "2009", model: "F", price: 2000 }, { year: "2010", model: "G", price: 6000 }, { year: "2012", model: "H", price: 12500 }, { year: "2017", model: "M", price: 50000 }]
}];

ReactDOM.render(React.createElement(TransportationMaster, null), document.getElementById("root"));

function TransportationMaster(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(TransportationTitle, { title: 'Welcome to React Transportation' }),
    React.createElement(
      'p',
      null,
      'The best place to buy vehicles online'
    ),
    React.createElement(TransportationTitle, { title: 'Choose Options' }),
    React.createElement(CheckBoxComponent, { id: 'coding', label: 'New Only ', name: 'interest', value: 'coding', checked: 'true' }),
    React.createElement('p', null),
    React.createElement(SelectionOption, { id: 'selecttype', title: 'Select Type ', selectionItems: selectedOptions }),
    React.createElement(TableMaster, { transportData: tableData })
  );
}

function TableMaster(props) {
  var data = [];
  data.push(props.transportData.map(function (object) {
    return React.createElement(
      'div',
      null,
      React.createElement(TransportationTitle, { title: object.title }),
      object.value.map(function (objectValue) {
        return React.createElement(Table, { tableItem: objectValue });
      })
    );
  }));

  return React.createElement(
    'div',
    null,
    data
  );
}

function Table(props) {
  return React.createElement(
    'ul',
    null,
    React.createElement(TableItem, { item: props.tableItem })
  );
}

function TableItem(props) {
  return React.createElement(
    'table',
    null,
    React.createElement(TableHeader, null),
    React.createElement(TableBody, { value: props.item })
  );
}

function TableBody(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.value.year
    ),
    React.createElement(
      'td',
      null,
      props.value.model
    ),
    React.createElement(
      'td',
      null,
      '$',
      props.value.price
    ),
    React.createElement(
      'td',
      null,
      React.createElement(
        'button',
        null,
        'Buy Now'
      )
    )
  );
}

function TableHeader() {
  var header = [];
  for (var i = 0; i < tableHeader.length; i++) {
    header.push(React.createElement(
      'th',
      null,
      tableHeader[i]
    ));
  }
  return React.createElement(
    'tr',
    null,
    header
  );
}

function TransportationTitle(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      props.title
    )
  );
}

function CheckBoxComponent(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'label',
      { 'for': props.id },
      props.label
    ),
    React.createElement('input', { type: 'checkbox', id: props.id, name: props.name, value: props.value, defaultChecked: props.checked })
  );
}

function SelectionOption(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'label',
      { 'for': props.id },
      ' ',
      props.title
    ),
    React.createElement(
      'select',
      { id: 'option' },
      props.selectionItems.map(function (choice) {
        return React.createElement(
          'option',
          { value: choice },
          choice
        );
      })
    )
  );
}