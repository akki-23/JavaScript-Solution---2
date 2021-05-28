const ValidateName = () => {
    const n_ame = document.getElementById('name').value;
    if (n_ame < 3) {
        document.getElementById('msg1').innerHTML = '*** Enter atleast three letter name.';
        n_ame.focus;
    }
    else {
        document.getElementById('msg1').innerHTML = '';
    }
}
const ValidateEmail = () => {
    const email = document.getElementById('email_id');
    const filer = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!filter.test(email.value)) {
        document.getElementById('msg2').innerHTML = '*** Enter Valid email ID.';
        email.focus;
    }
}
const PwdCheck = () => {
    const pw = document.getElementById('password').value;
    if (pw < 6) {
        document.getElementById('msg3').innerHTML = '*** Enter valid password of length six.';
        pw.focus;
    }
    else {
        document.getElementById('msg3').innerHTML = '';
    }
}
const Check = () => {
    let pw1 = document.getElementById('password').value;
    let pw2 = document.getElementById('confirm_password').value;
    if (pw1 === pw2) {
        document.getElementById('msg4').innerHTML = '** Password matched.';
    }
    else {
        document.getElementById('msg4').innerHTML = '*** Password does not match.';
        pw1.focus;
    }
}

function checkForm(form)
  {
    if(!form.terms.checked) {
      alert("Please accept the Terms of Service and Privacy Policy");
      form.terms.focus();
      return false;
    }
    return true;
  }
