function myFunction() {
    let kno = document.getElementById("kno").value;
    
    let mobilenum = document.getElementById("mobilenum").value;
    
    //var kno = '310163008862';
    
    var inurl = 'https://cescrajasthan.co.in/kotawebservice/index.jsp?service=service_kno_profiledet/';
    
    var url = inurl.concat(kno);
    
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
    
        if(data.KNOPROFILEDET.name == undefined) {
          alert("Incorrect K Number");
        location.reload();
    }
    
    // if(data.KNOPROFILEDET.mobno != mobilenum)
    // {
    // 	alert("Incorrect Mobile Number");
    // 	location.reload();
    // }
    
    
      console.log(data);
      document.getElementById('container5').style.display = 'none'; 
      document.getElementById('container').style.display = 'block'; 
      document.getElementById('container2').style.display = 'block'; 
      document.getElementById('container3').style.display = 'block'; 
      document.getElementById('container4').style.display = 'block'; 
      document.getElementById('container6').style.display = 'block'; 
      document.getElementById('container7').style.display = 'block'; 
      document.getElementById("file").innerHTML=data.KNOPROFILEDET.name;
      document.getElementById("emailid").innerHTML=data.KNOPROFILEDET.email;
      document.getElementById("oadd").innerHTML=data.KNOPROFILEDET.officeaddress;
      document.getElementById("add").innerHTML=data.KNOPROFILEDET.address;
      document.getElementById("mobile").innerHTML=data.KNOPROFILEDET.mobno;
      document.getElementById("mno").innerHTML=data.KNOPROFILEDET.mno;
      document.getElementById("account").innerHTML=data.KNOPROFILEDET.account;
      document.getElementById("servicestatus").innerHTML=data.KNOPROFILEDET.servicestatus;
      document.getElementById("billmmyy").innerHTML=data.KNOPROFILEDET.billmmyy;
      document.getElementById("billno").innerHTML=data.KNOPROFILEDET.billno;
      document.getElementById("binder").innerHTML=data.KNOPROFILEDET.binder;
      document.getElementById("cat").innerHTML=data.KNOPROFILEDET.cat;
      document.getElementById("mdigit").innerHTML=data.KNOPROFILEDET.mdigit;
      document.getElementById("mphase").innerHTML=data.KNOPROFILEDET.mphase;
      document.getElementById("mtype").innerHTML=data.KNOPROFILEDET.mtype;
      document.getElementById("mvoltage").innerHTML=data.KNOPROFILEDET.mvoltage;
      document.getElementById("mvtype").innerHTML=data.KNOPROFILEDET.mvtype;
      document.getElementById("officecity").innerHTML=data.KNOPROFILEDET.officecity;
      document.getElementById("officecode").innerHTML=data.KNOPROFILEDET.officecode;
      document.getElementById("officename").innerHTML=data.KNOPROFILEDET.officename;
      document.getElementById("amount").innerHTML=data.KNOPROFILEDET.osamt;
      document.getElementById("previous").innerHTML=data.KNOPROFILEDET.prkwh;
      document.getElementById("current").innerHTML=data.KNOPROFILEDET.ckwh;
      document.getElementById("duedate").innerHTML=data.KNOPROFILEDET.bccd;
    
      var munit = data.KNOPROFILEDET.ckwh - data.KNOPROFILEDET.prkwh;
    
      document.getElementById("unit").innerHTML = munit;
    
    }).catch(function() {
      console.log("Booo");
    });
    
    var inurl1 = 'https://cescrajasthan.co.in/kotawebservice/index.jsp?service=service_kno_commondet/';
    
    var url1 = inurl1.concat(kno);
    
    fetch(url1).then(function(response1) {
      return response1.json();
    }).then(function(data1) {
      console.log(data1);
      document.getElementById("knum").innerHTML=data1.KNOCOMMONDET.kno;
    }).catch(function() {
      console.log("Booo");
    });
    
    }