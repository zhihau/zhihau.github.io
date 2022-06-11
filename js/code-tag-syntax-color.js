const schemes={
    "Fluorescent":{
        color:[
            "#FF355E",
            "#FF00CC",
            "#EE34D2",
            "#FF6EFF",
            "#FF9933",
            "#FFCC33",
            "#FFFF66",
            "#FFFF66",
            "#CCFF00",
            "#66FF66",
            "#AAF0D1",
            "#50BFE6",
            "#FF9966",
            "#FF6037",
            "#FD5B78",
            "#FF00CC"
        ],
        background:"black"
    }, 
    "Bright":{
        color:[
            "#FF3855",
            "#FD3A4A",
            "#FB4D46",
            "#FA5B3D",
            "#FFAA1D",
            "#FFF700",
            "#A7F432",
            "#5DADEC",
            "#9C51B6",
            "#AF6E4D",
            "#BFAFB2",
            "#FF5470",
            "#FFDB00",
            "#FF7A00",
            "#FDFF00",
            "#87FF2A",
            "#FF007C",
            "#E936A7"
    ],
        background:"#2243B6" //Denim Blue
    } , 
    "Metallic":{
        color:[
            "#C46210",
            "#2E5894",
            "#9C2542",
            "#BF4F51",
            "#A57164",
            "#58427C",
            "#4A646C",
            "#85754E",
            "#319177",
            "#0A7E8C",
            "#9C7C38",
            "#8D4E85",
            "#8FD400",
            "#D98695",
            "#757575",
            "#0081AB"
        ],
        background:"lightgrey"
        },
    "Silver":{
        color:[
            "#C39953",
            "#A17A74",
            "#6D9BC3",
            "#CD607E",
            "#AD6F69",
            "#2E2D88",
            "#AB92B3",
            "#676767",
            "#6EAEA1",
            "#AE98AA",
            "#BBB477",
            "#AD4379",
            "#B768A2",
            "#8BA8B7",
            "#5DA493",
            "#A6A6A6",
            "#9E5E6F",
            "#DA2C43",
            "#778BA5",
            "#5FA778",
            "#5F8A8B",
            "#914E75",
            "#8A496B",
            "#56887D",
        ],
        background:"#95E0E8"//Aquamarine
        },
    "Fragrance":{
        color:[
"#4F86F7",
"#FFD3F8",
"#C95A49",
"#DA2647",
"#BD8260",
"#9B7653",
"#44D7A8",
"#A6E7FF",
"#6F2DA8",
"#DA614E",
"#253529",
"#1A1110",
"#DB91EF",
"#B2F302",
"#FFE4CD",
"#214FC6",
"#FF8866",
"#FFD0B9",
"#45A27D",
"#FF5050",
"#FFCFF1",
"#738276",
"#CEC8EF",
"#FC5A8D",
"#FF878D",
        ],
        background:"#FFD12A"//Banana
        }
    };
let default_scheme="Fluorescent";
//let ignore_selectors=["htmlcode","pycode"];
let code_color=schemes[default_scheme].color;
let code_background=schemes[default_scheme].background;

function changeScheme(schemeName){
    default_scheme=schemeName;
    code_color=schemes[schemeName].color;
    code_background=schemes[schemeName].background;
    setCodeSyntaxColor();
}
function setCodeSyntaxColor(){
    var ignore="";
    for(var i=0;i<ignore_selectors.length;i++){
        ignore+=":not(."+ignore_selectors[i]+")";
    }
    //elements=document.querySelectorAll('code:not(.htmlcode):not(.pycode)');
    elements=document.querySelectorAll('code'+ignore);
    if(elements.length==0) return;
    for(var i=0;i<elements.length;i++){
        var code=elements[i].innerText;
        var command_color="";
        code=code.replace(/ +/g,' ');//replace multiple space to one
        parts=(code.indexOf(" ")>-1)?code.split (" "):[code];
       if(default_scheme=="Fluorescent") command_color= "lime";
        else command_color=code_color[code_color.length-1];
        //parts[0]='<span style="color:'+command_color+';font-weight:bolder">'+parts[0]+'</span>';
        parts[0]='<span style="color:'+command_color+';">'+parts[0]+'</span>';
/*        var code_color=[
    "#FF355E",
    "#FF00CC",
    "#EE34D2",
    "#FF6EFF",
    "#FF9933",
    "#FFCC33",
    "#FFFF66",
    "#FFFF66",
    "#CCFF00",
    "#66FF66",
    "#AAF0D1",
    "#50BFE6",
    "#FF9966",
    "#FF6037",
    "#FD5B78",
    "#FF00CC"
        ];
*/
        for(var j=1;j<parts.length;j++){
            var code_color_index=j-1;
            if(code_color_index>=code_color.length){
                console.log("xxx");
                code_color_index=j-(code_color.length+1);
            }
            console.log(j);
            console.log(parts[j]);
            console.log(code_color_index);
            parts[j]='<span style="color:'+((code_color[code_color_index]==undefined)?code_color[code_color.length-1]:code_color[code_color_index])+';">'+parts[j]+'</span>';
        }
        elements[i].innerHTML=parts.join(" ");
        elements[i].setAttribute("style","background:"+code_background+";padding-right: 8px;padding-left: 8px;border-radius: 10px;font-weight:bolder");

    }
    return;
}
setCodeSyntaxColor();
