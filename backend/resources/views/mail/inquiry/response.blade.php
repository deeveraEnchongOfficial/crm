
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@400&display=swap');   
    *{
        color: black;
        font-family: 'Poppins', sans-serif;
        letter-spacing: -1px;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .content{
        display: grid;
        place-items: center;
        margin: 6em;
    }
    .content > * {
        margin-bottom: 1rem;
    }
    hr{
        margin: 1em 0 2em 0;
        background-color:  #FFBF00;
        border: 0; 
        height: 2px;
    }
</style>
<body>
    <div style="background-color:#ffffff;padding:0;margin:0 auto;font-weight:200;width:100%!important">
        <div align="center" style="margin:0 auto;max-width:768px;">
            <img src="https://assets.outsoar.co/assets/images/brand/logo.png" style="width:18.75rem;">
            <hr>
                <div class="content">
                    <h1>Dear {{ $inquiry['name'] }},</h1>
                    <p>Thank you for your interest in <b><u>OUTSOAR SOFTWARE DEVELOPMENT AGENCY</u></b>. We appreciate you taking the time to reach out to us with your questions/inquiry.
                        We would be happy to provide you with more information and help you with any concerns you may have. Please let us know how we can assist you and we will get back to you as soon as possible.
                        If you need immediate assistance, please feel free to call us at 09092897172 or email us at Tyzer@outsoar.ph.</p>
                    <p>Thank you again for considering <b><u>OUTSOAR SOFTWARE DEVELOPMENT AGENCY</u></b>. We look forward to hearing from you soon.        </p>
                    <h2>Best regards, MR. CELVIN KEIGZER DE VERA</h2>
                </div>
        </div>
    </div>
</body>
