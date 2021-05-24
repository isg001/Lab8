/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from "../scripts/router";

 describe('pushToHistory testing', () => {

    test('settings', () => {
      expect(pushToHistory('settings', '2').length).toBe(2);
    })
  
    test('entry', () => {
      expect(pushToHistory('entry', '2').length).toBe(3);
    })

    test('default', () => {
        expect(pushToHistory('', '2').length).toBe(4);
    })
  });

