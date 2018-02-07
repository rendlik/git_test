const TodoForm = React.createClass({
      onChange: function(e){
        console.log(e.target.value)
        this.props.changeText(e.target.value)
      },

      onSubmit: function(e){
        e.preventDefault()
        let text = this.refs.text.value.trim()


        if(!text){
          alert('insert text')
          return
        }

        if(this.props.isEdit){
          let updatedTodo = {
            id: this.props.isEdit,
            text:text
          }
          
          this.props.onTodoUpdate(updatedTodo)
        }else{
          this.props.onTodoAdd(text)
        }

        this.refs.text.value = ""
      },

      render: function(){
        return(
          <div>
             <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> Todo text </label>
                <input value={this.props.text} type="text" ref="text" onChange={this.onChange} className="form-control"/>
              </div>
             </form>
          </div>
        )
      }
    })

export default TodoForm