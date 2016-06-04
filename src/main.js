var React = require('react');
var ReactDOM = require('react-dom');
var ex = document.getElementById('example');

// hello world
/*var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('example')
);*/

// 计时器
/*var Timer = React.createClass({
	getInitialState : function(){
		return {secondsElapsed: 0}
	},
	tick : function() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1})
	},
	componentDidMount : function() {
		this.interval = setInterval(this.tick, 1000)
	},
	componentWillUnmount : function() {
		clearInterval(this.interval)
	},
	render : function() {
		return (
				<div>Second Elapsed: {this.state.secondsElapsed}</div>
			)
	}
});

ReactDOM.render(
  <Timer />,
  document.getElementById('example')
);*/


// ToList
/**
 * [render description]
 * @param  {[object]}   this.props 
 * @param  {[object]}   this.state 
 * @return {[type]}   [description]
 */
/*var TodoList = React.createClass({
	render : function() {
		var createItem = function(item) {
			return <li key={item.id}>{item.text}</li>;
		}
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
})

var TodoApp = React.createClass({
	getInitialState : function() {
		return {items : [], text : ''};
	},
	onChange : function(e) {
		this.setState({text : e.target.value})
	},
	handleSubmit : function(e) {
		e.preventDefault()
		var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}])
		var nextText = ''
		this.setState({items: nextItems, text: nextText})
	},
	render : function() {
		return (
				<div>
					<h3>TODO</h3>
					<TodoList items={this.state.items}/>
					<form onSubmit={this.handleSubmit}>
						<input onChange={this.onChange} value={this.state.text} />
						<button>{'Add #' + (this.state.items.length + 1)}</button>
					</form>
				</div>
			);
	}
})
ReactDOM.render(<TodoApp />, document.getElementById('example'))*/

// external plugins (marked)
/**
 * [external plugins]
 * @type {[type]}
 * @param {} [varname] [description]
 */
// var marked = require('marked')
// var MarkDownEditor = React.createClass({
// 	getInitialState: function() {
// 		return {value: 'Type some *markdown* here!'};
// 	},
// 	handleChange: function() {
// 		this.setState({value: this.refs.textarea.value})
// 	},
// 	rawMarkup: function() {
// 		return { __html: marked(this.state.value, {sanitize: true}) };
// 	},
// 	render: function() {
// 		return (
// 				<div className="MarkDownEditor">
// 					<h3>Input</h3>
// 					<textarea
// 						onChange={this.handleChange}
// 						ref="textarea"
// 						defaultValue={this.state.value} />
// 					<h3>Output</h3>
// 					<div
// 						className="content"
// 						dangerouslySetInnerHTML={this.rawMarkup()}
// 					/>
// 				</div>
// 			);
// 	}
// })
// ReactDOM.render(<MarkDownEditor />, document.getElementById('example'));

/*var Comment = React.createClass({
	render: function() {
		return (
				<div className="comment">
					<h2 className="commentAuthor">{this.props.author}</h2>
					{this.props.children}
				</div>
			);
	}
})

// ReactDOM.render(<Comment children="adadasdasd" author="ctyloading" />, document.getElementById('example'))

var aa = {
	children : 'as',
	author : 'ctyloading'
}
ReactDOM.render(<Comment {...aa} />, document.getElementById('example'));*/




// FancyCheckbox
/*function FancyCheckboc(props) {
	var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
	return (
			<div {...props} {...z} className={fancyClass} />
		);
}
ReactDOM.render(
	<FancyCheckboc checked>
		Helloworld!
	</FancyCheckboc>,
	ex
);*/

// input


