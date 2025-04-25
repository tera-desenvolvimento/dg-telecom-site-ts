import '../style/planCard.css';

export interface IPlanCardData {
    potency: number,
    price: number,
    observation?: string
}

function PlanCard(props: IPlanCardData) {
    if (props.observation) {
        return (
            <div className="plan-card">
                <div className="plan-potency">
                    <b>{props.potency}</b>
                    <span>MEGA</span>
                </div>
                <small>{props.observation}</small>
                <span>por apenas</span>
                <div className="plan-price">
                    <b>R$</b>
                    <b className="price">{props.price}</b>
                    <b>,99</b>
                </div>

                <a 
                href="https://api.whatsapp.com/send?phone=%205579998981717&text=Olá%2C+gostaria+de+saber+mais+sobre+os+serviços+de+Canais+e+Internet+oferecidos+no+site%21"
                target="_blank"
                className="subscribe-button">
                    clique aqui e assine
                </a>
            </div>
        )
    } else {
        return (
            <div className="plan-card">
                <div className="plan-potency">
                    <b>{props.potency}</b>
                    <span>MEGA</span>
                </div>
                <span>por apenas</span>
                <div className="plan-price">
                    <b>R$</b>
                    <b className="price">{props.price}</b>
                    <b>,99</b>
                </div>

                <a 
                href="https://api.whatsapp.com/send?phone=%205579998981717&text=Olá%2C+gostaria+de+saber+mais+sobre+os+serviços+de+Canais+e+Internet+oferecidos+no+site%21"
                target="_blank"
                className="subscribe-button">
                    clique aqui e assine
                </a>
            </div>
        )
    }
}

export default PlanCard;