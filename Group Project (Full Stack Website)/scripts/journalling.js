const root = Vue.createApp({

  // Data Properties
  data() {
      return { 

          // ALL facilities arrray of objects
          entries : [],

          filteredEntries : [],

          selectedCat : '',

          selectedMonth : '',
       
          
      }
  },

  created(){
      axios.get("http://localhost:3000/HealthIsWealth/Mental_Health/journalling.html")
      .then( response => { 

          // fetch data
          this.entries = JSON.parse(response.headers.journal);
          
      }
      );
  }, 

  // Methods
  methods: {

      populateFilteredEntries(){

        this.filteredEntries = [];

        // if only category selected
        if(this.selectedCat != '' && this.selectedMonth == ''){
          for (let index = 0; index < this.entries.length; index++) {
            if(this.entries[index].category == this.selectedCat){
                this.filteredEntries.push(this.entries[index])
            }
          }
        }

        // if only month selected
        else if(this.selectedCat == '' && this.selectedMonth != ''){
          for (let index = 0; index < this.entries.length; index++) {

            var month = this.entries[index].date.split(' ')[1]
        
            if(month == this.selectedMonth){
                this.filteredEntries.push(this.entries[index])
            }
          }
        }

        // if both selected 
        else if(this.selectedCat != '' && this.selectedMonth != ''){
          for (let index = 0; index < this.entries.length; index++) {

            var month = this.entries[index].date.split(' ')[1]

            if(this.entries[index].category == this.selectedCat && month == this.selectedMonth){
                this.filteredEntries.push(this.entries[index])
            }
          }
        }

        // if none selected
        else if(this.selectedCat == '' && this.selectedMonth == ''){
          for (let index = 0; index < this.entries.length; index++) {
           
            this.filteredEntries.push(this.entries[index])
            
          }
        }
      },

      showAll(){
        // clear the filter fields first
        this.selectedCat = ''
        this.selectedMonth = ''
        this.filteredEntries = []

        for (let index = 0; index < this.entries.length; index++) {
           
          this.filteredEntries.push(this.entries[index])
          
        }

      }

  }
})

root.mount("#root")




function getDate() {



    months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April", 
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }

    console.log("test");
    var date = new Date();

    out_date = date.getDate();
    out_month = date.getMonth();
    out_year = date.getFullYear();
    
    extracted_date = `${out_date} ${months[out_month + 1]} ${out_year}`;

    document.getElementById("curr_date").innerHTML = extracted_date
}


