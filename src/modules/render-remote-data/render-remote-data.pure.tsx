import * as React from 'react';
import {RemoteData} from '@devexperts/remote-data-ts';
import {ComponentClass, ReactElement} from 'react';
import {constant} from 'fp-ts/lib/function';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';

const constNull = constant(null);

export type TRenderRemoteDataProps<T> = {
	data: RemoteData<Error, T>;
	success: (data: T) => ReactElement<{}> | null;
	nodata?: (data: T) => boolean;
};

export type TRenderRemoteData = <A>(props: TRenderRemoteDataProps<A>) => ReactElement<{}> | null;

export const renderRemoteData: TRenderRemoteData = ({data, success}) =>
	data.foldL(
		constNull,
		() => <Spin size={'large'} />,
		error => {
			console.warn(error);
			return <Icon type={'warning'} />;
		},
		success,
	);
