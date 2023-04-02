
    const onPress=()=>{
       
        const user={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            gender:document.getElementById("gender").value,
            password:document.getElementById("pass").value,
            age:document.getElementById("age").value,
            
        }
         
        
        fetch("http://localhost:4000/user/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(res=>{
            alert(res.msg)
            
        })
        .catch(err=>alert(err))
        


        
     }


