import {db} from '$lib/server/db';
import { solicitacao } from '$lib/server/db/schema.js';

export async function load() {
	const result  = await db.select().from(solicitacao);

	return {
		result
	};
}