import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key: string, defaultValue: string | boolean) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key: string, defaultValue: string | boolean) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(
  key: string,
  defaultValue: string | boolean,
  storageObject: Storage
) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
