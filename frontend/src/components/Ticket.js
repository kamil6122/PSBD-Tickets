import { format } from "date-fns";

export const Ticket = ({ ticket }) => {

    const tickettest = {
        startStation: 'Koluszki',
        endStation: 'Milejow',
        startDate: new Date(),
        endDate: new Date(),
        carrier: 'PR',
        // types: [{'normal': 1}],
        carriage: 12,
        place: 88,
        dueDate: new Date(),

    }

    return (
        <div className="bg-gray-400 w-80 flex flex-col">
            <div className="mt-1">{tickettest.startStation} - {tickettest.endStation}</div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col my-2 mx-3 gap-2">
                    <div>{format(tickettest.startDate, "dd.MM.yyyy")}</div>
                    <div className="">{format(tickettest.startDate, "HH:mm")} - {format(tickettest.endDate, "HH:mm")}</div>
                </div>
                <div className="bg-red-600 w-12 h-fit my-auto">{tickettest.carrier}</div>
                <button>&gt;</button>
            </div>
        </div>
    );
}