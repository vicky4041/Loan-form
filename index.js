<script type="text/javascript">
    function validation()
    {
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var pan=document.getElementById('pan').value;
        var amount=document.getElementById('amount').value;
           
            if(name == "")
            {
                document.getElementById('name1').innerHTML="Please enter full name.";
                return false;
            }
                if(name.length<4)
                {
                    document.getElementById('name1').innerHTML="enter min 4 character.";
                return false;
                }
            

            if(email == "")
            {
                document.getElementById('email1').innerHTML="Please enter email.";
            }

            if(pan == "")
            {
                document.getElementById('pan1').innerHTML="Please enter pan number.";
            }

            if(amount == "")
            {
                document.getElementById('amount1').innerHTML="Please enter loan amount.";
            }
    }

 </script>