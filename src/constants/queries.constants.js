export const CREATE_TABLES = `
	create table if not exists items
	(
		id integer primary key autoincrement,
		date text,
		breakfast_start_date text, breakfast_end_date text,
		lunch_start_date text, lunch_end_date text,
		dinner_start_date text, dinner_end_date text,
		sleep_start_date text, sleep_end_date text
	);
`;

export const INSERT_ITEM = `
	insert into items
	(
		date,
		breakfast_start_date, breakfast_end_date,
		lunch_start_date, lunch_end_date,
		dinner_start_date, dinner_end_date,
		sleep_start_date, sleep_end_date
	)
	values
	(?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

export const SELECT_ITEMS = `
	select rowid as key, *
	from items;
`;

export const SELECT_ITEM = `
	select rowid as key, *
	from items
	where id = ?;
`;

export const DELETE_ITEM = `
	delete
	from items
	where id = ?;
`;

export const UPDATE_ITEM = `
	update items
	set
		date = ?,
		breakfast_start_date = ?, breakfast_end_date = ?,
		lunch_start_date = ?, lunch_end_date = ?,
		dinner_start_date = ?, dinner_end_date = ?,
		sleep_start_date = ?, sleep_end_date = ?,
	where id = ?;
`;
