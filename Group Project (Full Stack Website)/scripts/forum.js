console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            threads: [],
        }
    },

    created(){
        axios.get("http://localhost:3000/Social/Forum/forum.html").then( response => { 
            this.threads = JSON.parse(response.headers.threads);
        }
         ); 
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        
        fillModal(id){

            for(let index=0; index < this.threads.length; index++){
                if(this.threads[index].thread_id == id){
                    document.getElementById('modalTitle').innerText = this.threads[index].thread_title
                    document.getElementById('threadContent').innerText = this.threads[index].thread_content
                    document.getElementById('threadInfo').innerText = 'Thread Author: ' + this.threads[index].author_name
                    var comments = this.threads[index].comment_array;
                    console.log(comments);
                    for(let index=0; index < comments.length; index++){
                        var comment_array = comments[index].split('@');
                        console.log(comment_array);

                        // document.getElementById('commenter').innerText = name;

                    }



                }
            }
        }

    }
    // Other stuff
})

root.mount("#root")
