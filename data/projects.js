// A imagem principal aparece automaticamente no mockup correspondente ao tipo do projeto.
// Preencha desktopImage e/ou mobileImage para usar capturas específicas de cada versão.
// Os arquivos locais devem ficar em public/projects e ser referenciados como /projects/arquivo.webp.
export const projects = [
  {
    slug: 'petme-up',
    category: 'Aplicativo mobile',
    title: 'PetMe-Up',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1757080839/Captura_de_tela_2025-09-05_104748_nra1yp.png',
    desktopImage: null,
    mobileImage: null,
    description:
      'A PetMe-Up foi desenvolvida para simplificar a entrega de produtos e serviços do segmento pet. Por meio do aplicativo, pais de pets têm acesso a produtos e serviços em um só lugar, podendo realizar pedidos e agendamentos.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=petmeup.app.cliente&hl=pt_BR'
  },
  {
    slug: 'senac-to',
    category: 'Plataforma web',
    title: 'Senac TO',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1775479618/Captura_de_tela_2026-04-06_094650_llgaif.png',
    desktopImage: '/projects/senac/senac-web.png',
    mobileImage: '/projects/senac/senac-mobile.png',
    description:
      'Portal de acesso do Senac Tocantins para o Espaço do Aluno e outros serviços institucionais.',
    technologies: ['Vue.js', 'JavaScript', 'Node.js', 'API REST'],
    url: 'https://d-senacto.dixid.digital/'
  },
  {
    slug: 'lanche-bem',
    category: 'Aplicativo mobile',
    title: 'Lanche Bem',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1757080805/unnamed_lbkqxl.webp',
    desktopImage: null,
    mobileImage: null,
    description:
      'Plataforma que facilita a alimentação escolar, proporcionando mais agilidade e organização e contribuindo para a redução das filas.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.digital.lanchebem&hl=pt_BR'
  },
  {
    slug: 'netcare',
    category: 'Aplicativo mobile',
    title: 'Netcare',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1775479381/Captura_de_tela_2026-04-06_094252_e4jkx2.png',
    desktopImage: null,
    mobileImage: null,
    description:
      'Em um contexto no qual o acesso à saúde e aos serviços financeiros muitas vezes é desigual, a Netcare busca reduzir essa disparidade oferecendo uma plataforma inclusiva e acessível.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.com.netcare.app'
  },
  {
    slug: 'petme-up-parceiro',
    category: 'Aplicativo mobile',
    title: 'PetMe-Up | Parceiro',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1757079397/logoNew_jjhqdz.jpg',
    desktopImage: null,
    mobileImage: null,
    description:
      'Aplicativo voltado aos parceiros da PetMe-Up, permitindo o gerenciamento de serviços, pedidos e operações realizadas dentro da plataforma.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=petmeup.app.parceiro&hl=pt'
  },
  {
    slug: 'radical',
    category: 'Plataforma web',
    title: 'Radical',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1775479789/Captura_de_tela_2026-04-06_094940_vndilj.png',
    desktopImage: null,
    mobileImage: null,
    description:
      'Plataforma voltada a experiências premium de rally e aventura off-road para pessoas que procuram emoção, sofisticação e momentos inesquecíveis.',
    technologies: ['Vue.js', 'JavaScript', 'Node.js', 'API REST'],
    url: 'https://d-piocera.dixid.digital/'
  },
  {
    slug: 'cp-recomenda',
    category: 'Aplicativo mobile',
    title: 'CP Recomenda',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1775479502/Captura_de_tela_2026-04-06_094453_luylsw.png',
    desktopImage: null,
    mobileImage: null,
    description: 'Aplicativo exclusivo para vendedores da Casas Pedro.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.digital.casaspedro.offers'
  },
  {
    slug: 'agente',
    category: 'Aplicativo mobile',
    title: 'Agente',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1757080954/Captura_de_tela_2025-09-05_104139_rm8kj3.png',
    desktopImage: null,
    mobileImage: null,
    description:
      'Aplicativo no qual usuários podem compartilhar vídeos curtos destacando suas habilidades esportivas e interagir com uma comunidade de atletas.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.digital.oagente&hl=pt_BR'
  },
  {
    slug: 'contratei-mei-app',
    category: 'Aplicativo mobile',
    title: 'Contratei MEI APP',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1775479426/Captura_de_tela_2026-04-06_094336_mbpve5.png',
    desktopImage: null,
    mobileImage: null,
    description:
      'Plataforma que facilita a busca e a contratação de MEIs e profissionais autônomos prestadores de serviços. A solução oferece um sistema interno de contratação e avaliação, buscando proporcionar mais praticidade e segurança durante o processo.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.digital.contratei.app'
  },
  {
    slug: 'fy-imoveis',
    category: 'Aplicativo mobile',
    title: 'Fy Imóveis',
    image:
      'https://res.cloudinary.com/dho0yyj47/image/upload/v1757080752/download_capqln.webp',
    desktopImage: null,
    mobileImage: null,
    description:
      'Aplicativo desenvolvido para corretores de imóveis que desejam modernizar sua rotina, aumentar a carteira de clientes e fechar negócios com mais praticidade e agilidade.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    url: 'https://play.google.com/store/apps/details?id=dix.digital.fyimoveis&hl=pt_BR'
  }
]
