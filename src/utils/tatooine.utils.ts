import {TResident} from '../services';
import {TTatooineResident} from '../modules';

export namespace TatooineUtils {
	export const toUiResident = (resident: TResident): TTatooineResident => ({
		name: resident.name,
		height: resident.height,
		hairColor: resident.hair_color,
		skinColor: resident.skin_color,
		eyeColor: resident.eye_color,
		birthYear: resident.birth_year,
		id: resident.id,
	});
}
