type Ordem = {
  cliente: number;
  acao: number;
  data_hora: number;
  qtde: number;
  valor_total: number;
  executada: boolean;
}

export default Ordem;