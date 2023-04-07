function triggerBtnClick(){
    document.getElementById('getAddress').click()
}

const root = Vue.createApp({

    data() {
        return {

            newEventName: '',

            newLocation: '',

            newDate: '',

            numPax: '',

            newCat: '',

            eventDesc: '',

            error_msg: '',

            show: false,

            img_link: ''

            

        }


    },

    methods: {
        
        setSearchValue(){   

            var value = document.getElementById('addr')

            value.setAttribute('value', this.newLocation)

            console.log(value.value)

        },

        validate_and_add() {
            //Validate the field
            this.show = false

            if (this.newEventName.trim().length == 0 || this.newLocation.trim().length == 0 || this.newDate.length == 0 || this.numPax.length == 0 || this.newCat.length == 0 || this.eventDesc.trim().length == 0) {
                this.show = true
                this.error_msg = "All fields are required!"
                return
            }

            else if (this.numPax <= 1) {
                this.show = true
                this.error_msg = "Number of pax must be greater than 1"
                return
            }

            else {

                // console.log(this.newDate)

                var today = new Date()
                var dd = today.getDate()

                var mm = today.getMonth() + 1
                var yyyy = today.getFullYear()
                var today = yyyy + '-' + mm + '-' + dd

                
                newDate = this.newDate.split('-')
                nYear = newDate[0]
                nMonth = newDate[1]
                nDay = newDate[2]


                tYear = yyyy
                tMonth = mm
                tDay = dd

                if (tYear <= nYear) {
                    if (tMonth <= nMonth) {
                        if (tDay <= nDay) {
                            document.getElementById("success_outer").hidden = false
                            return
                        }
                        else {
                            this.show = true
                            this.error_msg = "Event date must be greater than today's date."
                            return
                        }
                    }
                    else {
                        this.show = true
                        this.error_msg = "Event date must be greater than today's date."
                        return
                    }
                }
                else {
                    this.show = true
                    this.error_msg = "Event date must either be today or a <b>future</b> date from today."
                    return
                }

            }


        }



    }

})

root.mount("#root")

// const image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         const uploaded_image = reader.result;
//         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// });

