import { config } from '@vue/test-utils';
import { findByTestIdPlugin } from './findByTestId.js';
import { findByTestCodePlugin } from './findByTestCode.js';
import { openComboboxPlugin, selectComboboxItemPlugin } from './FCombobox/FCombobox.js';
import { removeAttributesPlugin } from './removeAttributes/removeAttributes.js';
import { setInnerHTMLPlugin } from './setInnerHTML/setInnerHTML.js';
import { selectListboxItemPlugin } from './selectListboxItem/selectListboxItem.js';
import { checkRadioOptionPlugin } from './checkRadioOption/checkRadioOption.js';
import { submitFormPlugin } from './formSubmit/formSubmit.js';
import { hideWindowPlugin, showWindowPlugin } from './FWindow/FWindow.js';
import { toggleCheckboxPlugin } from './toggleCheckbox/toggleCheckbox.js';
import { setFormElementPlugin } from './setFormElement/setFormElement.js';
import { setFormElementsPlugin } from './setFormElements/setFormElements.js';

const { VueWrapper } = config.plugins;

VueWrapper.install(findByTestIdPlugin);
VueWrapper.install(findByTestCodePlugin);
VueWrapper.install(openComboboxPlugin);
VueWrapper.install(selectComboboxItemPlugin);
VueWrapper.install(removeAttributesPlugin);
VueWrapper.install(setInnerHTMLPlugin);
VueWrapper.install(selectListboxItemPlugin);
VueWrapper.install(checkRadioOptionPlugin);
VueWrapper.install(submitFormPlugin);
VueWrapper.install(showWindowPlugin);
VueWrapper.install(hideWindowPlugin);
VueWrapper.install(toggleCheckboxPlugin);
VueWrapper.install(setFormElementPlugin);
VueWrapper.install(setFormElementsPlugin);
