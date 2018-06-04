const app = new Vue({

    el: '#app',

    data: {
        newTodo: '',
        todos: []
    },

    methods: {
        addTodo() {

            if (!this.newTodo) return alert('New todo cannot be blank!');

            this.todos.unshift({
                message: this.newTodo,
                compelted: false,
                created_on: moment().format('LLLL')
            });

            this.newTodo = '';

        }
    }

});
