import { defineTest } from 'jscodeshift/src/testUtils';

jest.autoMockOff()

defineTest(__dirname, 'rename-variables', {}, 'rename-variables', { parser: 'ts' });

