document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verifica as credenciais
    if (username === "usuario" && password === "senha") {
      document.getElementById("message").innerHTML = "Login realizado com sucesso!";
    } else {
      document.getElementById("message").innerHTML = "Credenciais inválidas. Por favor, tente novamente.";
    }
  });
  