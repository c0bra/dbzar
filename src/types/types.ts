import {FakeOptions} from '../anonymizers/fake/fake-options';

export type ProviderType = 'mask' | 'fake' | 'const';

export interface BaseProvider {
	type: ProviderType;
}

export interface FakeProvider extends BaseProvider {
	type: 'fake';
	options: FakeOptions;
}

export interface MaskProvider extends BaseProvider {
	type: 'mask';
	options: FakeOptions;
}

export type Provider = FakeProvider | MaskProvider;
