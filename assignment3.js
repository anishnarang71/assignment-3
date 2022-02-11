<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>assignment 3</title>
</head>
<body>
    <script>
        var students=[
        {
            name:"Ajay",
            roll_no:123,
            marks:78,
            city:"Amritsar"
        },
        
        {
            name:"Mala",
            roll_no:789,
            marks:79,
            city:"Mohali"
        },
        {
             name:"Shefali",
             roll_no:456,
             marks:67,
             city:"Chandigarh"
        },
        {
            name:"Chetan",
            roll_no:234,
            marks:89,
            city:"Ludhiana"
        },
        {
            name:"Raghav",
            roll_no:678,
            marks:96,
            city:"Jalandhar"
        }
    ]
    for(var i=0;i<students.length;i++)
    {
        console.log(students[i].name);//to print elements using for loop
    }
    for(var i=0;i<students.length;i++)
    {
        console.log(students[i].roll_no);//to print elements using for loop
    }
    students.forEach(function(name,i){
        console.log(students[i].city)
    })
    students.forEach(function(name,i){
        console.log(students[i].roll_no)
    })

    </script>
        
    
</body>
</html>