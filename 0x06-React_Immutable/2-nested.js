import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
	const mapped = fromJS(object);
	return mapped.getIn(array, undefined);
};

export default accessImmutableObject;
