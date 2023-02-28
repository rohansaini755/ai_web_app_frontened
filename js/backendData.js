// console.log(document.getElementById('username').value)
document.getElementById('username200').innerHTML = getCookie("username")

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

let p = fetch("http://13.231.225.7:8000/api/text/")
    let p2  = fetch("http://goweather.herokuapp.com/weather/Ny")
    p.then((value1) =>{
        return value1.json()
    }).then((value2) => {
        const obj = JSON.parse(value2)
        //console.log(obj.length())
        const text = obj[0].name
        const textn = hexToString(obj[0].hindiText)
        const hint = obj[0].hintString
        const hintn = hexToString(hint)
        document.querySelector("#final2").innerHTML = textn
        document.querySelector("#final3").innerHTML = hintn
        // document.getElementById("errormsg").innerHTML = "done";
        
    })
    .catch((err) => {
        document.getElementById("errormsg").innerHTML = err;
        setTimeout(()=>{
            document.getElementById("errormsg").innerHTML = "";
        },5000)
    })

// axios.post('http://127.0.0.1:8000/api/text/',{level}).then(response=>console.log(response.data));
function hexToString(hexRepresentation) {
    let byteArray = new Uint8Array(hexRepresentation.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
    }))
    return new TextDecoder().decode(byteArray)
}