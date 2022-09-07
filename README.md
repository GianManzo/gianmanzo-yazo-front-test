<p align="center">
  <a href="#-stack">Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-roadmap">Roadmap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-organizacao">Organização</a>&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a href="#-contato">Contato</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<h1 align="center">
  Yazo-front-test
</h1>

<div align="center">
  <img src="https://i.imgur.com/oRqVZdI.png" width="80%" alt="page"  />
  
</div>

<br>

#### Desafio técnico Yazo - Codificado layout proposto, seguindo as especificações do desafio, neste README irá encontrar alguns trechos do código e explicações de organizações.
***Observações***: Uma abordagem diferente seria a criação de um arquivo externo para consumo utilizando map() para renderização do 
componente, porém, como a proposta foi um layout estático para avaliação da organização do código, optei por criar o componente
para listagem, contendo em seus parâmetros o modificador de cada projeto renderizado

## ✨ Stack

- [ ] Vite
- [ ] React
- [ ] TypeScript
- [ ] Styled-Components
- [ ] Google-Fonts
- [ ] Phosphor-icons
- [ ] Deploy-Vercel

## 💻 Roadmap

Faça o clone do repositório, no seu terminal, navegue até a pasta do projeto e execute:

```cl
  npm install 
  npm run dev 
```

## 🔖 Layout

## ***Layout proposto no desafio***: 


<div>
  <img src="https://i.imgur.com/SZ11fsM.png" width="70%" alt=""  />
</div>

---

## 💻 ***Layout final criado***: https://gianmanzo-yazo-front-test.vercel.app/

<div>
  <img src="https://i.imgur.com/oRqVZdI.png" width="70%" alt="" />
</div>

---

## 📋 Organizacao

<div>
  <img src="https://i.imgur.com/Y6arcIf.png" width="100%" alt=""  />
</div>

***Criado o arquivo para resetar as estilizações padrões dos navegadores*** <br/>
***Criado arquivo para estilizações globais***<br/>
***Criado a pasta components para agrupamento de cada componente utilizado onde respectivamente possui os arquivos de estilizações como o exemplo acima da pasta Menu***<br/>
***Criado a pasta Page que contém a página em si proposta (Projetos) que agrupa os componentes do Menu e Table***

<div>
  <img src="https://i.imgur.com/Wv6F6L5.png" width="100%" alt=""  />
</div>

---

***Criado componente Search para ele ser responsável pela lógica de filtragem da tabela e renderizado o mesmo no componente table***
***Renderizando o componente Project e recebendo como parâmetros as informações de cada projeto***


<div>
  <img src="https://i.imgur.com/7ovGpig.png" width="100%" alt=""  />
</div>

---


***Componente Project recebendo os parâmetros para tratar as informações modificadoras de cada elemento***
***Criado interface para tipagem TypeScript (interface criada no próprio componente, pois não havia necessidade da criação de arquivo externo no momento)***

<div>
  <img src="https://i.imgur.com/PB7qX7k.png" width="100%" alt=""  />
</div>

## 📲 Contato

<div>
  <a href="https://www.linkedin.com/in/gianmanzo/" target="_blank">
      <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="37" height="25"     alt="linkedin logo"/></a>
      
   <a href="mailto:ggianmanzo@gmail.com" target="_blank">
      <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg" width="37" height="25"     alt="linkedin logo" /></a>
      
   <a href="https://api.whatsapp.com/send?phone=+5519989873771&text=Ola" target="_blank">
      <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="37" height="25"     alt="linkedin logo" /></a>
      
   <a href="https://www.instagram.com/gianmanzoo/" target="_blank">
      <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="37" height="25"     alt="linkedin logo" /></a>
</div>

---

Project created by @Yazo and developed by Gian Manzo
