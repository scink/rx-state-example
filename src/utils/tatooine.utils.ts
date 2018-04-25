import {TTatooineResident} from '../modules';
import {TCharacter} from '../models';

export namespace TatooineUtils {
	export const toUiResident = (resident: TCharacter): TTatooineResident => ({
		name: resident.name,
		height: resident.height,
		hairColor: resident.hair_color,
		skinColor: resident.skin_color,
		eyeColor: resident.eye_color,
		birthYear: resident.birth_year,
		id: resident.id,
	});
}
