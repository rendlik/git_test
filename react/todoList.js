 const TodoList = React.createClass({
      onDelete:function(todo){
        this.props.deleteTodo(todo)
      },

      onEditTodo:function(todo){
        this.props.editTodo(todo)
        
      },

      render: function(){
        return(
          <ul className='list-group'>
             { this.props.todos.map(todo => {
               return <li className="list-group-item" todo={todo} key={todo.id}> <span onClick={this.onEditTodo.bind(this,todo)}> {todo.text} </span> <a onClick={this.onDelete.bind(this,todo)} href="#">x</a> </li>
             })}
          </ul>
        )
      }
    })

export default TodoList