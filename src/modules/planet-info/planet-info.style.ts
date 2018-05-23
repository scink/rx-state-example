import {css} from 'emotion';

export namespace classname {
	export const block = css`
		position: relative;
		margin-top: 50px;
		margin-left: 50px;
		width: 300px;
		height: 300px;
		font-size: 0;
	`;

	export const planet = css`
		width: 100%;
		height: 100%;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #000;
		background: linear-gradient(
			135deg,
			#bd9e92 0%,
			#bfa7a3 20%,
			#9b818b 33%,
			#907c76 49%,
			#907c76 63%,
			#8d7581 83%,
			#8d7581 83%,
			#a69088 100%
		);
	`;

	export const size = css`
		border: 2px solid #000;
		position: absolute;
		width: 100%;
		height: 210px;
		top: 50%;
		left: -1px;
		border-top: none;

		&:before,
		&:after {
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			position: absolute;
			bottom: -1px;
			content: '';
			transform: translateY(50%);
		}

		&:before {
			left: -2px;
			border-right: 20px solid #000;
		}

		&:after {
			right: -2px;
			border-left: 20px solid #000;
		}
	`;

	export const diameter = css`
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 40px;
		background-color: #fff;
		padding: 5px;
		display: flex;
		align-items: center;
		line-height: 1.2;
	`;

	export const name = css`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -45%);
		font-size: 60px;
	`;

	export const icon = css`
		display: inline-block;
		margin-right: 10px;
		height: 26px;
		width: 26px;
		border-radius: 50%;
		border: 2px solid #000;
		position: relative;

		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			width: 40px;
			border-bottom: 2px solid #000;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	`;
}
