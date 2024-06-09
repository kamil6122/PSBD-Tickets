import {useQuery} from '@tanstack/react-query';
import { getAllTickets } from "../api/api";
import {TicketInfoInList} from "./TicketInfoInList";
import {Navbar} from "./Navbar";
import { parseISO, isBefore } from 'date-fns';

export const TicketList = () => {

    const { data: tickets } = useQuery({
        queryKey: ['tickets'],
        queryFn: getAllTickets
    });

    if (tickets?.length === 0) {
        return <div>Brak biletów</div>;
    }

    const currentDate = new Date();

    let archiveTickets = [];
    let currentTickets = [];

    if (tickets) {
        archiveTickets = tickets.filter(ticket => isBefore(parseISO(ticket.data_godzina_waznosci), currentDate));
        currentTickets = tickets.filter(ticket => !isBefore(parseISO(ticket.data_godzina_waznosci), currentDate));
    }
    else {
        return <div>Błąd przy pobieraniu biletów :(</div>
    }

    return (
        <div className="flex flex-col gap-2">
            <Navbar/>
            <div className="font-bold text-lg mx-auto">Twoje bilety: </div>
            {currentTickets.length > 0 && <div className="mx-auto">Aktualne: </div>}
            <div className="flex flex-col gap-4">{currentTickets.map((ticket) => (
                <TicketInfoInList
                    key={ticket.id}
                    ticket={ticket}
                />
            ))}</div>
            {archiveTickets.length > 0 && <div className="mx-auto">Archiwalne: </div>}
            <div className="flex flex-col gap-4">{archiveTickets.map((ticket) => (
                <TicketInfoInList
                    key={ticket.id}
                    ticket={ticket}
                />
            ))}</div>
        </div>
    );
}