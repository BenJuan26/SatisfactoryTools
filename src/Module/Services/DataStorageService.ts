import { IProductionData } from '@src/Tools/Production/IProductionData';
import axios from 'axios';

export class DataStorageService
{
	public constructor() {}

	public saveData(key: string, data: any)
	{
		axios({
			method: 'put',
			url: `/api/store/${key}`,
			data,
		})
	}

	public loadData(key: string, def: IProductionData[] | null): Promise<IProductionData[] | null>
	{
		return new Promise((resolve) => {
			axios({
				method: 'get',
				url: `/api/store/${key}`
			}).then((response) => {
				console.log(response);
				if (response.data) {
					resolve(response.data);
				} else {
					resolve(def);
				}
			}).catch(() => {
				resolve(def);
			});
		});
	}

}
