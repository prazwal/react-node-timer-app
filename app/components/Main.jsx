var React  =  require('react');

var Nav = require('Nav');



var Main = React.createClass({

  render:function(){
    return(
      <div>
        <div>
          <div>
            <Nav/>
          {this.props.children}
          </div>
        </div>
      </div>
    )

  }

});

// var Main = (props) => {
//   return(
//     <div>
//       <Nav/>
//       <h2> Main Component</h2>
//       {props.children}
//     </div>
//   )
// }

module.exports = Main;