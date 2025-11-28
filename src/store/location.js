import { locations } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

// Root breadcrumb for Portfolio
const ROOT_BREADCRUMB = { id: "portfolio-root", name: "Portfolio" };

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    navigationPath: [ROOT_BREADCRUMB, DEFAULT_LOCATION],

    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) return;
        state.activeLocation = location;
      }),

    navigateTo: (location) =>
      set((state) => {
        state.activeLocation = location;
        state.navigationPath.push(location);
      }),

    navigateToIndex: (index) =>
      set((state) => {
        if (index < 0 || index >= state.navigationPath.length) return;
        state.activeLocation = state.navigationPath[index];
        state.navigationPath = state.navigationPath.slice(0, index + 1);
      }),

    goBack: () =>
      set((state) => {
        if (state.navigationPath.length <= 1) return;
        state.navigationPath.pop();
        state.activeLocation =
          state.navigationPath[state.navigationPath.length - 1];
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
        state.navigationPath = [ROOT_BREADCRUMB, DEFAULT_LOCATION];
      }),

    resetToRoot: () =>
      set((state) => {
        // Show root Portfolio (all locations) on mobile
        state.activeLocation = null;
        state.navigationPath = [ROOT_BREADCRUMB];
      }),
  }))
);

export default useLocationStore;
