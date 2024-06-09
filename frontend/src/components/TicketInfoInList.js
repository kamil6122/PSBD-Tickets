import {format, isBefore, parseISO} from "date-fns";
import {useNavigate} from "react-router-dom";

export const TicketInfoInList = ({ ticket }) => {
    const navigate = useNavigate();

    const skrotColors = {
        'PKP': 'bg-blue-600',
        'KM': 'bg-yellow-600',
        'PR': 'bg-red-600',
        'IC': 'bg-orange-600',
    };

    const bgColorClass = skrotColors[ticket.postoj_początkowy.kurs.przewoznik.skrot] || 'bg-gray-600'; // Default to gray if skrot value not found

    const currentDate = new Date();
    const current = !isBefore(parseISO(ticket.data_godzina_waznosci), currentDate)

    const bgColor = current ? 'bg-yellow-300' : 'bg-gray-400'

    function goToTicketDetails() {
        navigate(`/ticket/${ticket.id}`);
    }

    return (
        <div className={`mx-auto ${bgColor} w-80 flex flex-col`}>
            <div className="mt-1 ml-3">{ticket.postoj_początkowy.stacja.nazwa} - {ticket.postoj_koncowy.stacja.nazwa}</div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col my-2 mx-3 gap-2">
                    <div>{format(ticket.postoj_początkowy.czas_odjazdu, "dd.MM.yyyy")}</div>
                    <div className="">{format(ticket.postoj_początkowy.czas_odjazdu, "HH:mm")} - {format(ticket.postoj_koncowy.czas_przyjazdu, "HH:mm")}</div>
                </div>
                <div className={`w-12 mx-auto h-fit my-auto flex justify-center ${bgColorClass}`}>{ticket.postoj_początkowy.kurs.przewoznik.skrot}</div>
                <button onClick={goToTicketDetails} className="bg-gray-800 text-white py-0.5 px-2 h-fit my-auto mr-3">&gt;</button>
            </div>
        </div>
    );
}