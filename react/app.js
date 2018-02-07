 import TodoForm from 'todoForm'
 import TodoList from 'todoList'
 
 const App = React.createClass({
      getInitialState: function (){
        return{
          text: '',
          isEdit: 0,
          todos: [
            {
              id: 1,
              text: 'Meeting'
            },
            {
              id: 2,
              text: 'kids too school'
            },
            {
              id: 3,
              text: 'shooping'
            }
          ]
        }
      },

      handleTodoAdd: function(text){
        let newTodo={
          id: this.state.todos.length + 1,
          text: text
        }

        this.setState({
          todos: this.state.todos.concat(newTodo)
          })
      },

      handleDelete:function(todo){
        let newTodos = this.state.todos
        for(let i = 0; i<newTodos.length;i++){
          if(newTodos[i].id == todo.id){
            newTodos.splice(i,1)
          }
        }

        this.setState({
          todos: newTodos
        })
      },

      handleEditTodo: function(todo){
        this.setState({
          text: todo.text,
          isEdit: todo.id
        })
      },

      handleChangeText: function(text){
        this.setState({text:text})
      },

      handleTodoUpdate: function(todo){
        let newTodos = this.state.todos
        for(let i = 0; i<newTodos.length;i++){
          if(newTodos[i].id == todo.id){
            newTodos.splice(i,1)
          }
           }
        newTodos.push(todo)
        this.setState({
          todos: newTodos
        })
      },

      render: function(){
        return(
          <div>
             <TodoForm {...this.state} onTodoAdd={this.handleTodoAdd} changeText={this.handleChangeText} onTodoUpdate={this.handleTodoUpdate}/>
             <TodoList {...this.state} deleteTodo={this.handleDelete} editTodo={this.handleEditTodo}/>
          </div>
        )
      }
    })

    ReactDOM.render(<App/>, document.getElementById('app'))