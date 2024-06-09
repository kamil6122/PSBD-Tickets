import {format, isBefore, parseISO} from "date-fns";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getSingleTicket} from "../api/api";
import {Navbar} from "./Navbar";
import QRCode from "react-qr-code";


export const TicketDetails = () => {

    const { id } = useParams(); // Get the 'id' parameter from the URL

    const { data: ticket } = useQuery({
        queryKey: ['tickets', id],
        queryFn: async () => getSingleTicket(id)
    });

    // if (tickets?.length === 0) {
    //     return <div>Brak biletów</div>;
    // }

    if(!ticket) { return <div>nic</div>;}

    // console.log(ticket);

    const skrotColors = {
        'PKP': 'bg-blue-600',
        'KM': 'bg-green-600',
        'PR': 'bg-red-600',
        'IC': 'bg-orange-600',
        'LKA': 'bg-yellow-600',
    };

    let bgColorClass = 'bg-gray-400';

    console.log("ticket", ticket);

    if (ticket) {
        bgColorClass = skrotColors[ticket.postoj_początkowy.kurs.przewoznik.skrot] || 'bg-gray-400';
    }

    const currentDate = new Date();

    return (<>
        <Navbar/>
        {/*{ticket && <div className="mx-auto flex flex-col">*/}
        {/*    <div className="mt-1">{ticket.postoj_początkowy.stacja.miasto} - {ticket.postoj_koncowy.stacja.miasto}</div>*/}
        {/*    <div className="flex flex-row justify-between">*/}
        {/*        <div className="flex flex-col my-2 mx-3 gap-2">*/}
        {/*            <div>{format(ticket.postoj_początkowy.czas_odjazdu, "dd.MM.yyyy")}</div>*/}
        {/*            <div className="">{format(ticket.postoj_początkowy.czas_odjazdu, "HH:mm")} - {format(ticket.postoj_koncowy.czas_przyjazdu, "HH:mm")}</div>*/}
        {/*        </div>*/}
        {/*        <div className={`w-12 h-fit my-auto ${bgColorClass}`}>{ticket.postoj_początkowy.kurs.przewoznik.skrot}</div>*/}
        {/*        <button className="bg-gray-800 text-white py-1 px-2 h-fit my-auto mr-2">&gt;</button>*/}
        {/*    </div>*/}
        {/*</div>}*/}
        { ticket && <div className="mx-auto mt-5 w-3/4 md:w-1/2 lg:w-1/3 flex flex-col gap-2">
            {/*pierwszy wiersz*/}
            <div className="flex flex-row justify-evenly">
                <div className={`w-12 h-fit my-auto flex justify-center items-center ${bgColorClass}`}>
                    {ticket.postoj_początkowy.kurs.przewoznik.skrot}
                </div>
                <div>{ticket.postoj_początkowy.kurs.przewoznik.nazwa}</div>
                <div>{format(ticket.postoj_początkowy.czas_odjazdu, "dd.MM.yyyy")}</div>
            </div>
            {/*stacje*/}
            <div className="flex flex-row justify-between">
                <div>{ticket.postoj_początkowy.stacja.nazwa}</div>
                <div>{ticket.postoj_koncowy.stacja.nazwa}</div>
            </div>
            {/*godziny*/}
            <div className="flex flex-row justify-between">
                <div>{format(ticket.postoj_początkowy.czas_odjazdu, "HH:mm")}</div>
                <div>{format(ticket.postoj_koncowy.czas_odjazdu, "HH:mm")}</div>
            </div>
            <QRCode className="h-40 w-40 mx-auto" value="hey" />
            {/*typ i cena*/}
            <div className="flex flex-row justify-between">
                <div>Typ biletu: {ticket.znizka}</div>
                <div>Cena: {ticket.cena} zł</div>
            </div>
            {isBefore(parseISO(ticket.data_godzina_waznosci), currentDate) &&
                <div>Ważny do: <span className="text-red-500">{format(ticket.data_godzina_waznosci, "dd.MM.yyyy HH:mm")}</span></div>
            }
            {!isBefore(parseISO(ticket.data_godzina_waznosci), currentDate) &&
                <div>Ważny do: <span className="text-green-500">{format(ticket.data_godzina_waznosci, "dd.MM.yyyy HH:mm")}</span></div>
            }
        </div>

        }
        </>
    );
}