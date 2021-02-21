import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export function SocketProvider({ children, id }) {
	const [socket, setScoket] = useState();

	useEffect(() => {
		const newSocket = io("http://localhost:5000", { querry: { id } });
		setScoket(newSocket);

		return () => newSocket.close();
	}, [id]);

	return (
		<div>
			<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
		</div>
	);
}
