/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const { pattern } = params;

	if (pattern) {
		return {
			body: { words: ['a', 'list', 'of', 'words', 'from', pattern] }
		};
	}

	return {
		status: 404
	};
}
