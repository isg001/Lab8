import { pushToHistory } from "../scripts/router";

/**
 * @jest-environment jsdom
 */

 describe('pushToHistory testing', () => {
    test('settings', () => {
      expect(pushToHistory('settings').length).toBe(2);
    });
  
    test('entry', () => {
      expect(pushToHistory('entry').length).toBe(3);
    });

    test('default', () => {
        expect(pushToHistory('default').length).toBe(4);
    });
  });

