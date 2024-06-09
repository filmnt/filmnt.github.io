function showTime(){
    var date = new Date();
  
    const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var w  = week[date.getDay()];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = monthNames[date.getMonth()];

    var d = date.getDate();
    var y = date.getFullYear();
  
    var time =date.toTimeString().slice(0,8)+ " - " + w + ", " + month + " " + d + ", " + y ;
    document.getElementById("navclock").textContent = time;
  
    setTimeout(showTime, 1000);



    
  }
  
  showTime();
