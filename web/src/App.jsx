import React, { useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";

//Componente: Bloco isolado de HTML,CSS e JS, o qual não interfere no restante da aplicação
//Propiedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantedias pelo componente (Lembrar: imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            {" "}
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/55556851?s=460&v=4"
                alt="Marcus Vinícius"
              />
              <div className="user-info">
                <strong> Marcus Vinícius</strong>
                <span> ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Cara muito maluco cara pqp meu bixo!</p>
            <a href="https://github.com/mvp-mark">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
