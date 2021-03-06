import { PixelRatio } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const navIconSize = (__DEV__ === false && Platform.OS === 'android') ? PixelRatio.getPixelSizeForLayoutSize(40) : 40; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-home': [30],
	'ios-home-outline': [30],
	'ios-albums': [30],
	'ios-albums-outline': [30],
	'ios-clipboard': [30],
	'ios-clipboard-outline': [30],
	'ios-done-all': [30],
	'ios-done-all-outline': [30],
	'ios-people': [30],
	'ios-people-outline': [30], 
	'ios-happy': [30], 
	'ios-happy-outline': [30], 
	'ios-arrow-round-down': [navIconSize],
	'ios-close': [40]
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	Promise.all(
		Object.keys(icons).map(iconName =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
		Ionicons.getImageSource(
		iconName.replace(replaceSuffixPattern, ''),
		icons[iconName][0],
		icons[iconName][1]
		))
	).then(sources => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
	});
});

export {
	iconsMap,
	iconsLoaded
};