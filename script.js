const display = (event) => {
    document.getElementById('result').innerHTML = '';
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let branch = document.getElementById('branch').value;
    let email = document.getElementById('email').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let mobile = document.getElementById('mobile').value;
    let image_file = document.getElementById('image-file').files[0]

    const fReader = new FileReader();
    fReader.readAsDataURL(image_file);
    fReader.onloadend = function (event) {
        let img = document.getElementById("image");
        img.src = event.target.result;
    }


    document.getElementById('result').innerHTML = '<p>' + 'Name: ' + name + '<br>' + 'Date of Birth: ' + dob +
        '<br>' + 'Address: ' + address + '<br>' + 'Email: ' + email + '<br>' + 'Branch: ' + branch.toUpperCase() + '<br>' +
        'Gender: ' + gender.toUpperCase() + '<br>' + 'Mobile:' + mobile + '</p>'

    return false;
};