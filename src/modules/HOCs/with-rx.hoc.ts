import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ComponentType, Component, createElement, ComponentClass} from 'react';
import {animationFrame} from 'rxjs/scheduler/animationFrame';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/subscribeOn';
import hoistNonReactStatics from 'hoist-non-react-statics';

export type ComponentDecorator<P> = (Target: ComponentType<P>) => ComponentClass<P>;
export type WithRXSelector<P, S = never> = (props$: Observable<Readonly<P>>) => Observable<Partial<Readonly<P>>>;

export function withRX<P extends object = never, S = never>(select: WithRXSelector<P, S>): ComponentDecorator<P> {
	return Target => {
		class WithRX extends Component<P> {
			static displayName = `WithRX(${Target.displayName || Target.name})`;

			private props$ = new BehaviorSubject(this.props);
			private results$ = select(this.props$.asObservable());
			private resultsSubscription?: Subscription;

			componentWillMount() {
				this.resultsSubscription = this.results$.subscribeOn(animationFrame).subscribe(state => this.setState(state));
			}

			componentWillReceiveProps(props: P) {
				this.props$.next(props);
			}

			componentWillUnmount() {
				if (this.resultsSubscription) {
					this.resultsSubscription.unsubscribe();
				}
			}

			render() {
				return createElement(Target, Object.assign({}, this.props, this.state));
			}
		}

		hoistNonReactStatics(WithRX, Target);

		return WithRX;
	};
}
