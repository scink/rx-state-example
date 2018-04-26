import {TCharacter} from '../models/star-wars-api.models';
import {TTatooineResident} from '../modules/tatooine/tatooine.component';

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
