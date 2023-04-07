const root = Vue.createApp({})
root.component("translate-template", {
    template :
    `
    <button type="button" id="translate_btn"
    class="btn btn-floating btn-outline-secondary bg-white">
    <i v-show="!show_translate_option" class="fas fa-language fa-xl"></i>
    <i v-show="show_translate_option" class="fas fa-window-close fa-xl"></i>
    </button>

    <div class="card" id="translate_option" v-show="show_translate_option">
        <div class="card-body">
        <h5 class="card-title">Select preferred language</h5>

        <div>
            <button type="button" id="en" onClick="window.location.reload();" class="btn w-100" style="background-color:rgb(255, 255, 234)">
            <i class="flag-singapore flag float-start"></i>
            English
            </button>
        </div>

        <div>
            <button type="button" id="indo" class="btn w-100">
            <i class="flag-indonesia flag float-start"></i>
            Bahasa Indonesia
            </button>
        </div>

        <div>
            <button type="button" class="btn w-100">
            <i class="flag-myanmar flag float-start"></i>
            Burmese
            </button>
        </div>

        <div>
            <button type="button" class="btn w-100">
            <i class="flag-philippines flag float-start"></i>
            Tagalog
            </button>
        </div>

        </div>


    </div>
    `
})