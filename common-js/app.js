$(document).ready(function() {
  var dict = {
    "160 Alberto Braune Av.": {
      pt: "Av. Alberto Braune, 160"
    },
    "Pablo Veiga - Web Developer": {
      pt: "Pablo Veiga - Desenvolvedor Web"
    },
    "Web Developer": {
      pt: "Desenvolvedor Web"
    },
    "About me description": {
      pt: "Sobre mim"
    },
    "Brazil": {
      pt: "Brasil"
    },
    "CALL ME AT ANY TIME": {
      pt: "ME LIGUE A QUALQUER HORA"
    },
    "PROMPT REPLY": {
      pt: "RESPOSTA IMEDIATA"
    },
    "Download Resume": {
      pt: "Download CV"
    },
    "About me": {
      pt: "Sobre mim"
    },
    "Profile": {
      pt: "Perfil"
    },
    "AGE": {
      pt: "IDADE"
    },
    "27 years old": {
      pt: "27 anos"
    },
    "MY WORK": {
      pt: "MEU TRABALHO"
    },
    "Mid-level web developer (past 6 years) passioned for technology, music, FIFA and beer.": {
      pt: "Desenvolvedor web pleno (desde 2013) apaixonado por tecnologia, música, FIFA e cerveja."
    },
    "I had the chance to integrate awesome teams so far and work in the most various types of projects since e-commerces, corporative social network, legacy software migration and even a smart city platform =).": {
      pt: "Tive a oportunidade de integrar times incríveis até agora e de trabalhar nos mais variados tipos de projetos desde lojas virtuais, rede social corporativa, migração de software legado e até mesmo uma plataforma de cidades inteligentes =)."
    },
    "I've always played a full-stack developer role and, among all of the technologies that I had already worked with I can highlight my skills on:": {
      pt: "Sempre desempenhei papel de desenvolvedor full-stack e, dentre todas as tecnologias com as quais eu já trabalhei posso destacar minhas competências em:"
    },
    "Work Experience": {
      pt: "Experiências"
    },
    "PREVIOUS JOBS": {
      pt: "TRABALHOS ANTERIORES"
    },
    "FRONT-END DEVELOPER": { 
      pt: "DESENVOLVEDOR FRONT-END"
    },
    "JANUARY": {
      pt: "JANEIRO"
    },
    "FEBRUARY": {
      pt: "FEVEREIRO"
    },
    "MARCH": {
      pt: "MARÇO"
    },
    "APRIL": {
      pt: "ABRIL"
    },
    "MAY": {
      pt: "MAIO"
    },
    "SEPTEMBER": {
      pt: "SETEMBRO"
    }, 
    "OCTOBER": { 
      pt: "OUTUBRO"
    },
    "NOVEMBER": { 
      pt: "NOVEMBRO"
    },
    "SINCE": {
      pt: "DESDE"
    },
    "IONIC DEVELOPER": {
      pt: "DESENVOLVEDOR IONIC"
    },
    "Hybrid mobile cross-platform applications development.": {
      pt: "Desenvolvimento de aplicativos híbridos móveis multi-plataforma."
    },
    "Front-end developer in an Australian fintech corporative social network project.": {
      pt: "Desenvolvedor front-end em um projeto de rede social corporativa para uma fintech australiana."
    },
    "FULL-STACK DEVELOPER": {
      pt: "DESENVOLVEDOR FULL-STACK"
    },
    "Legacy corporative intranet migration from ASP to new technologies.": {
      pt: "Projeto de migração de intranet corporativa da linguagem ASP para novas tecnologias."
    },
    "One of the main developers of a modular multi language smart city platform that integrates digital processes management, geospatial information analysis and IoT devices monitoring.": {
      pt: "Um dos principais desenvolvedores de uma plataforma modular e multi idiomas para cidades inteligentes que integra gerenciamento de processos digitais, análise de informações geoespaciais e monitoramento de dispositivos IoT."
    },
    "Main developer of a tool shop ecommerce.": {
      pt: "Principal desenvolvedor do ecommerce de uma loja de ferramentas."
    },
    "Online Payment API Integration": {
      pt: "Integração de API de pagamento online"
    },
    "Proprietary ecommerce platform development.": {
      pt: "Desenvolvimento de plataforma de loja virtual proprietária."
    },
    "E-COMMERCE ASSISTANT": {
      pt: "ASSISTENTE DE E-COMMERCE"
    },
    "Safes and security gadgets ecommerce management and creation of web marketing campaigns.": {
      pt: "Gerenciamento de e-commerce de cofres e artefatos de segurança e criação de campanhas de marketing para web."
    },
    
    "E-commerce products managament": {
      pt: "Gerenciamento de produtor de e-commerce"
    },
    "Web marketing campaigns": {
      pt: "Campanhas de marketing para web"
    },
    "Public electronic transport ticket system": {
      pt: "Sistema de bilhetagem eletrônica de transporte público"
    },
    "Public attendance": {
      pt: "Atendimento ao público"
    },
    "Technical Support": {
      pt: "Suporte técnico"
    },
    "Implantation of electronic tickets systems to the public transportation service in the city of Nova Friburgo - RJ, Brazil": {
      pt: "Implantação de sistema de bilhetagem eletrônica para o serviço de transporte público da cidade de Nova Friburgo - RJ, Brazil"
    },
    "TECHNICAL SUPPORT ASSISTANT": {
      pt: "ASSISTENTE TÉCNICO DE SUPORTE"
    },
    "Technical support in a state school in Nova Friburgo/RJ - Brazil.": {
      pt: "Suporte técnico e manutenção alocado em uma escola estadual em Nova Friburgo/RJ - Brasil."
    },
    "Network configuration and maintenance": {
      pt: "Configuração e manutenção de redes de computadores"
    },
    "First level technical support": {
      pt: "Suporte técnico de primeiro nível"
    },
    "Informatic laboratory maintenance": {
      pt: "Manutenção do laboratório de informática"
    },
    "First level technical support": {
      pt: "Suporte técnico de primeiro nível"
    },
    "Hardware maintenance": {
      pt: "Manutenção de hardware"
    },
    "INTERN": { 
      pt: "ESTAGIÁRIO"
    },
    "Education": {
      pt: "Educação"
    },
    "ACADEMIC CAREER": {
      pt: "CARREIRA ACADÊMICA"
    },
    "INFORMATION SYSTEM BACHELOR DEGREE": {
      pt: "BACHARELADO EM SISTEMAS DE INFORMAÇÃO"
    },
    "COURSING LAST PERIOD": {
      pt: "CURSANDO ÚLTIMO PERÍODO"
    },
    "Conclusion project consists in a tool for automatic user interface prototype generation from agile requirements written using": {
      pt: "Trabalho de conclusão de curso consiste em uma ferramenta para geração automática de protótipos de interface de usuário a partir de especificações de requisitos ágeis escritos em"
    },
    "Concordia language": {
      pt: "Linguagem Concordia"
    },
    "INFORMATION SYSTEM TECHNICIAN": {
      pt: "Técnico em Informática"
    },
    "GRADUATED IN OCTOBER 2013 (3 YEARS)": {
      pt: "FORMADO EM OUTUBRO DE 2013 (3 ANOS)"
    },
    
    "years old": {
      pt: "anos de idade"
    },
    "years developing for the web":  {
      pt: "anos desenvolvendo para web"
    },
    "work experiences":  {
      pt: "experiências de trabalho"
    },
    "and adapted by": {
      pt: "e adaptado por"
    },
    "This template was built by": {
      pt: "Este template for criado por"
    }
    
  }

  var lang = ((navigator.language || navigator.userLanguage).indexOf('pt') !== -1) ? 'pt' : 'en';
  
  var translator = $('html').translate({lang: lang, t: dict}); //use English
  
  $("*").filter(function() {
    if($(this).data("navigate") !== undefined) {
      $(this).on('click', function() {
        window.open($(this).data('navigate'));
      });
    }

    if($(this).data("language") !== undefined) {
      $(this).on('click', function() {
        translator.lang($(this).data('language'))
      });
    }
  });

  $('#resume').on('click', function() {
    var language = translator.getLanguage();
    console.log(language)
    window.location.href = (language === 'en') ? './resume-pablo-veiga.pdf' : './curriculo-pablo-veiga.pdf';
  });
  
});