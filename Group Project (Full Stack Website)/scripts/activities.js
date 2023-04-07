console.log("I'm in looping.js")

const app = Vue.createApp({

    // Data Properties
    data() {
        return { 
            activities: [],


            selectedActivities: [],

            currentIdSelected: '',
        }
    },

    created(){
        axios.get("http://localhost:3000/Social/Activities/activities_landing.html").then( response => { 
            this.activities = JSON.parse(response.headers.activities);
            
        }
         );
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        setContent(id){

            var contentTitle = document.getElementById('modalTitle')
            var contentDiv = document.getElementById('modalContent')
            // document.getElementById('activityImg').setAttribute('src', this.activities[index].activity_img )


            

            for(let index = 0; index < this.activities.length; index++){
                if(this.activities[index].activity_id == id){

        
                    var content = this.activities[index].activity_description
                    contentDiv.innerText = content

                    var title = this.activities[index].activity_name
                    contentTitle.innerText = title

                    document.getElementById('activityImg').setAttribute('src', this.activities[index].activity_img )
                }
            }
        },

        sendId(id){
            this.currentIdSelected = id

            console.log(this.currentIdSelected)
        },

        addPax(){
                
            for(let index = 0; index < this.activities.length; index++){
                if(this.activities[index].activity_id == this.currentIdSelected){
                    this.selectedActivities.push(this.activities[index])
                }

            }

        }

    }
    
    
})

app.mount("#root");