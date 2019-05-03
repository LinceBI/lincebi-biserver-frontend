import fetch from 'unfetch';

import getContextPath from './getContextPath';

export default async (key, value = '') => {
	const contextPath = await getContextPath();
	const endpoint = `${contextPath}plugin/global-user-settings/api/${key}`;
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'text/plain' },
		body: value
	});

	if (response.status === 200) {
		const value = await response.text();
		return value === 'null' ? null : value;
	}

	return null;
};
