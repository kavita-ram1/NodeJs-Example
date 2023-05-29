
const fs = require('fs');
//reading file

//fs.readFile('./docs/blog1.txt',(err,data)=>{
//    if(err){
//        console.log(err);
//   }
//console.log(data.toString());
//});

//writing file
//fs.writeFile('./docs/blog1.txt','hello world',()=>{
//   console.log('file was writen');
//});

//fs.writeFile('./docs/blog2.txt','hello world again',()=>{
//   console.log('file was writen');
//});


//directories 
//if(!fs.existsSync('./assets')){
//    fs.mkdir('./assets',(err)=>{
 //   if(err){
//        console.log(err);
//    }
 //   console.log('folder created');
   //  });
//}else{
  //  fs.rmdir('./assets',(err)=>{
  //      if(err){
 //           console.log(err);
  //      }
  //      console.log('folder delete');
  //  });
//}

//deleting file

if(fs.existsSync('./docs/deleteme.txt')){
fs.unlink('./docs/deleteme.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file deleted');
});

}