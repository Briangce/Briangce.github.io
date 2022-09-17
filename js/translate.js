var contryCode="BR"
    switch (contryCode) {
        case  "BR" || "PT":
        $("#heading").html(`<li><a href="#">Home</a></li>
        <li><a href="#bioResum">Sobre Mim</a></li>
        <li><a href="./archivos/cv.pdf" target="_blank">Curriculum</a></li>
        <li><a href="#footer">Contato</a></li>
        <li class="rs">
    <a href="https://www.linkedin.com/in/brian-garc%C3%ADa-ces%C3%ADn-8843381a1/" target="_blank">Linkedin</a>
  </li>`);
        $("#bioResum").html(`<h1>Meu nome é...</h1>
        <p>
            Brian Garcia Cesín, nasci na Venezuela no 1997. Na minha
            adolescência aprendi a arte do design e o web design, tempo
            depois decidi estudar Engenharia Informática para melhorar meus
            conhecimentos. Por problemas políticos nacionais muito graves do meu pais
            decidi pausar minha carreira de engenharia temporalmente e continuei
            aprendendo em
            <a href="https://platzi.com.br/" target="_blank">
            <strong style="color: #97c645; letter-spacing: 1px">Platzi</strong> </a>. Atualmente estou morando no Brasil buscando novos caminhos para
            lograr minhas metas.
        </p>`)
        $("#especi").html(`<h2 class="h2">SOU ESPECIALISTA EM</h2>
        <div class="col">
        <li class="flat flaticon-025-tactics"></li>
        <h2>Backend</h2>
        <p class="p1">
            Impulsione seu projeto web com os recursos e técnicas mais atualizados.
        </p>
        </div>
        <div class="col">
        <li class="flat flaticon-023-studio"></li>
        <h2>Design</h2>
        <p class="p1">
            Todo o que você precise para a comunicação visual do seu produto ou
            empresa.
        </p>
        </div>
        <div class="col">
        <li class="flat flaticon-006-computer"></li>
        <h2>Web Design</h2>
        <p class="p1">
            Melhore sua presença na internet e materiais para promocionar seus produtos e
            serviços.
        </p>
        </div>
        <div class="col">
        <li class="flat flaticon-009-creativity"></li>
        <h2>Design de Marcas</h2>
        <p class="p1">
            Crie a identidade para sua empresa ou produto com a creatividade necessária
            para destacar.
        </p>
        </div>
        <div class="col">
        <li class="flat flaticon-029-think"></li>
        <h2>Marca Pessoal</h2>
        <p class="p1">
            Deixe sua marca pessonal nas mãos de um profissional com experiência.
        </p>
        </div>
        <div class="col">
        <li class="flat flaticon-007-content"></li>
        <h2>Materiais para Eventos</h2>
        <p class="p1">
            Material promocional para expressar o potencial da tua marca ou
            produto.
        </p>
        </div>`)
        $("#titleProjects").text("MEUS PROJETOS")
        $("footer").html(`
        <div class="footer footer-a" id="footer">
        <h3>Trabalhamos juntos?</h3>
<div class="content content-a">
  <ul>
    <li class="con">
      <img src="./images/footer/ph.png" />Santa Catarina - Brasil
    </li>
    <li class="con">
      <img src="./images/footer/em.png" /><a
        href="mailto:brian15aggc@gmail.com"
        >Brian15aggc@gmail.com</a
      >
    </li>
    <li class="con">
      <img src="./images/footer/st.png" /><a href="tel:+55 (48)988154041">+55 (48) 988154041</a>
    </li>
  </ul>
  
  <p id="all">
    ©2022 Brian García Cesín <br />Todos os Direitos
    Reservados
  </p>
</div>
</div>
<div class="footer footer-b">
<h3>Explore</h3>
<div class="content-b">
  <ul>
    <li><a href="#">Políticas de Privacidade</a></li>
    <li><a href="#">Perguntas</a></li>
    <li><a href="#">Sobre Mim</a></li>
  </ul>
</div>
</div>`)
        break;
        case  "USA" || "UK" || "CA":
            lang = "en"
        break;
        default:
        break;
    }
