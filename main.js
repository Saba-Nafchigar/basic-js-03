let button = document.querySelector("button#show")
button.addEventListener("click", function(){

//show full name
    let FullName = document.querySelector("input[name=fullname]").value
    let ShowFullName = document.querySelector("h1#show-fullname");
    ShowFullName.innerHTML=`${FullName}`
//show national code
    let nationalCode = document.querySelector("input[name=national-code]").value
    let showNationalCode = document.querySelector("p[name=natunal-code]")
    showNationalCode.innerHTML = `${nationalCode}`
//show mother name
    let motherName = document.querySelector("input[name=mother-name]").value
    let showMotherName = document.querySelector("p[name=mother-name]")
    showMotherName.innerHTML = `${motherName}`
//show father name
    let fatherName = document.querySelector("input[name=father-name]").value
    let showFatherName = document.querySelector("p[name=father-name]")
    showFatherName.innerHTML = `${fatherName}`
//show date of birth
    let dateOfBirth = document.querySelector("input[name=date-of-birth]").value
    let showDateOfBirth = document.querySelector("p[name=date-of-birth]")
    showDateOfBirth.innerHTML = `${dateOfBirth}`
//show gender
    let gender = document.querySelector("select[name=gender]").value
    let showgender = document.querySelector("p[name=gender]")
    showgender.innerHTML = `${gender}`
//show degree
    let degree = document.querySelector("select[name=degree]").value
    let showdegree = document.querySelector("p[name=degree]")
    showdegree.innerHTML = `${degree}`
//show age
    let age = document.querySelector("input[name=age]").value
    let showage = document.querySelector("p[name=age]")
    showage.innerHTML = `${age}`
//hair color 
    let hairColor = document.querySelector("select[name=hair-color]").value
    let showHairColor = document.querySelector("p[name=hair-color]")
    showHairColor.innerHTML = `${hairColor}`
//eye color 
    let eyeColor = document.querySelector("select[name=eye-color]").value
    let showEyeColor = document.querySelector("p[name=eye-color]")
    showEyeColor.innerHTML = `${eyeColor}`
//Height
    let height = document.querySelector("input[name=height]").value
    let showHeight = document.querySelector("p[name=height]")
    showHeight.innerHTML = `${height}`
//weight
    let weight = document.querySelector("input[name=weight]").value
    let showWeight = document.querySelector("p[name=weight]")
    showWeight.innerHTML = `${weight}`
//marital status
    let maritalStatus = document.querySelector("select[name=marital-status]").value
    let showMaritalStatus = document.querySelector("p[name=marital-status]")
    showMaritalStatus.innerHTML = `${maritalStatus}`
//weight
    let footSize = document.querySelector("input[name=foot-size]").value
    let showFootSize = document.querySelector("p[name=foot-size]")
    showFootSize.innerHTML = `${footSize}`
//weight
    let Address = document.querySelector("input[name=address]").value
    let showAddress = document.querySelector("p[name=address]")
    showAddress.innerHTML = `${Address}`
})
