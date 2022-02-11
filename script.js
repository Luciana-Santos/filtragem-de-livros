// array com uma lista de livros simulando uma lista externa
const livros = [
  {
    id: 1,
    titulo: "Box H. P. Lovecraft: O Panteão dos Mitos",
    autor: "H.P Lovecraft",
    categoria: "terror",
    preco: "40,50",
    img: "./img/hp_lovecraft.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias dolorem, nisi voluptas quibusdam illo accusamus voluptatem nostrum? Possimus culpa fuga quia. Deserunt, inventore."
  },
  {
    id: 2,
    titulo: "Box Nórdicos: Os Melhores Contos e Lendas",
    autor: "Vários Autores",
    categoria: "fantasia",
    preco: "39,32",
    img: "./img/nordicos.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 3,
    titulo: "Box Peter Pan: 3 livros",
    autor: "J.M Barrie",
    categoria: "fantasia",
    preco: "45,50",
    img: "./img/peter_pan.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 4,
    titulo: "Box Pocket Luxo De O Senhor Dos Anéis + O Hobbit",
    autor: "J.R.R Tolkien",
    categoria: "fantasia",
    preco: "179,00",
    img: "./img/senhor_dos_aneis.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 5,
    titulo: "Coleção Agatha Christie - Box 1",
    autor: "Agatha Christie",
    categoria: "mistério",
    preco: "59,90",
    img: "./img/agatha_christie.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias dolorem, nisi voluptas quibusdam illo accusamus voluptatem nostrum? Possimus culpa fuga quia. Deserunt, inventore."
  },
  {
    id: 6,
    titulo: "Box Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    categoria: "mistério",
    preco: "79,90",
    img: "./img/sherlock-holmes.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 7,
    titulo: "O silêncio dos inocentes",
    autor: "Thomas Harris e Antonio Gonçalves Penna",
    categoria: "mistério",
    preco: "34,90",
    img: "./img/o_silencio_dos_inocentes.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 8,
    titulo: "Bom dia, Verônica ",
    autor: "Ilana Casoy",
    categoria: "mistério",
    preco: "28,70",
    img: "./img/bom_dia_veronica.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 9,
    titulo: "Todo esse tempo",
    autor: "Rachael Lippincott, Mikki Daughtry, e outros",
    categoria: "romance",
    preco: "22,80",
    img: "./img/todo_esse_tempo.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 10,
    titulo: "Até o verão terminar",
    autor: "Colleen Hoover e Mariana Serpa",
    categoria: "romance",
    preco: "26,89",
    img: "./img/ate_o_verao_terminar.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 11,
    titulo: "Como todos os outros, ou não",
    autor: " Bruna Santos Baccarini",
    categoria: "romance",
    preco: "35,00",
    img: "./img/como_todos_os_outros.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 12,
    titulo: "Um Caminho Para A Liberdade",
    autor: "Jojo Moyes, Ana Rodrigues, e outros",
    categoria: "romance",
    preco: "35,00",
    img: "./img/um_caminho_para_liberdade.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui modi quas obcaecati? Laborum accusantium sunt sapiente veniam. Suscipit assumenda perspiciatis exercitationem."
  },
  {
    id: 13,
    titulo: "O príncipe cruel (Vol. 1 O Povo do Ar)",
    autor: "Holly Black e Regiane Winarski",
    categoria: "fantasia",
    preco: "25,90",
    img: "./img/principe_cruel.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 14,
    titulo: "De sangue e cinzas (Vol. 1)",
    autor: "Jennifer L. Armentrout e Flavia de Lavor",
    categoria: "fantasia",
    preco: "47,92",
    img: "./img/de_sangue_e_cinzas.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 15,
    titulo: "Corte de espinhos e rosas (Vol. 1) ",
    autor: "Sarah J. Maas",
    categoria: "fantasia",
    preco: "28,60",
    img: "./img/corte_espinhos_rosas.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 16,
    titulo: "Percy Jackson e os Olimpianos (Vol. 1)",
    autor: "Rick Riordan",
    categoria: "fantasia",
    preco: "26,01",
    img: "./img/percy_jackson.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 17,
    titulo: "A guerra dos mundos",
    autor: "H.G Wells",
    categoria: "sci-fy",
    preco: "11,88",
    img: "./img/guerra_dos_mundos.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 18,
    titulo: "O guia definitivo do mochileiro das galáxias",
    autor: "Douglas Adams",
    categoria: "sci-fy",
    preco: "44,90",
    img: "./img/mochileiro_das_galaxias.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 19,
    titulo: "STAR WARS: DARK EDITION",
    autor: "George Lucas",
    categoria: "sci-fy",
    preco: "45,90",
    img: "./img/star-wars.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 20,
    titulo: "Eu, Robô",
    autor: "Isaac Asimov",
    categoria: "sci-fy",
    preco: "28,90",
    img: "./img/eu_robo.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 21,
    titulo: "Duna",
    autor: "Frank Herbert",
    categoria: "sci-fy",
    preco: "152,90",
    img: "./img/duna.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 22,
    titulo: "A máquina do tempo",
    autor: "H.G Wells",
    categoria: "sci-fy",
    preco:" 7,90",
    img: "./img/a_maquina_do_tempo.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 23,
    titulo: "Misery: Louca obsessão",
    autor: "Stephen King",
    categoria: "terror",
    preco: "23,65",
    img: "./img/misery.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 24,
    titulo: "Battle Royale",
    autor: "Koushun Takami",
    categoria: "terror",
    preco: "38,90",
    img: "./img/batle_royale.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 25,
    titulo: "Edgar Allan Poe - Medo Clássico",
    autor: "Edgar Allan Poe",
    categoria: "terror",
    preco: "42,90",
    img: "./img/edgar_allan_poe.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
  {
    id: 25,
    titulo: "O chamado de Cthulhu e outros contos",
    autor: "H.P Lovecraft",
    categoria: "terror",
    preco: "9,90",
    img: "./img/hp_lovecraft2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum quia architecto atque corporis quisquam consequatur totam molestiae."
  },
]

// seleção da section que agrupa os livros e a que agrupa os botões de filtragem
const livrosSection = document.querySelector('.livros-section')
const containerBtn = document.querySelector('.btn-filter')

// adiciona os arquivos assim que a página carrega
window.addEventListener('DOMContentLoaded', () => {
  mostrarListaLivros(livros)
  mostrarBtnCategorias()
})

// função que adiciona os livros de acordo com suas características passadas na array 'livros'
function mostrarListaLivros(listaItens) {
  let mostrarLivros = listaItens.map(item => {
    return `<article class="livro_item">
    <div class="livro_foto">
      <img src=${item.img} alt=${item.titulo}>
    </div>
    <div class="livro_info">
      <div class="livro_header">
        <h3 class="livro_titulo">${item.titulo}</h3>
        <h3 class="autor">Autor: <span>${item.autor}</span></h3>
        <h3 class="preco">R$ ${item.preco}</h3>
      </div>
      <p class="livro_desc">${item.desc} [...]</p>
    </div>
  </article>`
  })
  mostrarLivros = mostrarLivros.join('')
  livrosSection.innerHTML = mostrarLivros
}

// função que adiciona um botão de filtragem de acordo com a categoria passada na array 'livros'
function mostrarBtnCategorias() {
  const categorias = livros.reduce((value, item) => {
    // caso a array não possua uma categoria indicada, ela será incluida com o metodo push
    if(!value.includes(item.categoria)) {
      value.push(item.categoria)
    }
    return value
  }, ['todos']
  )
  const categoriaBtn = categorias.map(categoria => {
    // após filtrar as categorias, os botões são criados
    return `<button class="btn" data-id=${categoria}>${categoria}</button>`
  }).join('')
  containerBtn.innerHTML = categoriaBtn
  const btnFiltros = containerBtn.querySelectorAll('.btn')

  btnFiltros.forEach(btn => {
    btn.addEventListener('click', e => {
      // categoria recebe o id do botão clicado
      const categoria = e.currentTarget.dataset.id
      const livroCategoria = livros.filter(livroItem => {
        // se a categoria do botão for igual a categoria na array livros...
        if(livroItem.categoria === categoria) {
          // ...irá retornar uma nova array com os itens dessa categoria
          return livroItem
        }
      })
      // se a cateogoria do botão for igual a 'todos'...
      if(categoria === 'todos') {
        // ira executar a função que mostra todos os livros
        mostrarListaLivros(livros)
      } else {
        // caso seja diferente de 'todos', irá executar a função com a array de acordo com a categoria do botão clicado
        mostrarListaLivros(livroCategoria)
      }
    })
  })
}