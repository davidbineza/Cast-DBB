
// Basic interactivity: subscribe & contact demo
document.getElementById('year').textContent = new Date().getFullYear();

function subscribe(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const msg = document.getElementById('subMessage');
  msg.textContent = 'Thanks! ' + email + ' has been added to the (demo) list.';
  msg.className = 'text-success';
  e.target.reset();
}

function sendContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const contactResult = document.getElementById('contactResult');
  contactResult.innerHTML = '<div class="alert alert-success">Thanks, ' + name + '! Your message has been received (demo).</div>';
  e.target.reset();
}
