<body>
    <div>
        <div class="photo"> 
            <img src="public\assets\img\photo.jpg" /> 
        </div>
        <div class="CTA">
            <h2>
                William Pinel
            </h2>
            <p>
                Explorez mes créations
            </p>
            </div>
            <div class="span-container">
                <a href="" class="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon></a>
            </div>
            <p>
                AAAAAAAAAAAAAAAAAAa
            </p>
        </div>
</body>

<style>
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color:#eaeaea;
    }
    .photo { 
        display: inline-block;
        position: relative; 
        width: 200px; 
        height: 200px; 
        overflow: hidden; 
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,0%);
    }

    .photo img { 
        width: auto; 
        height: 300%; 
        margin-left: -125px;
        margin-top: -120px; 
    }
    
    .CTA h2{
        text-align: center;
    }

    .CTA p{
        text-align: center;
        font-size: 60px;
    }
    .scroll-down-arrow {
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg);
    background-size: contain;
    background-repeat: no-repeat;
    color: #000000;
    }

    .scroll-down-link {
    position: absolute;
    z-index: 100;
    cursor:pointer;
    height: 60px;
    width: 80px;
    margin: 0px 0 0 -40px;
    line-height: 60px;
    left: 50%;
    bottom: 10px;
    color: #000000;
    text-align: center;
    font-size: 70px;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    -webkit-animation: fade_move_down 2s ease-in-out infinite;
    -moz-animation:    fade_move_down 2s ease-in-out infinite;
    animation:         fade_move_down 2s ease-in-out infinite;
    }

    @-webkit-keyframes fade_move_down {
        0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -webkit-transform:translate(0,20px); opacity: 0; }
    }
    @-moz-keyframes fade_move_down {
        0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -moz-transform:translate(0,20px); opacity: 0; }
    }
    @keyframes fade_move_down {
        0%   { transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { transform:translate(0,20px); opacity: 0; }
    }
    

</style>
