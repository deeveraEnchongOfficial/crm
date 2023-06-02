
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@400&display=swap');   
    *{
        color: black;
        font-family: 'Poppins', sans-serif;
        letter-spacing: -1px;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1em;
    }
    hr{
        margin: 1em 0 2em 0;
        background-color:  #FFBF00;
        border: 0; 
        height: 2px;
    }
    .content > * {
        margin: .5rem 0; 
        padding: 0;
    }
</style>
<body>
    <div style="background-color:#ffffff;padding:0;margin:0 auto;font-weight:200;width:100%!important">
    <div align="center" style="margin:0 auto;max-width:768px;">
        <img src="https://assets.outsoar.co/assets/images/brand/logo.png" style="width:18.75rem;">
        <hr>
            <div class="content">
                <h1>New Inquiry:</h1>
                <p>Name: {{ $inquiry['name'] }}</p>  
                <p>Email: {{ $inquiry['email'] }}</p>   
                <p>Subject: {{ $inquiry['subject'] }}</p>   
                <p>Body: {{ $inquiry['description'] }}</p>    
            </div>
        <hr>
    </div>
    </div>
</body>
