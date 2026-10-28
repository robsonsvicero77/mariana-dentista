import alignersImage from '../assets/alinhadores_transparentes.png'
import bracesImage from '../assets/aparelhos_fixos.png'
import pediatricImage from '../assets/ortodontia_preventiva_infantil.png'
import bracesImage2 from '../assets/aparelho_convencional.png'
import adultImage from '../assets/ortodontia_adultos.png'
import biteCorrectionImage from '../assets/correcao_mordida.png'

const treatments = [
  {
    slug: 'alinhadores-transparentes',
    image: alignersImage,
    imageAlt: 'Dentista apresentando um alinhador transparente',
    badge: 'Mais procurado',
    title: 'Alinhadores Transparentes',
    description: 'Aparelhos invisíveis com tecnologia e mapeamento digital 3D. Estética discreta, conforto insuperável e liberdade durante as refeições e higiene diária.',
    actionLabel: 'Saiba mais',
    audience: 'Adultos & Adolescentes',
    intro: 'Os alinhadores são placas transparentes feitas sob medida para movimentar os dentes de forma gradual. O planejamento é individualizado e acompanhado pela ortodontista ao longo do tratamento.',
    howItWorks: 'Após avaliação clínica e planejamento digital, uma sequência de alinhadores é produzida para o caso. Cada etapa aplica movimentos planejados, e as consultas de acompanhamento permitem verificar a evolução e ajustar a conduta quando necessário.',
    points: [
      'As placas são removíveis para as refeições e para a higiene bucal.',
      'A indicação depende do diagnóstico, dos objetivos e da complexidade de cada caso.',
      'O resultado depende do uso conforme as orientações e do acompanhamento profissional.',
    ],
    note: 'Na consulta, a Dra. Mariana avalia se os alinhadores são uma opção adequada para você e explica as etapas do plano proposto.',
  },
  {
    slug: 'aparelhos-fixos-modernos',
    image: bracesImage,
    imageAlt: 'Sorriso com aparelho ortodôntico fixo estético',
    badge: 'Autoligado & estético',
    title: 'Aparelhos Fixos Modernos',
    description: 'Eficiência consagrada para correções dentárias complexas. Opções de safira, cerâmica ultradiscreta e modelos autoligados que dispensam borrachinhas e otimizam visitas.',
    actionLabel: 'Saiba mais',
    audience: 'Alta eficiência',
    intro: 'O aparelho fixo utiliza bráquetes e fios para conduzir movimentos dentários planejados. Há opções metálicas e estéticas, como cerâmica ou safira, escolhidas de acordo com as necessidades clínicas e as preferências do paciente.',
    howItWorks: 'Os bráquetes são fixados aos dentes e conectados por um fio ortodôntico. Nas consultas de acompanhamento, a ortodontista avalia o progresso e realiza os ajustes necessários. O cuidado diário com a higiene faz parte do tratamento.',
    points: [
      'Pode ser indicado para diferentes tipos de desalinhamento e alterações da mordida.',
      'Opções de materiais e sistemas são avaliadas caso a caso.',
      'Após a fase ativa, a contenção pode ser recomendada para ajudar a manter o resultado.',
    ],
    note: 'A escolha do aparelho e a estimativa de duração são definidas após avaliação individual.',
  },
  {
    slug: 'ortodontia-preventiva-infantil',
    image: pediatricImage,
    imageAlt: 'Criança em consulta odontológica acompanhada pela família e pela ortodontista',
    badge: 'Crianças & jovens',
    title: 'Ortodontia Preventiva & Infantil',
    description: 'Acompanhamento do crescimento facial e da erupção dos dentes. A avaliação ajuda a identificar alterações em desenvolvimento e a decidir o momento adequado para cada cuidado.',
    actionLabel: 'Saiba mais',
    audience: 'Crianças & jovens',
    intro: 'A ortodontia infantil acompanha o desenvolvimento da dentição, da mordida e dos maxilares. Uma avaliação permite observar o crescimento e identificar alterações que possam precisar de acompanhamento ou intervenção.',
    howItWorks: 'Na consulta, a ortodontista conversa com a família, examina a mordida e a fase de desenvolvimento da criança. A recomendação pode ser iniciar um tratamento, acompanhar periodicamente ou aguardar uma fase mais adequada.',
    points: [
      'A primeira avaliação ortodôntica é recomendada até os 7 anos, ou antes se uma alteração for percebida.',
      'A consulta precoce não significa que toda criança precise iniciar tratamento imediatamente.',
      'O momento e o tipo de cuidado dependem do desenvolvimento e da avaliação clínica individual.',
    ],
    note: 'A Dra. Mariana explica à família o que está sendo observado e quais são os próximos passos indicados para cada criança.',
  },
  {
    slug: 'aparelho-ortodontico-convencional',
    image: bracesImage2,
    imageAlt: 'Aparelho ortodôntico fixo com bráquetes metálicos',
    badge: 'Clássico & eficiente',
    title: 'Aparelho Ortodôntico Convencional',
    description: 'Aparelho fixo com bráquetes metálicos e fio ortodôntico, planejado para movimentar os dentes e acompanhar a correção do alinhamento e da mordida.',
    actionLabel: 'Saiba mais',
    audience: 'Adolescentes & Adultos',
    intro: 'O aparelho ortodôntico convencional é um sistema fixo formado por bráquetes metálicos presos aos dentes e conectados por um fio. A ortodontista planeja e acompanha os movimentos dentários ao longo das consultas.',
    howItWorks: 'Os bráquetes são colados aos dentes e o fio ortodôntico aplica forças leves e contínuas para produzir movimentos graduais. Durante o tratamento, consultas periódicas permitem avaliar a resposta e realizar os ajustes indicados.',
    points: [
      'Por ser fixo, permanece nos dentes durante o período ativo do tratamento.',
      'A higiene cuidadosa ao redor dos bráquetes e do fio é especialmente importante.',
      'Após a remoção, a ortodontista pode indicar contenção para ajudar a manter o resultado.',
    ],
    note: 'A indicação, os cuidados e a duração variam conforme o diagnóstico e a resposta individual ao tratamento.',
  },
  {
    slug: 'ortodontia-para-adultos',
    image: adultImage,
    imageAlt: 'Alinhador transparente em consulta odontológica',
    badge: 'Em qualquer fase da vida',
    title: 'Ortodontia para Adultos',
    description: 'Opções ortodônticas para adultos com avaliação individual da mordida, da saúde bucal e dos objetivos de cada paciente.',
    actionLabel: 'Saiba mais',
    audience: 'Adultos',
    intro: 'A ortodontia também pode ser considerada na vida adulta. A avaliação verifica o alinhamento dos dentes, a mordida e a saúde dos dentes e gengivas antes de definir as possibilidades de tratamento.',
    howItWorks: 'A partir do exame e do planejamento, a ortodontista conversa sobre as opções adequadas ao caso, que podem incluir aparelho fixo ou alinhadores transparentes. O plano leva em conta a condição bucal, os objetivos e as necessidades de cada pessoa.',
    points: [
      'A idade, por si só, não define se a pessoa pode fazer tratamento ortodôntico.',
      'A saúde das gengivas e dos dentes precisa ser considerada no planejamento.',
      'A escolha entre aparelho fixo e alinhadores depende do diagnóstico e dos movimentos necessários.',
    ],
    note: 'A consulta individual ajuda a entender as opções, os cuidados necessários e as etapas previstas para o seu caso.',
  },
  {
    slug: 'correcao-da-mordida',
    image: biteCorrectionImage,
    imageAlt: 'Sorriso com aparelho ortodôntico para ajuste da mordida',
    badge: 'Diagnóstico individual',
    title: 'Correção da Mordida',
    description: 'Avaliação ortodôntica de como os dentes superiores e inferiores se encontram ao fechar a boca e de possíveis alterações funcionais.',
    actionLabel: 'Saiba mais',
    audience: 'Crianças, jovens & adultos',
    intro: 'A mordida descreve como os dentes de cima e de baixo se encontram. Alterações como sobremordida, mordida cruzada, aberta ou prognatismo podem ter diferentes causas e graus.',
    howItWorks: 'A ortodontista examina a posição dos dentes e a relação entre as arcadas e os maxilares. Com base no diagnóstico, define se há indicação de tratamento e quais recursos são apropriados; em algumas situações, pode ser necessário coordenar o cuidado com outras especialidades.',
    points: [
      'O plano depende da origem e da intensidade da alteração, além da fase de crescimento.',
      'Aparelhos fixos e alinhadores podem ser opções em casos selecionados.',
      'Alterações relacionadas aos maxilares podem exigir avaliação interdisciplinar.',
    ],
    note: 'Somente uma avaliação presencial pode identificar o tipo de alteração da mordida e discutir as opções para cada pessoa.',
  },
]

export default treatments
