import {connect} from 'react-redux';
import {TRootState} from '../../reducers';
import {ReduxExample} from './redux-example.pure';
import {Dispatch} from 'redux';
import {reduxExampleOnRequestAction} from '../../actions';

const mapStateToProps = (state: TRootState) => ({data: state.reduxExample});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => {
		dispatch(reduxExampleOnRequestAction());
	},
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export const ReduxExampleContainer = enhance(ReduxExample);
