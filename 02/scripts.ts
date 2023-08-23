type Item = {
	nome: string;
	descricao: string;
	valor: number;
};

type Cartao = {
	numero: number;
	validade: string;
	nome: string;
	cvv: number;
};

type Carrinho = {
	item: Item;
	qtd: number;
	desconto: number;
	frete: number;
	tipoTransacao: 'credito' | 'Debito';
	cartao: Cartao;
};

type Endereco = {
	cep: string;
	rua: string;
	bairro: string;
	cidade: string;
	estado: string;
};

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
	endereco: Endereco;
	tipoTransacao: Lowercase<'credito' | 'Debito'>;
};

// type NovoCarrinho = {
// 	item: Item;
// 	qtd: number;
// 	desconto: number;
// 	frete: number;
// 	tipoTransacao: Lowercase<'credito' | 'Debito'>;
// 	cartao: Cartao;
// };

const venda: NovoCarrinho = {
	item: {
		nome: 'Nome',
		descricao: 'Descricao',
		valor: 123,
	},
	qtd: 3,
	desconto: 10,
	frete: 1000,
	tipoTransacao: 'credito',
	cartao: {
		numero: 123,
		validade: 'string',
		cvv: 779,
		nome: 'nome',
	},
	endereco: {
		cep: '47075220',
		bairro: 'brotas',
		cidade: 'Salvador',
		estado: 'BA',
		rua: 'Centro',
	},
};
