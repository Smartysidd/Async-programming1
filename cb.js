let dataArray=[{name:'siddharth' , age:23},
                {name:'steve' , age:21},
               {name:'rohan' , age:20},]
               function getData(){
                setTimeout(function(){
                    let output=''
                    dataArray.forEach(function(data){
                        output +=`<li> ${data.name} </li>`
                    })
                    document.body.innerHTML=output
                })
                }
            
                function createData(newdata, cb){
                    setTimeout(function(){
                        dataArray.push(newdata)
                        cb()
                    })
                }
                createData({name:'mark',age:30},getData)
                 
               