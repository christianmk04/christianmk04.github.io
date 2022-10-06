function disp_curr_tab(button) {
    var id = button.id;
    var id_num = Number(id.slice(id.length-1))
    // console.log(id, id_num);

    var button_arr = [1,2,3,4];
    var arr_index = button_arr.indexOf(id_num);
    button_arr.splice(arr_index,1)

    for(index of button_arr){
        console.log(index);
        var nav_id = `nav-${index}`;
        // var tab_id = `tab-${index}`;
        var curr_nav = document.getElementById(nav_id);
        curr_nav.setAttribute("class", "nav-link");
    //     var curr_tab = document.getElementById(tab_id);
    //     curr_tab.setAttribute("class", "row d-none");
    //     console.log(curr_tab);
    }

    // // console.log(button);


    button.setAttribute("class", "nav-link active disabled");
    // // // console.log(button.getAttribute);
    // // var selected_tab = document.getElementById(`tab-${id_num}`)
    // // console.log(selected_tab);
    // // console.log(selected_tab.getAttribute("class"));
    // // selected_tab.removeAttribute("class")
    // // console.log(selected_tab);
    // // selected_tab.setAttribute("class", "row");

    var body_tag = document.getElementById("body-tab");
    if (id_num == 1) {
        tab1(body_tag);
    }
    else if(id_num == 2){
        tab2(body_tag);
    }
    else if(id_num == 3){
        tab3(body_tag);
    }
    else if(id_num == 4){
        tab4(body_tag);
    }

    
      
}

function tab1(body) {
    body.innerHTML = 
    `
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1">Who am I? <span class="text-muted">You must be curious.</span></h2>
      <p class="lead">I was born into a loving family consisting of my Dad, my Mom and my Sister on the 21st of March, 2000. Growing up, I loved playing with around with toys and being active around the house or in the park. I think that's where I got my love for exercise and sports...</p>
    </div>

    <div class="col-md-5">
      <img src="baby.jpg" class="img-fluid d-block w-auto" alt="" style="width: 400px; height: 400px; border-radius: 10px;">
    </div>
    `;
}

function tab2(body) {
    body.innerHTML = 
    `<h2 class="text-center display-5">Some of the favourites!</h2>

    <div class="row">

      <!-- Card 1 -->
      <div class="col-lg-3 col-md-6">
        <div class="card h-100">
          <img src="https://i.kfs.io/album/global/78996835,3v1/fit/500x500.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Jake Miller</h5>
            <p class="card-text">An irresistible musical blend of pop and hip-hop, combined with the positive messages in his songs.</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="li1"><a href="https://www.youtube.com/watch?v=h_J8vQikZUc">Love Again</a></li> <!--Fav Song 1-->
              <li class="list-group-item" id="li1"><a href="https://www.youtube.com/watch?v=q4i38aFIFyM">15 Minutes</a></li> <!--Fav Song 2-->
              <li class="list-group-item" id="li1"><a href="https://www.youtube.com/watch?v=Eh2ZYcjgMAI">Wait For You</a></li> <!--Fav Song 3 -->
            </ul>
            <div class="card-body text-center">
              <a href="https://www.instagram.com/jakemiller/?hl=en" class="card-link">
                <button type="button" class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </button>
              </a>
              <a href="https://www.youtube.com/c/jakemiller" class="card-link">
                <button type="button" class="btn btn-outline-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
                </button>
              </a>

              <a href="https://open.spotify.com/artist/3gggmBN0erstm3YJvEGe3t" class="card-link">
                <button type="button" class="btn btn-outline-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-lg-3 col-md-6">
        <div class="card h-100">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be6d97fd-45ad-4a59-a683-8a4ca8d11c10/dd9u4dv-f4a45b4a-a983-4905-9da6-f4b6b4ce9fda.png/v1/fill/w_1280,h_1280,q_80,strp/abiior_by_the_1975__fanmade_album_cover__by_designsbyduh_dd9u4dv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2JlNmQ5N2ZkLTQ1YWQtNGE1OS1hNjgzLThhNGNhOGQxMWMxMFwvZGQ5dTRkdi1mNGE0NWI0YS1hOTgzLTQ5MDUtOWRhNi1mNGI2YjRjZTlmZGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OUvmtAY3y5JEWFPzLfc_AkY8e5VGTxlspmsz52u3qK0" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">The 1975</h5>
            <p class="card-text">Garnered acclaim for their relevant lyricism and exploration of an eclectic range of genres</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="li2"><a href="https://www.youtube.com/watch?v=FzfKn-hlZwo">It's Not Living</a></li> <!--Fav Song 1-->
              <li class="list-group-item" id="li2"><a href="https://www.youtube.com/watch?v=jSJUb9C58yM">Chocolate</a></li> <!--Fav Song 2-->
              <li class="list-group-item" id="li2"><a href="https://www.youtube.com/watch?v=FOfV8TvwaZ8">Paris</a></li> <!--Fav Song 3 -->
            </ul>
            <div class="card-body text-center">
              <a href="https://www.instagram.com/the1975/?hl=en" class="card-link">
                <button type="button" class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </button>
              </a>
              <a href="https://www.youtube.com/user/The1975VEVO" class="card-link">
                <button type="button" class="btn btn-outline-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
                </button>
              </a>

              <a href="https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW" class="card-link">
                <button type="button" class="btn btn-outline-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-lg-3 col-md-6">
        <div class="card h-100">
          <img src="https://i.pinimg.com/736x/e8/ac/0f/e8ac0f8aa6f0c9cd6f3e08cb24a45bcd.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">The Band Camino</h5>
            <p class="card-text">Lyrical & Melodic, they confront and talk about real problems and heartbreak but in an upbeat way</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="li3"><a href="https://www.youtube.com/watch?v=mRcK-MgpEc8">2/14</a></li> <!--Fav Song 1-->
              <li class="list-group-item" id="li3"><a href="https://www.youtube.com/watch?v=cBcYxlDijaI">I Think I Like You</a></li> <!--Fav Song 2-->
              <li class="list-group-item" id="li3"><a href="https://www.youtube.com/watch?v=H1HhhQ0tk8g">See Through</a></li> <!--Fav Song 3 -->
            </ul>
            <div class="card-body text-center">
              <a href="https://www.instagram.com/thebandcamino/?hl=en" class="card-link">
                <button type="button" class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UC2dZ0a6uJJHWMoF7oah6zew" class="card-link">
                <button type="button" class="btn btn-outline-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
                </button>
              </a>

              <a href="https://open.spotify.com/artist/6d4jrmreCmsenscuieJERc" class="card-link">
                <button type="button" class="btn btn-outline-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->

      <div class="col-lg-3 col-md-6">
        <div class="card h-100">
          <img src="https://www.umusic.ca/wp-content/uploads/2022/03/KESHI-GABRIEL-COVER-27-3000px.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Keshi</h5>
            <p class="card-text">Known for his distant falsetto vocals and textural instrumentals, he has accumulated over one billion streams</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="li4"><a href="https://www.youtube.com/watch?v=8ulR00x-B1I">Right Here</a></li> <!--Fav Song 1-->
              <li class="list-group-item" id="li4"><a href="https://www.youtube.com/watch?v=o3zVtbw0VDM">Blue</a></li> <!--Fav Song 2-->
              <li class="list-group-item" id="li4"><a href="https://www.youtube.com/watch?v=5OLgj5s21Ps">Get it</a></li> <!--Fav Song 3 -->
            </ul>
            <div class="card-body text-center">
              <a href="https://www.instagram.com/keshi/?hl=en" class="card-link">
                <button type="button" class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UCuCRWL0H5WnXmPBJ3JdbVLA" class="card-link">
                <button type="button" class="btn btn-outline-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
                </button>
              </a>

              <a href="https://open.spotify.com/artist/3pc0bOVB5whxmD50W79wwO" class="card-link">
                <button type="button" class="btn btn-outline-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      `
}

function tab3(body) {
    body.innerHTML = 
    `
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Football
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-8">
                <p>I am a huge fan of playing the beautiful game known as Football! I've been playing since I was 6 and the ball has never left my feet ever since. A shame I decided to do computing instead of going pro ...</p>
              </div>
              <div class="col-4" >
                <img src="Images/accor1.jpg" alt="" class="accor-img">
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Cycling
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-8 order-2">
                <p>Funnily enough, I only learnt to ride a bike at 16! But that decision has allowed me to explore so many different places and to enjoy so many more fruitful experiences with my friends. This was a picture of when I went overnight cycling from East Coast Park to Keppel Bay before school started!</p>
              </div>
              <div class="col-4 order-1">
                <img src="Images/accor3.jpg" alt="" class="accor-img">
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Exploration & Photography
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-8">
                <p>Singapore is small, but some of its sights are just so wonderful to see. I recently only took an interest in photography, but it has made me appreciate the beauty in the things around me. Try to guess where this is!</p>
              </div>
              <div class="col-4">
                <img src="Images/accor2.jpg" alt="" class="accor-img">
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            My Friends!
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-8 order-2">
                <p>My friends are what keeps me going! I love to spend time with them, this semester is kinda making it hard to spend time with them though <span>&#129300;</span></p>
              </div>
              <div class="col-4 order-1">
                <img src="Images/accor4.jpg" alt="" class="accor-img">
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    `
}

function tab4(body) {
    body.innerHTML = 
    `
    <h3 class="text-center">These are some pictures taken from my recent trip to Jakarta!</h3>
    <div id="carouselTravels" class="carousel slide carousel-fade w-50 mx-auto" data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselTravels" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="Images/travel6.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>The sunrise at Burobudur</h5>
            <p>5am sunrise over the clouds</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Images/travel5.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Burobudur Temples</h5>
            <p>A UNESCO world heritage site</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Images/travel4.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Burobudur Temples</h5>
            <p>The largest Buddhist temple in the world!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Images/travel3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Javan Street Art</h5>
            <p>Java is known for their creative street art</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Images/travel2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Jogja Beaches</h5>
            <p>Look at the clean water and beach!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Images/travel1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>A dear at Taman Safari Park</h5>
            <p>A safari reserve that has many many animals</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `
}

var quote = document.getElementById("quotes-button");
quote.addEventListener("click", display_quote);

function display_quote() {
    var api_endpoint_url = "https://type.fit/api/quotes";

    axios.get(api_endpoint_url)
    .then(response =>{
        var all_quotes = response.data;
        var random_int = Math.floor(Math.random() * all_quotes.length) + 1
        // console.log(random_int);
        var quote_obj = all_quotes[random_int];
        var author = quote_obj.author;
        var text = quote_obj.text;

        alert(`\"${text}\" - ${author}`);
    })  
    .catch(error => {
        alert("Error in generating quote!")
    })
}