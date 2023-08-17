class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50
        };
    }
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0;

        for (const item of itens) {
            if (this.cardapio[item]) {
                valorTotal += this.cardapio[item];
            } else {
                console.log(`Item '${item}' não encontrado no cardápio.`);
            }
        }

        switch (metodoDePagamento) {
            case "dinheiro":
                valorTotal *= 0.95; 
                break;
            case "credito":
                valorTotal *= 1.03; 
                break;
            case "debito":
                break;
            default:
                console.log(`Método de pagamento '${metodoDePagamento}' não reconhecido.`);
                return null;
        }

        return valorTotal;
    }
}
export { CaixaDaLanchonete };
