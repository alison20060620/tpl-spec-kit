const test = require('node:test');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const scriptPath = path.join(__dirname, '..', 'script.js');
const script = fs.readFileSync(scriptPath, 'utf8');

function setupApp() {
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  dom.window.eval(script);

  const { document } = dom.window;
  const form = document.querySelector('#task-form');
  const input = document.querySelector('#task-input');
  const taskList = document.querySelector('#task-list');

  return { window: dom.window, document, form, input, taskList };
}

function submitTask(form, input) {
  input.value = input.value.trim();
  form.dispatchEvent(new form.ownerDocument.defaultView.Event('submit', {
    bubbles: true,
    cancelable: true,
  }));
}

test('app renders the add-task form and empty list state', () => {
  const { document } = setupApp();

  assert.ok(document.querySelector('#task-form'));
  assert.ok(document.querySelector('#task-input'));
  assert.ok(document.querySelector('#add-task-btn'));
  assert.ok(document.querySelector('#task-list'));
});

test('valid tasks are added immediately without refresh', () => {
  const { form, input, taskList } = setupApp();

  input.value = 'Buy groceries';
  submitTask(form, input);

  const items = Array.from(taskList.querySelectorAll('li'));
  assert.equal(items.length, 1);
  assert.equal(items[0].textContent.trim(), 'Buy groceries');
});

test('empty and whitespace-only tasks are rejected', () => {
  const { form, input, taskList } = setupApp();

  input.value = '   ';
  submitTask(form, input);

  assert.equal(taskList.querySelectorAll('li').length, 0);

  input.value = '';
  submitTask(form, input);

  assert.equal(taskList.querySelectorAll('li').length, 0);
});

