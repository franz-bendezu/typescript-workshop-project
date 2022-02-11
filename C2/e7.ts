const friends = ["Alicia", "Bob", "Eve"]

friends.forEach(function(s){
    console.log(s.toUppercase())
})

friends.forEach((s)=>{
    console.log(s.toUppercase())
})