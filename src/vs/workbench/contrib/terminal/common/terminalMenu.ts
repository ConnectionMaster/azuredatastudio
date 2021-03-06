/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vs/nls';
import { MenuRegistry, MenuId } from 'vs/platform/actions/common/actions';
import { KEYBINDING_CONTEXT_TERMINAL_PROCESS_SUPPORTED, TERMINAL_COMMAND_ID } from 'vs/workbench/contrib/terminal/common/terminal';
import { ContextKeyExpr } from 'vs/platform/contextkey/common/contextkey';

export function setupTerminalMenu() {

	// Manage
	const createGroup = '1_create';
	MenuRegistry.appendMenuItem(MenuId.MenubarTerminalMenu, {
		group: createGroup,
		command: {
			id: TERMINAL_COMMAND_ID.NEW,
			title: nls.localize({ key: 'miNewTerminal', comment: ['&& denotes a mnemonic'] }, "&&New Terminal")
		},
		order: 1
	});
	MenuRegistry.appendMenuItem(MenuId.MenubarTerminalMenu, {
		group: createGroup,
		command: {
			id: TERMINAL_COMMAND_ID.SPLIT,
			title: nls.localize({ key: 'miSplitTerminal', comment: ['&& denotes a mnemonic'] }, "&&Split Terminal"),
			precondition: ContextKeyExpr.has('terminalIsOpen')
		},
		order: 2,
		when: KEYBINDING_CONTEXT_TERMINAL_PROCESS_SUPPORTED
	});

	// Run
	const runGroup = '2_run';
	MenuRegistry.appendMenuItem(MenuId.MenubarTerminalMenu, {
		group: runGroup,
		command: {
			id: TERMINAL_COMMAND_ID.RUN_ACTIVE_FILE,
			title: nls.localize({ key: 'miRunActiveFile', comment: ['&& denotes a mnemonic'] }, "Run &&Active File")
		},
		order: 3,
		when: KEYBINDING_CONTEXT_TERMINAL_PROCESS_SUPPORTED
	});
	MenuRegistry.appendMenuItem(MenuId.MenubarTerminalMenu, {
		group: runGroup,
		command: {
			id: TERMINAL_COMMAND_ID.RUN_SELECTED_TEXT,
			title: nls.localize({ key: 'miRunSelectedText', comment: ['&& denotes a mnemonic'] }, "Run &&Selected Text")
		},
		order: 4,
		when: KEYBINDING_CONTEXT_TERMINAL_PROCESS_SUPPORTED
	});
}