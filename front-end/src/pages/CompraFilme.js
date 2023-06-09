import { useState } from "react";
import Accordion from "../components/compra/Accordion";
import CadeirasCine from "../components/compra/cadeirasCine";
import InfoFilme from "../components/compra/infoFilmes";
import "../style/CompraFilme.css";

export default function CompraFilme() {

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

    const handleSeatClick = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                return prevSelectedSeats.filter((seat) => seat !== seatNumber);
            } else {
                return [...prevSelectedSeats, seatNumber];
            }
        });

        // Calcular o valor total
        const total = selectedSeats.length * 25;
        setValorTotal(total);
    };

    return (
        <div className="containerCompra">
            
            <div className="cadeirasEaccordion">
            <InfoFilme />
                <CadeirasCine handleSeatClick={handleSeatClick} selectedSeats={selectedSeats} />
                
            </div>
            <Accordion selectedSeats={selectedSeats} />
        </div>
    )
}