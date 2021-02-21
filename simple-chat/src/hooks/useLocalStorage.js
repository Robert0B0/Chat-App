import { useEffect, useState } from "react";

const PREFIX = "chatapp-";

export default function useLocalStorage(key, inintialValue) {
	const prefixedKey = PREFIX + key;
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(prefixedKey);
		if (jsonValue != null) return JSON.parse(jsonValue);
		if (typeof inintialValue === "function") {
			return inintialValue();
		} else {
			return inintialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value]);

	return [value, setValue];
}
