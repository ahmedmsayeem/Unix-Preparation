const express = require("express");
const app=express();

const port = 3000;
const path=require("path");
const fs = require("fs");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('public'));

app.listen(port,()=>{
    console.log("listening at 8080");

});

app.get("/",(req,res)=>{
    
    res.render("home.ejs");

});
app.get("/bash",(req,res)=>{
    let i=1;

    res.render("bash.ejs", { data: jsonData,i });
});
app.get("/info", (req, res) => {
    

    res.render("info.ejs");
});
app.get("/perl", (req, res) => {
 let i=1;
  const jsonData2=JSON.parse(fs.readFileSync("datas/perl.json","utf-8"));
    res.render("bash.ejs", { data: jsonData2,i });
});



const jsonData =
    [
        {
            "program": "Program 1",
            "question": "Implement a shell program to find and display the largest and smallest of three numbers.",
            "code": "#!/bin/bash\n\necho \"Please enter three numbers\"\nread x\nread y\nread z\n\nif [ $x -ge $y ] && [ $x -ge $z ]; then\n    echo \"$x is the largest number\"\nelif [ $y -ge $x ] && [ $y -ge $z ]; then\n    echo \"$y is the largest number\"\nelse\n    echo \"$z is the largest number\"\nfi\n\nif [ $x -lt $y ] && [ $x -lt $z ]; then\n    echo \"$x is the smallest number\"\nelif [ $y -lt $x ] && [ $y -lt $z ]; then\n    echo \"$y is the smallest number\"\nelse\n    echo \"$z is the smallest number\"\nfi",
            "output": "Please enter three numbers\n6\n7\n3\n7 is the largest number\n3 is the smallest number",
            "conceptual_summary": "This script finds and displays the largest and smallest numbers among three given numbers. It uses conditional statements to determine the largest and smallest values."
        },
        {
            "program": "Program 2",
            "question": "Find whether the number n is divisible by m or not using a shell script. Where m and n are supplied as command line arguments or read from the keyboard interactively.",
            "code": "#!/bin/sh\n\necho \"Enter the dividend:\"\nread n\necho \"Enter the divisor:\"\nread m\n\nif [ $((n % m)) -eq 0 ]; then\n    echo \"$n is divisible by $m\"\nelse\n    echo \"$n is not divisible by $m\"\nfi",
            "output": "Enter the dividend:\n66\nEnter the divisor:\n2\n66 is divisible by 2",
            "conceptual_summary": "This script determines whether one number is divisible by another. It checks if the remainder of the division is zero, indicating divisibility."
        },
        {
            "program": "Program 3",
            "question": "Plan and implement a shell program to search a pattern in a file that will take both the pattern and file name from the command line arguments.",
            "code": "#!/bin/sh\n\nif [ $# -eq 0 ]; then\n    echo \"No arguments\"\nelse\n    pattern=\"$1\"\n    filename=\"$2\"\n    if [ -f \"$filename\" ]; then\n        grep \"$pattern\" \"$filename\"\n    else\n        echo \"File '$filename' does not exist\"\n    fi\nfi",
            "output": "$ sh P3b.sh\nNo arguments\n\n$ sh P3b.sh search_pattern sample_file.txt\nThis is a sample file with the search_pattern.\nAnother line with the search_pattern.\n\n$ sh P3b.sh another_pattern non_existent_file.txt\nFile 'non_existent_file.txt' does not exist",
            "conceptual_summary": "This script searches for a pattern within a file specified in the command line arguments. It demonstrates command-line argument handling, file existence checking, and pattern matching."
        },
        {
            "program": "Program 4",
            "question": "Write a shell program to implement simple calculator operations.",
            "code": "#!/bin/sh\n\necho \"Options are:\"\necho \"+: Add\"\necho \"-: Subtract\"\necho \"*: Multiply\"\necho \"/: Divide\"\n\necho \"Enter the two numbers:\"\nread a\nread b\necho \"Enter your choice (+, -, *, /):\"\nread ch\ncase $ch in\n    +) result=$(expr $a + $b)\n       echo \"Sum = $result\";;\n    -) result=$(expr $a - $b)\n       echo \"Difference = $result\";;\n    *|\\*) result=$(expr $a \\* $b)\n       echo \"Product = $result\";;\n    /) if [ $b -ne 0 ]; then\n       result=$(expr $a / $b)\n       echo \"Division = $result\"\n       else\n       echo \"Error: Division by zero\"\n       fi\n       ;;\n    *) echo \"Invalid choice\";;\nesac",
            "output": "$ sh cal.sh\nOptions are:\n+: Add\n-: Subtract\n*: Multiply\n/: Divide\nEnter the two numbers:\n6\n4\nEnter your choice (+, -, *, /):\n+\nSum = 10\n\n$ sh cal.sh\nOptions are:\n+: Add\n-: Subtract\n*: Multiply\n/: Divide\nEnter the two numbers:\n3\n2\nEnter your choice (+, -, *, /):\n-\nDifference = 1\n\n$ sh cal.sh\nOptions are:\n+: Add\n-: Subtract\n*: Multiply\n/: Divide\nEnter the two numbers:\n9\n0\nEnter your choice (+, -, *, /):\n/\nError: Division by zero\n\n$ sh cal.sh\nOptions are:\n+: Add\n-: Subtract\n*: Multiply\n/: Divide\nEnter the two numbers:\n5\n2\nEnter your choice (+, -, *, /):\n*\nProduct = 10\n\n$ sh cal.sh\nOptions are:\n+: Add\n-: Subtract\n*: Multiply\n/: Divide\nEnter the two numbers:\n4\n3\nEnter your choice (+, -, *, /):\n$ Invalid choice",
            "conceptual_summary": "This script serves as a simple calculator, performing addition, subtraction, multiplication, and division based on user input. It demonstrates the use of arithmetic operations and a case statement for menu selection."
        },
        {
            "program": "Program 5",
            "question": "Design a Shell Program that takes any number of arguments and prints them in the same order and in reverse order with suitable messages.",
            "code": "#!/bin/sh\n\nif [ $# -eq 0 ]; then\n    echo \"No arguments\"\nelse\n    echo \"Number of arguments: $#\"\n    echo \"The input arguments are\"\n    num=1\n    for arg in \"\$@\"; do\n        echo \"arg$num is \$arg\"\n        num=$(expr \$num + 1)\n    done\n    echo \"Arguments in reverse order\"\n    num=\$#\n    while [ \$num -ne 0 ]; do\n        eval \"echo arg\$num is \$$num\"\n        num=$(expr \$num - 1)\n    done\nfi",
            "output": "$ sh rev.sh A B C\nProgram name: rev.sh\nNumber of arguments: 3\nThe input arguments are\narg1 is A\narg2 is B\narg3 is C\nArguments in reverse order\narg3 is C\narg2 is B\narg1 is A",
            "conceptual_summary": "This script accepts any number of arguments and prints them in the same order and in reverse order. It showcases argument handling, counting, and reversing the order."
        },
        {
            "program": "Program 6",
            "question": "Design a shell program that takes two file names and checks if the permissions for these files are identical. If they are identical, output the common permissions; otherwise, output each file name followed by its permissions.",
            "code": "#!/bin/sh\n\ndisplay_perm() {\n  r=$(ls -l \"$1\" | cut -c 2)\n  w=$(ls -l \"$1\" | cut -c 3)\n  x=$(ls -l \"$1\" | cut -c 4)\n  echo \"Owner permissions:\"\n  if [ \"$r\" = \"r\" ]; then\n    echo \"READ\"\n  else\n    echo \"NO READ\"\n  fi\n  if [ \"$w\" = \"w\" ]; then\n    echo \"WRITE\"\n  else\n    echo \"NO WRITE\"\n  fi\n  if [ \"$x\" = \"x\" ]; then\n    echo \"EXECUTE\"\n  else\n    echo \"NO EXECUTE\"\n  fi\n  g=$(ls -l \"$1\" | cut -c 5)\n  w=$(ls -l \"$1\" | cut -c 6)\n  x=$(ls -l \"$1\" | cut -c 7)\n  echo \"Group permissions:\"\n  if [ \"$r\" = \"r\" ]; then\n    echo \"READ\"\n  else\n    echo \"NO READ\"\n  fi\n  if [ \"$w\" = \"w\" ]; then\n    echo \"WRITE\"\n  else\n    echo \"NO WRITE\"\n  fi\n  if [ \"$x\" = \"x\" ]; then\n    echo \"EXECUTE\"\n  else\n    echo \"NO EXECUTE\"\n  fi\n  o=$(ls -l \"$1\" | cut -c 8)\n  w=$(ls -l \"$1\" | cut -c 9)\n  x=$(ls -l \"$1\" | cut -c 10)\n  echo \"Others permissions:\"\n  if [ \"$r\" = \"r\" ]; then\n    echo \"READ\"\n  else\n    echo \"NO READ\"\n  fi\n  if [ \"$w\" = \"w\" ]; then\n    echo \"WRITE\"\n  else\n    echo \"NO WRITE\"\n  fi\n  if [ \"$x\" = \"x\" ]; then\n    echo \"EXECUTE\"\n  else\n    echo \"NO EXECUTE\"\n  fi\n}\necho \"Enter two file names\"\nread file1 file2\nif [ -e \"$file1\" -a -e \"$file2\" ]; then\n  p1=$(display_perm \"$file1\")\n  p2=$(display_perm \"$file2\")\n  if [ \"$p1\" = \"$p2\" ]; then\n    echo \"Same permissions\"\n  else\n    echo \"Permission of $file1\"\n    display_perm \"$file1\"\n    echo \"Permission of $file2\"\n    display_perm \"$file2\"\n  fi\nelse\n  echo \"Invalid file names\"\nfi",
            "output": "$ sh perm.sh\nEnter two file names\nabc.txt data.c\nSame permissions",
            "conceptual_summary": "This script checks if the permissions for two files are identical. If they are identical, it outputs the common permissions. Otherwise, it outputs the permissions for each file separately. The program utilizes file handling, permission extraction, and comparison."
        },
        {
            "program": "Program 7",
            "question": "For the given path names (e.g., a/b, a/b/c), design a shell script to create all the components in those path names as directories.",
            "code": "#!/bin/sh\n\nif [ $# -ne 1 ]; then\n    echo \"No arguments\"\n    exit\nfi\ncurdir=$(pwd)\nfor dir in $(echo $1 | tr '/' ' ')\ndo\n    if [ -d $dir ]\n    then\n        echo \"$dir exists under $curdir\"\n        cd $dir\ndo\n    else\n        mkdir $dir\n        echo \"$dir created under $curdir\"\n        cd $dir\ndo\ndone\ncd $curdir",
            "output": "$ sh a.sh a/b/v/l\na created under /home/student/Desktop\nb created under /home/student/Desktop/a\nv created under /home/student/Desktop/a/b\n1 created under /home/student/Desktop/a/b/v",
            "conceptual_summary": "This script creates directories for the given path names, such as 'a/b/c,' in a hierarchical manner. It parses the path, checks for the existence of each directory, and creates it if necessary."
        },
        {
            "program": "Program 8",
            "question": "Develop a shell script that performs the following string handling operations:\n  i) Calculate the length of the string\n  ii) Locate a position of a character in a string\n  iii) Extract the first three characters from the string\n  iv) Extract the last three characters from the string.",
            "code": "#!/bin/sh\n\necho \"Enter the string\"\nread str\necho \"Menu:\"\necho \"1. Length of the string\"\necho \"2. Extract First 3 Characters\"\necho \"3. Extract Last 3 Characters\"\necho \"4. Locate a position of a character in a string\"\necho \"5. Exit\"\nread ch\ncase $ch in\n    1)\n        len=\$(expr \"\$str\" : '.*')\n        echo \"The length of the string is \$len\"\n        ;;\n    2)\n        if [ \${#str} -ge 3 ]; then\n            first3=\"\${str:0:3}\"\n            echo \"First three characters are: \$first3\"\n        else\n            echo \"Length of the string is less than 3\"\n        fi\n        ;;\n    3)\n        if [ \${#str} -ge 3 ]; then\n            last3=\"\${str: -3}\"\n            echo \"Last three characters are: \$last3\"\n        else\n            echo \"Length of the string is less than 3\"\n        fi\n        ;;\n    4)\n        echo \"Enter the Character\"\n        read char\n        pos=\$(expr index \"\$str\" \"\$char\")\n        if [ \$pos -gt 0 ]; then\n            echo \"Position of character \$char is \$pos\"\n        else\n            echo \"Character not found in the string\"\n        fi\n        ;;\n    5)\n        echo \"Exiting the program\"\n        ;;\n    *)\n        echo \"Invalid choice\"\n        ;;\nesac",
            "output": "Suzune Horikita\nMenu\n1. Length of the string\n2. Extract First 3 Character\n3. Extract Last 3 Character\n4. Locate a position of a character in a string\n5. Quit\nEnter your Choice: 2\nFirst three characters are: Suz\nEnter the String: Suzune Horikita\nMenu\n1. Length of the string\n2. Extract First 3 Character\n3. Extract Last 3 Character\n4. Locate a position of a character in a string\n5. Quit\nEnter your Choice: 3\nLast three characters are: ita\nEnter the String: Suzune Horikita\nMenu\n1. Length of the string\n2. Extract First 3 Character\n3. Extract Last 3 Character\n4. Locate a position of a character in a string\n5. Quit\nEnter your Choice: 4\nEnter the Character: e\nPosition of character e is: 7",
            "conceptual_summary": "This script handles various string operations, including calculating the length of the string, extracting the first and last three characters, and locating the position of a specific character. It provides a menu for user interaction."
        },
        {
            "program": "Program 9",
            "question": "For every filename, check whether the file exists in the current directory or not and then convert its name to uppercase only if a file with the new name doesn't exist. Shell script to perform this task.",
            "code": "#!/bin/bash\n\nfor file in \"\$@\"; do\n  if [ -f \"$file\" ]; then\n    ufile=$(echo \"$file\" | tr '[a-z]' '[A-Z]')\n    if [ -f \"$ufile\" ]; then\n      echo \"$ufile also exists\"\n    else\n      mv \"$file\" \"$ufile\"\n    fi\n  else\n    echo \"$file doesn't exist\"\n  fi\ndone",
            "output": "$ sh upper.sh\nabc.txt data.c\nABC.TXT also exists\nData.c doesn't exist",
            "conceptual_summary": "This script verifies the existence of files in the current directory and changes their names to uppercase, provided a file with the new name doesn't already exist. It utilizes file existence checks and string transformations."
        }
    ]
 

;

