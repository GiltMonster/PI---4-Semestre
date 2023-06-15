import React, { useState } from "react";
import "../../style/EsqueceuSenha.css";

export default function EsqueceuSenha() {
  const [email, setEmail] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [confirmarSenhaNova, setConfirmarSenhaNova] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verifique se a nova senha e a confirmação de senha coincidem
    if (senhaNova !== confirmarSenhaNova) {
      alert("A nova senha e a confirmação de senha não correspondem.");
      return;
    }

    // Lógica para enviar a nova senha e o e-mail
    // Por exemplo, você pode fazer uma requisição a uma API ou serviço para atualizar a senha do usuário
    // Certifique-se de validar e tratar os erros de forma adequada

    // Exemplo fictício que simula a atualização da senha após 2 segundos
    setTimeout(() => {
      setEnviado(true);
    }, 2000);
  };

  return (
    <div className="PasswordRecovery">
      <h2>Redefinir Senha</h2>
      {enviado ? (
        <p>Senha atualizada com sucesso!.</p>
      ) : (
        <>
          <p>Preencha os campos abaixo para a atualização de sua senha.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              id="novaSenha"
              name="novaSenha"
              placeholder="Nova senha"
              required
              value={senhaNova}
              onChange={(event) => setSenhaNova(event.target.value)}
            />
            <input
              type="password"
              id="confirmarSenhaNova"
              name="confirmarSenhaNova"
              placeholder="Confirmar nova senha"
              required
              value={confirmarSenhaNova}
              onChange={(event) => setConfirmarSenhaNova(event.target.value)}
            />
            <div className="button-container">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
