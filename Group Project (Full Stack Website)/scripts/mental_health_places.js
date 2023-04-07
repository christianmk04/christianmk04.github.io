
const root = Vue.createApp({

    // Data Properties
    data() {
        return {

            // ALL facilities arrray of objects
            facilities: [],

            subCategories: [],

            selectedArray: [],

            selectedLocation: '',

            show_popup: false,

            selected_options: [],

            select_option:"",

            recommend:''

        }
    },

    created() {
        axios.get("http://localhost:3000/HealthIsWealth/Physical_Health/physical_health_places.html")
            .then(response => {

                // fetch data
                this.facilities = JSON.parse(response.headers.facilities);
                var facilities = this.facilities

                // create subCategories array
                for (let index = 0; index < facilities.length; index++) {
                    this.subCategories.push(facilities[index].sub_category)
                    // console.log(facilities[index])
                }

            }
            );
    },

    // Methods
    methods: {


        fetchSelectedArray(category) {

            this.selectedArray = []
            // create array of filtered category
            var facilitiesArray = this.facilities

            for (let index = 0; index < facilitiesArray.length; index++) {

                if (facilitiesArray[index].sub_category == category) {
                    this.selectedArray.push(facilitiesArray[index])
                }
            }


            var tableBodyDiv = document.getElementById('tableBody')
            var tableStr = '';



            for (let index = 0; index < this.selectedArray.length; index++) {

                var name = this.selectedArray[index].facility_name
                var location = this.selectedArray[index].address
                var postal = this.selectedArray[index].postal
                var contact = this.selectedArray[index].phone

                tableStr += `<tr>
                    <td>${name}</td>
                    <td>${location}</td>
                    <td>${postal}</td>
                    <td>${contact}</td>
                    <td>
                        <button id="${name}" onclick='findLocation(this.id)' class='btn-sm text-light' style='background-color:#9a616d;'>Show on Map</button>
                    </td>
                </tr>`


            }

            tableBodyDiv.innerHTML = tableStr;
        },

        check_quiz() {
            if (this.show_popup == true) {
                this.show_popup = false
            }
            else {
                this.show_popup = true

            }
        },

        start_quiz() {
            // Second page - choose current emotion
            this.select_option = ''
            this.recommend = ''
            document.getElementById("firstPage").hidden = true
            document.getElementById("second_page").hidden = false

        },

        generate_result(){
            document.getElementById("second_page").hidden = true
            
            if (this.select_option == "socialW"){
                this.recommend = "Social Worker"
            }
            else if(this.select_option == "counsel"){
                this.recommend = "Counsellor"
            }
            else{
                this.recommend = "Psychiatrist"
            }

           

            document.getElementById("third_page").hidden = false


        },

        restart(){
            document.getElementById("firstPage").hidden = false
            document.getElementById("second_page").hidden = true
            document.getElementById("third_page").hidden = true
        }




    }
})


root.mount("#root")



function fillTitle(id) {

    var modalTitle = document.getElementById('modalHeader')
    var text = id.toUpperCase()
    modalTitle.innerText = text;

}


