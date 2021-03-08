const storageID = 'todoStorage'
let app = new Vue({
    el: "#vueApp",
    data: {
        welcomeMessage: 'TODO list:',
        list: [ {id:0, item:"Example", completed: "Incomplete"} ],
        newItem: '',
        nextIndex: 0
    },
    created () {
        this.list = JSON.parse(localStorage.getItem(storageID) || '[]');
    },
    methods: {
        addItem: function(){
            //if not empty item: add to list with unique id, items name and completed status (initially false)
            if(this.newItem !== '') {
                this.list.push({id: ++this.nextIndex, item: this.newItem, completed: 'Incomplete'});
                this.newItem = '';
                localStorage.setItem(storageID, JSON.stringify(this.list));
            }
        },
        removeItem: function(item){
            this.list.splice(this.list.indexOf(item), 1);
            localStorage.setItem(storageID, JSON.stringify(this.list));
        },
        editItem: function(i) {
           this.removeItem(i);
           if(i.completed === 'Incomplete') {
                this.list.push({id:++this.nextIndex, item: i.item, completed: 'Complete'});
           } else {
                this.list.unshift({id:++this.nextIndex, item: i.item, completed: 'Incomplete'});
           }
           localStorage.setItem(storageID, JSON.stringify(this.list));
        }
    },
    mounted() {

    },
});
