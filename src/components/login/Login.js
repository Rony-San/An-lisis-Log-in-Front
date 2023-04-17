import React from "react";

export default function Login() {
  return (
    <>
<div class="center">
      <div class="image">
        <img src='D:\UDEA\Semestre 3\analisis1\fabrica-escuela\src\images\login.jpg' alt="Udea" />
      </div>
      <div class="main_wrapper">
        <h1>Ingreso</h1>
        <form method="post">
          <div class="text_field">
            <input type="text" required />
            <label>Usuario</label>
          </div>
          <div class="text_field">
            <input type="password" required />
            <label>Cntraseña</label>
          </div>
          <div class="pass">Olvido su contraseña?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            No está regustrado?
            <a href="login">Registrarse </a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}