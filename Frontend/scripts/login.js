
     const onPress=()=>{
        const user={
           
            email:document.getElementById("email").value,
            password:document.getElementById("pass").value
            
        }

        fetch("http://localhost:4000/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(res=>{
            alert(res.msg)
            localStorage.setItem("token",res.token)
        })
        .catch(err=>alert(err))

        
     }
