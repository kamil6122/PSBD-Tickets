import {CircleHelp, Menu, Route, Ticket, TramFront} from "lucide-react";
import {useQuery, QueryClient, QueryClientProvider, useQueryClient} from '@tanstack/react-query';
import { getAllTickets } from "../api/api";
import axios from "axios";
import {useEffect, useState} from "react";
export const TicketList = () => {

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/api/bilety/'
    //             //     , {
    //             //         mode: "cors",
    //             //     headers: {
    //             //         'Content-Type': 'application/json'
    //             //     },
    //             //     credentials: "same-origin"
    //             // }
    //             );
    //             setData(response.data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);
    //
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    //
    // console.log(data);

    // const queryClient = useQueryClient();
    // const queryClient = new QueryClient();

    const { data: tickets } = useQuery({
        queryKey: ['tickets'],
        queryFn: getAllTickets
    });

    // if (tickets?.length === 0) {
    //     return <div>Brak uczestników</div>;
    // }

    console.log(tickets);

    return (
        <div className="flex flex-col gap-2">
            {/*{tickets?.map((participant) => (*/}
            {/*    <Ticket*/}
            {/*        key={ticket.id}*/}
            {/*        ticket={ticket}*/}
            {/*    />*/}
            {/*))}*/}
            f
        </div>
    );
}