/**
 * GrowNear — Cria o inquérito no Google Forms
 *
 * Base: GrowNear_5_Inquerito_Estrutura_e_Perguntas.md (29 perguntas, 8 secções).
 *
 * Como usar:
 *   1. Abrir https://script.google.com com a conta Google do grupo → "Novo projeto".
 *   2. Apagar o código que lá está, colar este ficheiro inteiro e guardar (Ctrl+S).
 *   3. Escolher a função "criarInquerito" no topo e carregar em "Executar".
 *   4. Na primeira vez, autorizar o acesso ao Google Forms (Rever autorizações → conta →
 *      Avançadas → Aceder ao projeto → Permitir).
 *   5. Os links do formulário aparecem no "Registo de execução". O formulário fica também no Google Drive.
 *
 * Passos manuais depois de correr (o Apps Script não os permite fazer):
 *   - P8 e P15: no menu ⋮ de cada grelha, ativar "Ordenar linhas aleatoriamente".
 *   - Definições → Respostas: confirmar que "Recolher endereços de email" está em "Não recolher".
 *   - Se aparecer o botão "Publicar" no topo, publicar só depois de rever o formulário.
 *
 * Correr só uma vez: cada execução cria um formulário novo.
 * Para aplicar alterações ao formulário que já existe, correr "atualizarFormulario" (não cria nada novo).
 */

// Formulário criado a 08/10/2026.
const FORM_ID = '1MdOq4e6pq9f68bDwp4AqV6wZrCJjc21umuJlmT_BKGQ';

// Secção 0. Apresenta a GrowNear sem descrever a app, para não influenciar as secções 1 e 2.
const TEXTO_INTRO =
  'Olá! Somos a GrowNear e queremos aproximar quem produz de quem compra. ' +
  'Para criarmos algo realmente útil, queremos conhecer os seus hábitos de compra de ' +
  'frutas, legumes e outros produtos locais.\n\n' +
  'O questionário é anónimo e demora cerca de 6 minutos. As respostas são usadas apenas neste estudo de mercado. ' +
  'Não há respostas certas ou erradas: só queremos saber como compra hoje.\n\n' +
  'Obrigado pela ajuda!';

const TEXTO_SECCAO_3 =
  'Chegou a altura de lhe apresentarmos a GrowNear: a app que estamos a desenvolver para ligar pequenos produtores com excedentes ' +
  'da horta, do pomar ou do galinheiro a quem quer comprar produtos locais. O comprador vê num mapa o que ' +
  'está disponível perto de si, reserva na app e vai buscar a encomenda a casa do produtor ou a um ponto ' +
  'de recolha (por exemplo, um café ou uma mercearia). Não há entrega ao domicílio.';

const TEXTO_CONFIRMACAO =
  'Obrigado pela sua participação! A sua resposta foi registada.\n\n' +
  'Equipa GrowNear: do quintal para a mesa do vizinho.';

// P25. "Norte" exclui a Área Metropolitana do Porto, para as opções não se sobreporem.
const TITULO_REGIAO = '25. Em que região reside?';
const REGIOES = [
  'Área Metropolitana do Porto',
  'Norte (exceto Área Metropolitana do Porto)',
  'Centro',
  'Área Metropolitana de Lisboa',
  'Alentejo',
  'Algarve',
  'Açores',
  'Madeira',
  'Resido fora de Portugal',
];

// Taxa testada na P14 (proposta: 0,50 € + 5 % numa encomenda de 10 €). Se a taxa mudar, mudar aqui.
const TAXA_P14 = '1,00 €';

const ESCALA = ['1', '2', '3', '4', '5'];

const FATORES = [
  'Preço',
  'Frescura',
  'Saber quem produziu e onde',
  'Proximidade do local de compra',
  'Variedade de produtos disponíveis',
  'Produção sem pesticidas',
  'Apoiar pequenos produtores locais',
  'Reduzir o desperdício alimentar',
];

function criarInquerito() {
  // O título não descreve a app: o conceito só é apresentado na secção 3, para não influenciar as secções 1 e 2.
  const form = FormApp.create('Hábitos de compra de frutas, legumes e produtos locais');

  // Secção 0 — Apresentação
  form
    .setDescription(TEXTO_INTRO)
    .setLimitOneResponsePerUser(false)
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false)
    .setProgressBar(true)
    .setConfirmationMessage(TEXTO_CONFIRMACAO);

  // Secção 1 — Hábitos de compra (OE2)
  seccao(form, '1. Hábitos de compra');
  escolha(form, '1. Onde compra a maior parte das frutas e legumes frescos do seu agregado?', [
    'Hipermercado ou supermercado',
    'Mercearia ou frutaria de bairro',
    'Mercado municipal ou feira',
    'Diretamente a um produtor',
    'Online, com entrega em casa',
    'Não compro: vêm de horta própria ou de familiares',
    'Outro',
  ]);
  escolha(form, '2. Com que frequência compra frutas e legumes frescos?', [
    '3 ou mais vezes por semana',
    '1 a 2 vezes por semana',
    '2 a 3 vezes por mês',
    '1 vez por mês ou menos',
    'Nunca',
  ]);
  escolha(form, '3. Quanto gasta o seu agregado, em média, por semana em frutas e legumes frescos?', [
    'Menos de 10 €',
    '10 a 19 €',
    '20 a 29 €',
    '30 a 49 €',
    '50 € ou mais',
    'Não sei',
  ]);
  escolha(form, '4. Nos últimos 12 meses, comprou frutas, legumes, ovos ou mel diretamente a um produtor?', [
    'Sim',
    'Não',
  ]);
  escolha(form, '5. Tem acesso regular a produtos de horta própria, de familiares ou de vizinhos?', ['Sim', 'Não']);
  grelha(
    form,
    '6. Nos últimos 12 meses, comprou frutas ou legumes através de cada um destes meios?',
    [
      'Mercado municipal ou feira',
      'Cabaz de produtores (subscrição ou encomenda)',
      'Anúncios ou grupos online (OLX, Facebook, WhatsApp)',
      'App contra o desperdício (ex.: Too Good To Go)',
      'Loja de produtos biológicos',
    ],
    ['Sim', 'Não']
  );
  grelha(
    form,
    '7. Qual o seu grau de satisfação com as frutas e legumes que compra atualmente? (1 = Nada satisfeito, 5 = Muito satisfeito)',
    ['Frescura', 'Sabor', 'Preço', 'Informação sobre a origem']
  );

  // Secção 2 — Critérios de compra (OE5)
  seccao(form, '2. Critérios de compra');
  grelha(
    form,
    '8. Que importância tem cada fator quando compra frutas e legumes? (1 = Nada importante, 5 = Muito importante)',
    FATORES
  );

  // Secção 3 — Recolha e deslocação (OE4)
  seccao(form, '3. Recolha e deslocação', TEXTO_SECCAO_3);
  escolha(form, '9. Qual o tempo máximo que aceitaria deslocar-se (só ida) para recolher uma encomenda?', [
    'Não me deslocaria',
    'Até 5 minutos',
    '6 a 10 minutos',
    '11 a 20 minutos',
    '21 a 30 minutos',
    'Mais de 30 minutos',
  ]);
  escolha(form, '10. Como preferia recolher a encomenda?', [
    'Em casa do produtor',
    'Num ponto de recolha (café, mercearia)',
    'É-me indiferente',
    'Só compraria com entrega em casa',
  ]);
  escolha(form, '11. Que meio de transporte usaria, na maioria das vezes, para a recolha?', [
    'A pé',
    'Carro ou mota',
    'Transportes públicos',
    'Bicicleta ou trotinete',
  ]);

  // Secção 4 — Pagamento e taxa (OE6)
  seccao(form, '4. Pagamento e taxa');
  escolha(form, '12. Quanto pensa que gastaria, em média, por encomenda?', [
    'Menos de 5 €',
    '5 a 9 €',
    '10 a 19 €',
    '20 a 29 €',
    '30 € ou mais',
  ]);
  escolha(form, '13. Como preferia pagar?', [
    'Na app, no momento da reserva',
    'Ao produtor, na recolha (dinheiro ou MB Way)',
    'É-me indiferente',
  ]);
  escolha(
    form,
    '14. Numa encomenda de 10 €, aceitaria pagar uma taxa de serviço de ' +
      TAXA_P14 +
      ' que garante o reembolso se o produto não corresponder ao anunciado?',
    ['Sim', 'Não']
  );
  grelha(form, '15. Indique o seu grau de concordância. (1 = Discordo totalmente, 5 = Concordo totalmente)', [
    'Sentir-me-ia seguro a pagar antecipadamente na app a um produtor que não conheço',
    'As avaliações de outros compradores aumentariam a minha confiança',
    'Depois de conhecer o produtor, preferia combinar as compras seguintes diretamente com ele, fora da app',
  ]);
  escolha(form, '16. Qual o valor mínimo por encomenda que consideraria aceitável?', [
    'Não aceitaria um valor mínimo',
    '5 €',
    '10 €',
    '15 €',
  ]);

  // Secção 5 — Produtos da época (OE8)
  seccao(
    form,
    '5. Produtos da época',
    'Na GrowNear só estão disponíveis os produtos que os produtores da sua zona têm naquele momento. ' +
      'Por exemplo, não haverá tomate no inverno nem laranjas no verão.'
  );
  grelha(form, '17. Indique o seu grau de concordância. (1 = Discordo totalmente, 5 = Concordo totalmente)', [
    'Aceito que só estejam disponíveis os produtos da época',
    'Mesmo com pouca variedade, usaria a app para comprar o que houver',
  ]);
  escolha(form, '18. Se o produto que procura não estivesse disponível, o que faria mais provavelmente?', [
    'Escolhia outro produto disponível na app',
    'Pedia para ser avisado quando houvesse',
    'Comprava noutro local e voltava à app mais tarde',
    'Deixava de usar a app',
  ]);

  // Secção 6 — Interesse na app (OE3)
  seccao(form, '6. Interesse na app');
  escala(form, '19. Qual o seu grau de interesse em usar uma app como a GrowNear?', 'Nada interessado', 'Muito interessado');
  escala(
    form,
    '20. Se a app estivesse disponível na sua zona, qual a probabilidade de fazer uma compra nos primeiros 3 meses?',
    'Nada provável',
    'Muito provável'
  );
  escolha(form, '21. Com que frequência pensa que usaria a app para comprar?', [
    'Todas as semanas',
    '2 a 3 vezes por mês',
    '1 vez por mês',
    'Menos de 1 vez por mês',
    'Não usaria',
  ]);
  escolha(form, '22. Qual seria o principal motivo para não usar a app?', [
    'A deslocação para recolher',
    'Falta de confiança em produtores que não conheço',
    'Pouca variedade ou só produtos da época',
    'O preço dos produtos',
    'A taxa de serviço',
    'Prefiro os locais onde já compro',
    'Não quero instalar mais uma app',
    'Não vejo nenhum obstáculo',
  ]);

  // Secção 7 — Perfil (OE1)
  seccao(form, '7. Perfil');
  escolha(form, '23. Qual a sua idade?', [
    'Menos de 18',
    '18 a 24',
    '25 a 34',
    '35 a 44',
    '45 a 54',
    '55 a 64',
    '65 ou mais',
  ]);
  escolha(form, '24. Qual o seu género?', ['Feminino', 'Masculino', 'Outro', 'Prefiro não responder']);
  lista(form, TITULO_REGIAO, REGIOES);
  escolha(form, '26. Como descreve a zona onde vive?', [
    'Urbana (cidade)',
    'Suburbana (arredores de cidade)',
    'Rural (vila ou aldeia)',
  ]);
  escolha(form, '27. Quantas pessoas vivem no seu agregado, contando consigo?', ['1', '2', '3', '4', '5 ou mais']);
  escolha(form, '28. Qual a sua situação profissional?', [
    'Estudante',
    'Trabalhador-estudante',
    'Trabalhador por conta de outrem',
    'Trabalhador por conta própria',
    'Desempregado',
    'Reformado',
    'Outra',
  ]);
  escolha(form, '29. Qual o seu papel nas compras de alimentos do agregado?', [
    'Sou o principal responsável',
    'Partilho a responsabilidade',
    'Não costumo fazer as compras',
  ]);

  Logger.log('Formulário criado com ' + form.getItems().length + ' elementos.');
  Logger.log('Editar:   ' + form.getEditUrl());
  Logger.log('Responder: ' + form.getPublishedUrl());
}

// Aplica ao formulário já criado todas as alterações feitas depois de 08/10: textos da GrowNear, regiões,
// remoção da antiga P9 e renumeração das perguntas. Pode correr-se várias vezes. As outras respostas não são tocadas.
function atualizarFormulario() {
  const form = FormApp.openById(FORM_ID);
  form.setDescription(TEXTO_INTRO).setConfirmationMessage(TEXTO_CONFIRMACAO);

  const seccao3 = form
    .getItems(FormApp.ItemType.PAGE_BREAK)
    .filter((item) => item.getTitle() === '3. Recolha e deslocação')[0];
  if (!seccao3) throw new Error('Secção "3. Recolha e deslocação" não encontrada. O título foi alterado no Forms?');
  seccao3.setHelpText(TEXTO_SECCAO_3);

  // Retira a antiga P9 (fator mais importante), se ainda existir.
  form
    .getItems()
    .filter((item) => semNumero(item.getTitle()) === 'Destes fatores, qual é o mais importante para si?')
    .forEach((item) => form.deleteItem(item));

  // Renumera as perguntas pela ordem em que aparecem. As secções mantêm os seus títulos.
  form
    .getItems()
    .filter((item) => item.getType() !== FormApp.ItemType.PAGE_BREAK)
    .forEach((item, i) => item.setTitle(i + 1 + '. ' + semNumero(item.getTitle())));

  const regiao = form
    .getItems(FormApp.ItemType.LIST)
    .filter((item) => item.getTitle() === TITULO_REGIAO)[0];
  if (!regiao) throw new Error('Pergunta "' + TITULO_REGIAO + '" não encontrada. O título foi alterado no Forms?');
  regiao.asListItem().setChoiceValues(REGIOES);

  Logger.log('Formulário atualizado (' + form.getItems().length + ' elementos): ' + form.getEditUrl());
}

// Tira o número do início de um título ("10. Qual..." → "Qual...").
function semNumero(titulo) {
  return titulo.replace(/^\d+\.\s*/, '');
}

// Nova secção do Forms (quebra de página), com texto de introdução opcional.
function seccao(form, titulo, texto) {
  const item = form.addPageBreakItem().setTitle(titulo);
  if (texto) item.setHelpText(texto);
}

// Escolha única. "Outro" entra como opção normal, sem campo de texto.
function escolha(form, titulo, opcoes) {
  form.addMultipleChoiceItem().setTitle(titulo).setChoiceValues(opcoes).setRequired(true);
}

// Lista pendente (escolha única).
function lista(form, titulo, opcoes) {
  form.addListItem().setTitle(titulo).setChoiceValues(opcoes).setRequired(true);
}

// Grelha de escolha múltipla. Obrigatória = "Exigir uma resposta em cada linha".
function grelha(form, titulo, linhas, colunas) {
  form
    .addGridItem()
    .setTitle(titulo)
    .setRows(linhas)
    .setColumns(colunas || ESCALA)
    .setRequired(true);
}

// Escala linear de 1 a 5, com legenda só nos extremos.
function escala(form, titulo, minimo, maximo) {
  form.addScaleItem().setTitle(titulo).setBounds(1, 5).setLabels(minimo, maximo).setRequired(true);
}
