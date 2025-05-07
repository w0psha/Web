function toggleForm(form) {
    document.getElementById('loginForm').style.display = form === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = form === 'register' ? 'block' : 'none';
    document.getElementById('loginResult').innerHTML = '';
    document.getElementById('registerResult').innerHTML = '';
  }
  
  const registerForm = document.getElementById('register');
  const loginForm = document.getElementById('login');
  
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const user = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      birthdate: document.getElementById('birthdate').value,
      gender: document.getElementById('gender').value,
      contact: document.getElementById('contact').value,
      password: document.getElementById('regPassword').value
    };
  
    localStorage.setItem(user.email, JSON.stringify(user));
  
    document.getElementById('registerResult').innerHTML = `
      <div class="result">User Registered:<br>
        Username: ${user.username}<br>
        Email: ${user.email}<br>
        Birthdate: ${user.birthdate}<br>
        Gender: ${user.gender}<br>
        Contact: ${user.contact}
      </div>
    `;
  
    registerForm.reset();
  });
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = JSON.parse(localStorage.getItem(email));
  
    if (storedUser && storedUser.password === password) {
      document.getElementById('loginResult').innerHTML = `
        <div class="result">Welcome back, ${storedUser.username}!</div>
      `;
    } else {
      document.getElementById('loginResult').innerHTML = `
        <div class="error">Invalid email or password.</div>
      `;
    }
  
    loginForm.reset();
  });
  