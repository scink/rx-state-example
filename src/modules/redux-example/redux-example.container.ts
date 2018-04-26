import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {TRootState} from '../../reducers/root.reducer';
import {reduxExampleOnRequestAction} from '../../actions/redux-example.actions';
import {ReduxExample} from './redux-example.pure';

const mapStateToProps = (state: TRootState) => ({data: state.reduxExample});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => {
		dispatch(reduxExampleOnRequestAction());
	},
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export const ReduxExampleContainer = enhance(ReduxExample);
