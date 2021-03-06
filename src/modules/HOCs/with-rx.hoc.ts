import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ComponentType, Component, createElement, ComponentClass} from 'react';
import {animationFrame} from 'rxjs/scheduler/animationFrame';
import {Subscription} from 'rxjs/Subscription';
import hoistNonReactStatics from 'hoist-non-react-statics';
import 'rxjs/add/operator/subscribeOn';

export type ComponentDecorator<P> = (Target: ComponentType<P>) => ComponentClass<P>;
export type WithRXSelector<P> = (props$: Observable<Readonly<P>>) => Observable<Partial<Readonly<P>>>;

export function withRX<P extends object = never>(select: WithRXSelector<P>): ComponentDecorator<P> {
	return Target => {
		class WithRX extends Component<P> {
			static displayName = `WithRX(${Target.displayName || Target.name})`;

			private props$ = new BehaviorSubject(this.props);
			private results$ = select(this.props$.asObservable());
			private resultsSubscription: Subscription;

			constructor(props: P) {
				super(props);

				this.resultsSubscription = this.results$
					.subscribeOn(animationFrame)
					.do(state => this.setState(state))
					.subscribe();
			}

			componentWillReceiveProps(props: P) {
				this.props$.next(props);
			}

			componentWillUnmount() {
				this.resultsSubscription.unsubscribe();
			}

			render() {
				return createElement(Target, Object.assign({}, this.props, this.state));
			}
		}

		hoistNonReactStatics(WithRX, Target);

		return WithRX;
	};
}
