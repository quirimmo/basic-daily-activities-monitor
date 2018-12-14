import SQLiteProxy from '../services/sqlite-proxy.service';
import {
	INSERT_ITEM,
	SELECT_ITEMS,
	DELETE_ITEM,
	UPDATE_ITEM,
	SELECT_ITEM
} from '../constants/queries.constants';

export class ItemsDAO {
	static sqliteProxy = SQLiteProxy.getInstance();

	static async addItem(item) {
		return new Promise(async (resolve, reject) => {
			try {
				await ItemsDAO.sqliteProxy.executeTransaction(
					getTransition(resolve, reject)
				);
			} catch (error) {
				reject(
					new Error(
						`Error executing the transaction for adding a new item: ${error}`
					)
				);
			}
		});

		function getTransition(resolve, reject) {
			return async tx => {
				try {
					const result = await ItemsDAO.sqliteProxy.executeQuery(
						tx,
						INSERT_ITEM,
						[
							`${item.date}`,
							`${item.breakfast.start}`,
							`${item.breakfast.end}`,
							`${item.lunch.start}`,
							`${item.lunch.end}`,
							`${item.dinner.start}`,
							`${item.dinner.end}`,
							`${item.sleep.start}`,
							`${item.sleep.end}`
						]
					);
					resolve(result.insertId.toString());
				} catch (err) {
					reject(`Error inserting the row ${err}`);
				}
			};
		}
	}

	static async deleteItem(item) {
		return new Promise(async (resolve, reject) => {
			try {
				await ItemsDAO.sqliteProxy.executeTransaction(
					getTransition(resolve, reject)
				);
			} catch (error) {
				reject(
					new Error(
						`Error executing the transaction for deleting an item: ${error}`
					)
				);
			}
		});

		function getTransition(resolve, reject) {
			return async tx => {
				try {
					const result = await ItemsDAO.sqliteProxy.executeQuery(
						tx,
						DELETE_ITEM,
						[`${item.key}`]
					);
					resolve(result);
				} catch (err) {
					reject(`Error removing the row ${err}`);
				}
			};
		}
	}

	static async fetchItems() {
		return new Promise((resolve, reject) => {
			try {
				ItemsDAO.sqliteProxy.executeTransaction(getTransition(resolve, reject));
			} catch (error) {
				reject(
					new Error(
						`Error executing the transaction for fetching items: ${error}`
					)
				);
			}
		});

		function getTransition(resolve, reject) {
			return async tx => {
				try {
					const result = await ItemsDAO.sqliteProxy.executeQuery(
						tx,
						SELECT_ITEMS
					);
					resolve(
						result.rows._array.map(el => {
							el.key = el.key.toString();
							return el;
						})
					);
				} catch (err) {
					reject(`Error selecting the items ${err}`);
				}
			};
		}
	}

	static async fetchItemByDate(itemDate) {
		console.log('fetching item by date:', itemDate);
		return new Promise((resolve, reject) => {
			try {
				ItemsDAO.sqliteProxy.executeTransaction(getTransition(resolve, reject));
			} catch (error) {
				reject(
					new Error(
						`Error executing the transaction for fetching the item with date ${itemDate}: ${error}`
					)
				);
			}
		});

		function getTransition(resolve, reject) {
			return async tx => {
				try {
					const result = await ItemsDAO.sqliteProxy.executeQuery(
						tx,
						SELECT_ITEM,
						[`${itemDate}`]
					);
					resolve(
						result.rows._array.map(el => {
							el.key = el.key.toString();
							return el;
						})
					);
				} catch (err) {
					reject(`Error selecting the item with date ${itemDate}: ${err}`);
				}
			};
		}
	}

	static async updateItem(item) {
		return new Promise(async (resolve, reject) => {
			try {
				ItemsDAO.sqliteProxy.executeTransaction(getTransition(resolve, reject));
			} catch (error) {
				reject(
					new Error(
						`Error executing the transaction for updating an item: ${error}`
					)
				);
			}
		});

		function getTransition(resolve, reject) {
			return async tx => {
				try {
					await ItemsDAO.sqliteProxy.executeQuery(tx, UPDATE_ITEM, [
						`${item.date}`,
						`${item.breakfast.start}`,
						`${item.breakfast.end}`,
						`${item.lunch.start}`,
						`${item.lunch.end}`,
						`${item.dinner.start}`,
						`${item.dinner.end}`,
						`${item.sleep.start}`,
						`${item.sleep.end}`,
						+item.key
					]);
					resolve(item.id);
				} catch (err) {
					reject(`Error updating the row ${err}`);
				}
			};
		}
	}
}

export default ItemsDAO;
