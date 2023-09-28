import React, { useState, useEffect, useCallback } from "react";

const defaultOptions = {
	method: "GET",
	headers: {},
	id: null,
	token: null,
};
const useFetch = (url, options = {}) => {
	const { method, headers, id, token } = {
		...defaultOptions,
		...options,
	};
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = useCallback(async () => {
		try {
			const generateUrl = id ? `${url}/${id}` : url;
			const requestOptions = {
				method,
				headers: { ...headers },
			};
			if (token) {
				requestOptions.headers["Authorization"] = `Bearer ${token}`;
			}
			setLoading(true);
			const response = await fetch(generateUrl, requestOptions);
			const data = await response.json();
			setData(data);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	});

	useEffect(() => {
		getData();
	}, [getData]);

	return { data, error, loading };
};

export default useFetch;
