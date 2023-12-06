import { renderHook, act } from '@testing-library/react-hooks';
import { useSelect } from './use-select';

it('Should  start as null', () => {
  const { result } = renderHook(() => useSelect());
  expect(result.current.selectedId).toBe(null);
  act(() => {
    result.current.setSelection('DEF');
  });
  expect(result.current.selectedId).toBe('DEF');
  expect(result.current.selectedId).not.toBe(null);
});

it('Should set a new value on setSe[lection', () => {
  const { result } = renderHook(() => useSelect('abc'));
  expect(result.current.selectedId).toBe('abc');
  act(() => {
    result.current.setSelection('DEF');
  });
  expect(result.current.selectedId).toBe('DEF');
});
