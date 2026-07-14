import { describe, it, expect, beforeEach } from 'vitest';
import '../src/counter.js';

describe('my-counter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<my-counter></my-counter>';
  });

  it('renders initial count', async () => {
    const el = document.querySelector('my-counter');
    await new Promise(r => setTimeout(r, 0));
    const button = el.shadowRoot ? el.shadowRoot.querySelector('button') : el.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Count is: 0');
  });

  it('increments count on click', async () => {
    const el = document.querySelector('my-counter');
    await new Promise(r => setTimeout(r, 0));
    const button = el.shadowRoot ? el.shadowRoot.querySelector('button') : el.querySelector('button');

    button.click();
    await new Promise(r => setTimeout(r, 0));
    expect(button.textContent).toContain('Count is: 1');

    button.click();
    await new Promise(r => setTimeout(r, 0));
    expect(button.textContent).toContain('Count is: 2');
  });
});
