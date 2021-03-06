/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { onceDocumentLoaded } from './events';

declare let acquireVsCodeApi: any;
const vscode = acquireVsCodeApi();

function getSettings() {
	const element = document.getElementById('simple-browser-settings');
	if (element) {
		const data = element.getAttribute('data-settings');
		if (data) {
			return JSON.parse(data);
		}
	}

	throw new Error(`Could not load settings`);
}

const settings = getSettings();

const iframe = document.querySelector('iframe')!;
const header = document.querySelector('.header')!;
const input = header.querySelector<HTMLInputElement>('.url-input')!;
const forwardButton = header.querySelector<HTMLButtonElement>('.forward-button')!;
const backButton = header.querySelector<HTMLButtonElement>('.back-button')!;
const reloadButton = header.querySelector<HTMLButtonElement>('.reload-button')!;
const openExternalButton = header.querySelector<HTMLButtonElement>('.open-external-button')!;

window.addEventListener('message', e => {
	switch (e.data.type) {
		case 'focus':
			{
				iframe.focus();
				break;
			}
		case 'didChangeFocusLockIndicatorEnabled':
			{
				toggleFocusLockIndicatorEnabled(e.data.enabled);
				break;
			}
	}
});

onceDocumentLoaded(() => {
	setInterval(() => {
		const iframeFocused = document.activeElement?.tagName === 'IFRAME';
		document.body.classList.toggle('iframe-focused', iframeFocused);
	}, 50);

	iframe.addEventListener('load', () => {
		// Noop
	});

	input.addEventListener('change', e => {
		const url = (e.target as HTMLInputElement).value;
		navigateTo(url);
	});

	forwardButton.addEventListener('click', () => {
		history.forward();
	});

	backButton.addEventListener('click', () => {
		history.back();
	});

	openExternalButton.addEventListener('click', () => {
		vscode.postMessage({
			type: 'openExternal',
			url: input.value
		});
	});

	reloadButton.addEventListener('click', () => {
		// This does not seem to trigger what we want
		// history.go(0);

		// This incorrectly adds entries to the history but does reload
		iframe.src = input.value;
	});

	navigateTo(settings.url);
	toggleFocusLockIndicatorEnabled(settings.focusLockIndicatorEnabled);

	function navigateTo(url: string): void {
		iframe.src = url;
	}
});

function toggleFocusLockIndicatorEnabled(enabled: boolean) {
	document.body.classList.toggle('enable-focus-lock-indicator', enabled);
}

