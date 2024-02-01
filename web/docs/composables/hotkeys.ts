import hotkey from "hotkeys-js";
import { injectable } from "provueder";

type GlobalHotkey = () => void;
type ScopedHotkey = (scope: string) => void;

export const { Provider: HotkeysProvider, Context: HotkeysContext } =
  injectable<{
    globals: GlobalHotkey[];
    scopes: {
      [key: string]: ScopedHotkey[];
    };
    load: (scope?: string) => void;
    unload: () => void;
  }>({
    globals: [],
    scopes: {},

    load(scope?: string) {
      for (const hotkey of this.globals) hotkey();

      // eslint-disable-next-line security/detect-object-injection
      if (scope) for (const hotkey of this.scopes[scope]) hotkey();
    },

    unload: () => hotkey.unbind(),
  });
