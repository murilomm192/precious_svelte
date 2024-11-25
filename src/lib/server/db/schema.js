
import { pgTable, serial, text, integer, timestamp, varchar } from 'drizzle-orm/pg-core';

export const solicitacao = pgTable('solicitacao', {
	id: serial('id').primaryKey().notNull(),
	uf: varchar('uf'),
	rede: varchar('rede'),
	eg: varchar('eg'),
	estrutura: varchar('estrutura'),
	created_at	: timestamp('created_at').defaultNow(),
	updated_at	: timestamp('updated_at').defaultNow()
});